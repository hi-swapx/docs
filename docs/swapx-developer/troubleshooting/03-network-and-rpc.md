# Network & RPC Issues

## Connection Refused / Timeout

**Cause:** The RPC endpoint is down or your internet connection is unstable.
**Fix:** 
- Check `https://rpc-testnet.xone.plus/` status.
- Try a different network connection.

## Wrong Chain ID

**Symptom:** Transactions are signed but never mined, or revert immediately with "Chain ID mismatch".
**Fix:** Ensure your wallet (Metamask, etc.) and your code are both set to **33772211**.

## Rate Limiting

**Symptom:** `429 Too Many Requests`.
**Fix:** If you are querying data heavily (e.g., fetching 1000 pools), slow down your requests or use `multicall` to batch them.
