# V3 Swaps

SwapX V3 introduces concentrated liquidity, allowing for more capital-efficient trades but adding complexity to the swap logic (e.g., fee tiers).

## Single Hop Swap

A direct swap between two tokens in a single pool.

```typescript
import { TradeType, Token, CurrencyAmount, Percent } from '@swapx-lib/sdk-core';
import { Route, Trade, Pool, SwapRouter } from '@swapx-lib/v3-sdk';

async function executeV3Swap(
    pool: Pool,
    tokenIn: Token,
    tokenOut: Token,
    amountIn: string,
    walletAddress: string
) {
    // 1. Construct Trade
    const route = new Route([pool], tokenIn, tokenOut);
    const trade = await Trade.createUncheckedTrade({
        route,
        inputAmount: CurrencyAmount.fromRawAmount(tokenIn, amountIn),
        outputAmount: CurrencyAmount.fromRawAmount(tokenOut, '0'), // Estimate
        tradeType: TradeType.EXACT_INPUT
    });

    // 2. Prepare Call
    const options = {
        slippageTolerance: new Percent(50, 10000), // 0.5%
        recipient: walletAddress,
        deadline: Math.floor(Date.now() / 1000) + 60 * 20
    };

    const methodParameters = SwapRouter.swapCallParameters([trade], options);

    // 3. Send Transaction
    // Use methodParameters.calldata and methodParameters.value
}
```