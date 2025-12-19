# Reading Chain Data

In this tutorial, we will learn how to fetch data from SwapX V2 pairs and V3 pools using the SDKs and `ethers`.

## Fetching a V2 Pair

To fetch data for a V2 pair, you generally need the reserves of the two tokens.

```typescript
import { Token, ChainId, CurrencyAmount } from '@swapx-lib/sdk-core';
import { Pair } from '@swapx-lib/v2-sdk';
import { ethers } from 'ethers';

// ... (provider setup from previous step)

const V2_FACTORY_ADDRESS = '0xF75d30dD587b0616698912aA1E3608fBc8ea852a';
const CHAIN_ID = 33772211;

const TOKEN_A = new Token(CHAIN_ID, '0x...', 18, 'TKA', 'Token A');
const TOKEN_B = new Token(CHAIN_ID, '0x...', 18, 'TKB', 'Token B');

async function getPairData() {
    // 1. Get Pair Address
    // Note: You can use Pair.getAddress(TOKEN_A, TOKEN_B) if you have the init code hash, 
    // otherwise query the factory.
    const factoryAbi = ['function getPair(address, address) view returns (address)'];
    const factory = new ethers.Contract(V2_FACTORY_ADDRESS, factoryAbi, provider);
    const pairAddress = await factory.getPair(TOKEN_A.address, TOKEN_B.address);

    // 2. Fetch Reserves
    const pairAbi = ['function getReserves() view returns (uint112, uint112, uint32)'];
    const pairContract = new ethers.Contract(pairAddress, pairAbi, provider);
    const [reserve0, reserve1] = await pairContract.getReserves();

    // 3. Create Pair Instance
    const pair = new Pair(
        CurrencyAmount.fromRawAmount(TOKEN_A, reserve0.toString()),
        CurrencyAmount.fromRawAmount(TOKEN_B, reserve1.toString())
    );

    console.log(`Reserve 0: ${pair.reserve0.toSignificant(6)}`);
    console.log(`Reserve 1: ${pair.reserve1.toSignificant(6)}`);
    return pair;
}
```

## Fetching a V3 Pool

V3 Pools require more data: `liquidity` and `slot0` (current price and tick).

```typescript
import { Pool, FeeAmount } from '@swapx-lib/v3-sdk';

const V3_FACTORY_ADDRESS = '0xE0d21283d577Ec16CC7F135a5DbFc4aa30F2c2AB';

async function getPoolData() {
    // 1. Compute or Get Pool Address
    const factoryAbi = ['function getPool(address, address, uint24) view returns (address)'];
    const factory = new ethers.Contract(V3_FACTORY_ADDRESS, factoryAbi, provider);
    const poolAddress = await factory.getPool(TOKEN_A.address, TOKEN_B.address, FeeAmount.MEDIUM); // 0.3% fee

    // 2. Fetch State
    const poolAbi = [
        'function liquidity() view returns (uint128)',
        'function slot0() view returns (uint160 sqrtPriceX96, int24 tick, uint16 observationIndex, uint16 observationCardinality, uint16 observationCardinalityNext, uint8 feeProtocol, bool unlocked)'
    ];
    const poolContract = new ethers.Contract(poolAddress, poolAbi, provider);
    
    const [liquidity] = await poolContract.liquidity();
    const [sqrtPriceX96, tick] = await poolContract.slot0();

    // 3. Create Pool Instance
    const pool = new Pool(
        TOKEN_A,
        TOKEN_B,
        FeeAmount.MEDIUM,
        sqrtPriceX96.toString(),
        liquidity.toString(),
        tick
    );
    
    console.log(`Pool Price: ${pool.token0Price.toSignificant(6)} ${TOKEN_B.symbol} per ${TOKEN_A.symbol}`);
}
```
