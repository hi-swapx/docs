# Transaction Reverts

When a transaction fails on the blockchain, it often provides a revert reason. Here are common ones in SwapX.

## "TransferHelper: TRANSFER_FROM_FAILED"

**Context:** V2 Router, V3 Router, Position Manager
**Cause:**
1.  **Allowance:** You haven't approved the contract to spend your tokens.
2.  **Balance:** You don't have enough tokens in your wallet.
3.  **Token Logic:** The token has a fee on transfer or behaves non-standardly (e.g., USDT on some chains requires reset approval to 0 first).

**Fix:** Check your token balance and allowances.

## "UniswapV2: K" (or "SwapX: K")

**Context:** V2 Swaps
**Cause:** The constant product invariant check failed. Usually happens if someone manipulates the pool reserves during your transaction or if there's a logic error in fee calculation.
**Fix:** Usually not user-fixable unless you are interacting directly with the Pair. Ensure you are using the Router.

## "STF" (Safe Transfer Failed)

**Context:** V3 Pools
**Cause:** Similar to `TRANSFER_FROM_FAILED`. The pool failed to pull tokens from you or push tokens to you.
**Fix:** Check balances and allowances.

## "Old" or "Expired"

**Context:** Routers
**Cause:** The `deadline` parameter you sent is in the past.
**Fix:** Set `deadline` to `Math.floor(Date.now() / 1000) + X` where X is seconds in the future.
