# V3 Liquidity

V3 Liquidity is represented by Non-Fungible Tokens (NFTs) rather than ERC20s. You select a specific price range.

## Minting a New Position

```typescript
import { Position, NonfungiblePositionManager, Pool } from '@swapx-lib/v3-sdk';
import { Percent, CurrencyAmount } from '@swapx-lib/sdk-core';

async function mintPosition(pool: Pool, amount0: string, amount1: string, address: string) {
    const position = Position.fromAmounts({
        pool,
        tickLower: -887220, // Example range
        tickUpper: 887220,
        amount0,
        amount1,
        useFullPrecision: true
    });

    const mintOptions = {
        recipient: address,
        deadline: Math.floor(Date.now() / 1000) + 60 * 20,
        slippageTolerance: new Percent(50, 10000)
    };

    const { calldata, value } = NonfungiblePositionManager.addCallParameters(position, mintOptions);

    // Send transaction to NONFUNGIBLE_POSITION_MANAGER_ADDRESS
}
```

## Collecting Fees

Fees are not automatically reinvested. You must collect them manually.

```typescript
const collectOptions = {
    tokenId: 123, // Your NFT ID
    expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(token0, 0), // Collect all
    expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(token1, 0),
    recipient: address
};

const { calldata, value } = NonfungiblePositionManager.collectCallParameters(collectOptions);
```
