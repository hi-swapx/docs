# SDK Errors

Common errors encountered when using the SwapX SDKs.

## "Invariant failed: RATIO"

**Cause:** You are trying to create a `Price` or `Fraction` with an invalid denominator (zero) or inconsistent types.
**Fix:** Check that your token reserves are not zero.

## "Invariant failed: ADDRESSES"

**Cause:** You are trying to create a Pair or Pool with identical token addresses, or sorting failed.
**Fix:** Ensure `TokenA` and `TokenB` have different addresses.

## "Unsupported Chain ID"

**Cause:** The SDK default configurations might not include the SwapX Testnet ID (`33772211`) by default in some check functions if they rely on hardcoded lists.
**Fix:** Always pass the explicit `chainId` or `ChainId` object if available. When using `Token`, ensure you pass `33772211`.
