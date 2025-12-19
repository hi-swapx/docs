# V2 Liquidity

## Adding Liquidity

To add liquidity, you must provide both tokens in a ratio that matches the current pool price.

```typescript
import { Token, CurrencyAmount, Percent } from '@swapx-lib/sdk-core';
import { Pair } from '@swapx-lib/v2-sdk';

// Parameters
// tokenA, tokenB: Token objects
// amountADesired, amountBDesired: string (raw values)
// slippage: Percent (e.g. 0.5%)

// 1. Approve Tokens
// Approve V2_ROUTER_ADDRESS for both Token A and Token B

// 2. Call Router
/*
  function addLiquidity(
      address tokenA,
      address tokenB,
      uint amountADesired,
      uint amountBDesired,
      uint amountAMin,
      uint amountBMin,
      address to,
      uint deadline
  )
*/
```

## Removing Liquidity

To remove liquidity, you burn your LP tokens (Liquidity Provider tokens).

```typescript
// 1. Approve LP Token
// The Pair contract is an ERC20. Approve V2_ROUTER_ADDRESS to spend your LP tokens.

// 2. Call Router
/*
  function removeLiquidity(
      address tokenA,
      address tokenB,
      uint liquidity, // Amount of LP tokens to burn
      uint amountAMin,
      uint amountBMin,
      address to,
      uint deadline
  )
*/
```
