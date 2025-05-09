---
sidebar_label: "第四步：贸易"
sidebar_position: 4
---

> Looking for a [quickstart](quick-start)?

The SDK _cannot execute trades or send transactions on your behalf_. Rather, it offers utility classes and functions which make it easy to calculate the data required to safely interact with SwapX. Nearly everything you need to safely transact with SwapX is provided by the [Trade](reference/trade) entity. However, it is your responsibility to use this data to send transactions in whatever context makes sense for your application.

This guide will focus exclusively on sending a transaction to the [latest SwapX V2 router](contracts/v2/reference/smart-contracts/router-02)

# Sending a Transaction to the Router

Let's say we want to trade 1 WETH for as much DAI as possible:

```typescript
import {
  ChainId,
  Token,
  WETH9,
  CurrencyAmount,
  TradeType,
} from "@swapx/sdk-core";
import { Trade, Route } from "@swapx/v2-sdk";

const DAI = new Token(
  ChainId.MAINNET,
  "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  18
);

// See the Fetching Data guide to learn how to get Pair data
const pair = await createPair(DAI, WETH9[DAI.chainId]);

const route = new Route([pair], WETH9[DAI.chainId], DAI);

const amountIn = "1000000000000000000"; // 1 WETH

const trade = new Trade(
  route,
  CurrencyAmount.fromRawAmount(WETH9[DAI.chainId], amountIn),
  TradeType.EXACT_INPUT
);
```

So, we've constructed a trade entity, but how do we use it to actually send a transaction? There are still a few pieces we need to put in place.

Before going on, we should explore how ETH works in the context of trading. Internally, the SDK uses WETH, as all SwapX V2 pairs use WETH under the hood. However, it's perfectly possible for you as an end user to use ETH, and rely on the router to handle converting to/from WETH. So, let's use ETH.

The first step is selecting the appropriate router function. The names of router functions are intended to be self-explanatory; in this case we want [swapExactETHForTokens](contracts/v2/reference/smart-contracts/router-02#swapexactethfortokens), because we're swapping an exact amount of ETH for tokens.

That Solidity interface for this function is:

```solidity
function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

Jumping back to our trading code, we can construct all the necessary parameters:

```typescript
import { Percent } from "@swapx/sdk-core";

const slippageTolerance = new Percent("50", "10000"); // 50 bips, or 0.50%

const amountOutMin = trade.minimumAmountOut(slippageTolerance).toExact(); // needs to be converted to e.g. decimal string
const path = [WETH9[DAI.chainId].address, DAI.address];
const to = ""; // should be a checksummed recipient address
const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from the current Unix time
const value = trade.inputAmount.toExact(); // // needs to be converted to e.g. decimal string
```

The slippage tolerance encodes _how large of a price movement we're willing to tolerate before our trade will fail to execute_. Since Ethereum transactions are broadcast and confirmed in an adversarial environment, this tolerance is the best we can do to protect ourselves against price movements. We use this slippage tolerance to calculate the _minumum_ amount of DAI we must receive before our trade reverts, thanks to [minimumAmountOut](reference/trade#minimumamountout-since-204). Note that this code calculates this worst-case outcome _assuming that the current price, i.e the route's mid price,_ is fair (usually a good assumption because of arbitrage).

The path is simply the ordered list of token addresses we're trading through, in our case WETH and DAI (note that we use the WETH address, even though we're using ETH).

The to address is the address that will receive the DAI.

The deadline is the Unix timestamp after which the transaction will fail, to protect us in the case that our transaction takes a long time to confirm and we wish to rescind our trade.

The value is the amount of ETH that must be included as the `msg.value` in our transaction.
