id: quoting
title: Getting a Quote
---     

## Introduction

:::info
If you need a briefer on the SDK and to learn more about how these guides connect to the examples repository, please visit our [background](../01-background.md) page!
:::

In this example we will use `quoteExactInputSingle` to get a quote for the pair **USDC - WETH**.
The inputs are the **token in**, the **token out**, the **amount in** and the **fee**.

The **fee** input parameters represents the swap fee that distributed to all in range liquidity at the time of the swap. It is one of the identifiers of a Pool, the others being **tokenIn** and **tokenOut**.

The guide will **cover**:

1. Computing the Pool's deployment address
2. Referencing the Pool contract and fetching metadata
3. Referencing the Quoter contract and getting a quote

At the end of the guide, we should be able to fetch a quote for the given input token pair and the input token amount with the press of a button on the web application.

For this guide, the following SwapX packages are used:

- `@swapx/v3-sdk`
- `@swapx/sdk-core`


## Example configuration

We will use the example configuration `CurrentConfig` in most code snippets of this guide. It has the format:

```typescript
import { Token } from '@swapx/sdk-core'

interface ExampleConfig {
  rpc: {
    local: string
    mainnet: string
  }
  tokens: {
    in: Token
    amountIn: number
    out: Token
    poolFee: number
  }
}

export const CurrentConfig: ExampleConfig = {...}
```

The default config of the example uses a local fork of mainnet. 
To connect to mainnet directly, set the `mainnet` field in the config:

```typescript
export const CurrentConfig: ExampleConfig = {
  rpc: {
    local: 'http://localhost:8545',
    mainnet: 'https://mainnet.infura.io/v3/0ac57a06f2994538829c14745750d721',
  },
  tokens: {
    in: USDC_TOKEN,
    amountIn: 1000,
    out: WETH_TOKEN,
    poolFee: FeeAmount.MEDIUM,
  },
}
```


## Computing the Pool's deployment address

To interact with the **USDC - WETH** Pool contract, we first need to compute its deployment address.
The SDK provides a utility method for that:

```typescript
import { computePoolAddress } from '@swapx/v3-sdk' 

const currentPoolAddress = computePoolAddress({
  factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
  tokenA: CurrentConfig.tokens.in,
  tokenB: CurrentConfig.tokens.out,
  fee: CurrentConfig.tokens.poolFee,
})
```

Since each *SwapX V3 Pool* is uniquely identified by 3 characteristics (token in, token out, fee), we use those
in combination with the address of the *PoolFactory* contract to compute the address of the **USDC - ETH** Pool.

```typescript
const WETH_TOKEN = new Token(
  1,
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  18,
  'WETH',
  'Wrapped Ether'
)

const USDC_TOKEN = new Token(
  1,
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  6,
  'USDC',
  'USD//C'
)
```

These constants are used in the `config.ts` file, as mentioned in the Introduction.


## Referencing the Pool contract and fetching metadata

Now that we have the deployment address of the **USDC - ETH** Pool, we can construct an instance of an **ethers** `Contract` to interact with it:

```typescript
import { ethers } from 'ethers'

const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
const poolContract = new ethers.Contract(
  currentPoolAddress,
  ISwapXV3PoolABI.abi,
  provider
)
```

To construct the *Contract* we need to provide the address of the contract, its ABI and the provider that will carry out the RPC call for us.

```typescript
import ISwapXV3PoolABI from '@swapx/v3-core/artifacts/contracts/interfaces/ISwapXV3Pool.sol/ISwapXV3Pool.json'
```

Having constructed our reference to the contract, we can now access its methods through our provider.
We use a batch `Promise` call. This approach queries state data concurrently, rather than sequentially, to minimize the chance of fetching out of sync data that may be returned if sequential queries are executed over the span of two blocks:

```typescript
const [token0, token1, fee, liquidity, slot0] = await Promise.all([
  poolContract.token0(),
  poolContract.token1(),
  poolContract.fee(),
  poolContract.liquidity(),
  poolContract.slot0(),
])
```

The return values of these methods will become inputs to the quote fetching function.
The `token0` and `token1` variables are the addresses of the tokens in the Pool and should not be mistaken for `Token` objects from the sdk.

:::note
In this example, the metadata we fetch is already present in our inputs. This guide fetches this information first in order to show how to fetch any metadata, which will be expanded on in future guides.
:::

## Referencing the Quoter contract and getting a quote

To get quotes for trades, SwapX has deployed a **Quoter Contract**. We will use this contract to fetch the output amount we can expect for our trade, without actually executing the trade.

Like we did for the Pool contract, we need to construct an instance of an **ethers** `Contract` for our Quoter contract in order to interact with it:

```typescript
const quoterContract = new ethers.Contract(
  QUOTER_CONTRACT_ADDRESS,
  Quoter.abi,
  getProvider()
)
```


In an ideal world, the quoter functions would be `view` functions, which would make them very easy to query on-chain with minimal gas costs. However, the SwapX V3 Quoter contracts rely on state-changing calls designed to be reverted to return the desired data. This means calling the quoter will be very expensive and should not be called on-chain.

To get around this difficulty, we can use the `callStatic` method provided by the **ethers.js** `Contract` instances.
This is a useful method that submits a state-changing transaction to an Ethereum node, but asks the node to simulate the state change, rather than to execute it. Our script can then return the result of the simulated state change:

```typescript
const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
  token0,
  token1,
  fee,
  fromReadableAmount(
    CurrentConfig.tokens.amountIn,
    CurrentConfig.tokens.in.decimals
  ).toString(),
  0
)
```

The `fromReadableAmount()` function creates the amount of the smallest unit of a token from the full unit amount and the decimals.

The result of the call is the number of output tokens you'd receive for the quoted swap.

It should be noted that `quoteExactInputSingle` is only 1 of 4 different methods that the quoter offers:

1. `quoteExactInputSingle` - given the amount you want to swap, produces a quote for the amount out for a swap of a single pool
2. `quoteExactInput` - given the amount you want to swap, produces a quote for the amount out for a swap over multiple pools
3. `quoteExactOutputSingle` - given the amount you want to get out, produces a quote for the amount in for a swap over a single pool
4. `quoteExactOutput`  - given the amount you want to get out, produces a quote for the amount in for a swap over multiple pools

If we want to trade two tokens that do not share a pool with each other, we will need to make swaps over multiple pools.
This is where the `quoteExactInput` and `quoteExactOutput` methods come in.
We will dive deeper into routing in the [routing guide](03-routing.md).

For the `exactOutput` and `exactOutputSingle` methods, we need to keep in mind that a pool can not give us more than the amount of Tokens it holds.
If we try to get a quote on an output of 100 WETH from a Pool that only holds 50 WETH, the function call will fail.

## Next Steps

Now that you're able to make a quote, check out our next guide on [trading](./02-trading.md) using this quote!
