# Executing Trades

This guide covers how to construct a trade and send it to the blockchain.

## V2 Swap

A V2 swap involves finding a route (e.g., A -> B or A -> C -> B) and executing it via the Router.

```typescript
import { Route, Trade } from '@swapx-lib/v2-sdk';
import { TradeType, Percent } from '@swapx-lib/sdk-core';

async function swapV2(pair, amountIn) {
    // 1. Create Route & Trade
    const route = new Route([pair], TOKEN_A, TOKEN_B);
    const trade = new Trade(
        route,
        CurrencyAmount.fromRawAmount(TOKEN_A, amountIn),
        TradeType.EXACT_INPUT
    );

    // 2. Prepare Transaction
    const slippageTolerance = new Percent(50, 10000); // 0.5%
    const amountOutMin = trade.minimumAmountOut(slippageTolerance).toExact();
    const path = [TOKEN_A.address, TOKEN_B.address];
    const to = wallet.address;
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes
    const amountInRaw = trade.inputAmount.toExact(); // Depending on decimals, format correctly

    // 3. Execute
    const routerAbi = ['function swapExactTokensForTokens(uint, uint, address[], address, uint) external returns (uint[])'];
    const router = new ethers.Contract(XOC_V2_ROUTER_ADDRESS, routerAbi, wallet);

    // Note: You must approve the router to spend TOKEN_A first!
    const tx = await router.swapExactTokensForTokens(
        ethers.parseUnits(amountInRaw, TOKEN_A.decimals),
        ethers.parseUnits(amountOutMin, TOKEN_B.decimals),
        path,
        to,
        deadline
    );
    console.log('Transaction Hash:', tx.hash);
}
```

## V3 Swap

V3 swaps use the `SwapRouter02` (or `SwapRouter`) and require constructing a `Trade` object with a V3 `Route`.

```typescript
import { Route, Trade, SwapRouter } from '@swapx-lib/v3-sdk';

async function swapV3(pool, amountIn) {
    // 1. Create Route & Trade
    const route = new Route([pool], TOKEN_A, TOKEN_B);
    const trade = await Trade.createUncheckedTrade({
        route,
        inputAmount: CurrencyAmount.fromRawAmount(TOKEN_A, amountIn),
        outputAmount: CurrencyAmount.fromRawAmount(TOKEN_B, '0'), // Placeholder
        tradeType: TradeType.EXACT_INPUT
    });

    // 2. Encode Call Parameters
    const options = {
        slippageTolerance: new Percent(50, 10000), // 0.5%
        recipient: wallet.address,
        deadline: Math.floor(Date.now() / 1000) + 60 * 20,
    };

    const methodParameters = SwapRouter.swapCallParameters([trade], options);

    // 3. Execute
    const tx = {
        data: methodParameters.calldata,
        to: XOC_SWAP_ROUTER_02_ADDRESS,
        value: methodParameters.value,
        from: wallet.address,
        gasLimit: 500000 // Estimate gas in production
    };

    const sentTx = await wallet.sendTransaction(tx);
    console.log('Transaction Hash:', sentTx.hash);
}
```
