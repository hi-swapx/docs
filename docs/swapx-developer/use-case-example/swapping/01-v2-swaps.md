# V2 Swaps

SwapX V2 is based on the constant product formula $x * y = k$. It is simpler than V3 and uses standard ERC20 pairs.

## Exact Input Swap

You want to sell exactly `100 TKA` and get as much `TKB` as possible.

```typescript
import { TradeType, Token, CurrencyAmount, Percent } from '@swapx-lib/sdk-core';
import { Route, Trade, Pair } from '@swapx-lib/v2-sdk';

async function swapExactInput(
    pair: Pair, 
    tokenIn: Token, 
    tokenOut: Token, 
    amountIn: string
) {
    const route = new Route([pair], tokenIn, tokenOut);
    const trade = new Trade(
        route,
        CurrencyAmount.fromRawAmount(tokenIn, amountIn),
        TradeType.EXACT_INPUT
    );

    console.log(`Execution Price: ${trade.executionPrice.toSignificant(6)}`);
    console.log(`Minimum Output: ${trade.minimumAmountOut(new Percent(50, 10000)).toSignificant(6)}`); // 0.5% slippage
    
    // ... Execute transaction via Router
}
```

## Exact Output Swap

You want to buy exactly `50 TKB` and pay as little `TKA` as possible.

```typescript
async function swapExactOutput(
    pair: Pair, 
    tokenIn: Token, 
    tokenOut: Token, 
    amountOut: string
) {
    const route = new Route([pair], tokenIn, tokenOut);
    const trade = new Trade(
        route,
        CurrencyAmount.fromRawAmount(tokenOut, amountOut),
        TradeType.EXACT_OUTPUT
    );

    console.log(`Maximum Input: ${trade.maximumAmountIn(new Percent(50, 10000)).toSignificant(6)}`);
    
    // ... Execute transaction via Router
}
```
