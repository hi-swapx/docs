@swapx-lib/v3-sdk / Exports / Pool

# Class: Pool

Represents a V3 pool

## Table of contents

### Constructors

- [constructor](Pool.md#constructor)

### Properties

- [\_token0Price](Pool.md#_token0price)
- [\_token1Price](Pool.md#_token1price)
- [fee](Pool.md#fee)
- [liquidity](Pool.md#liquidity)
- [sqrtRatioX96](Pool.md#sqrtratiox96)
- [tickCurrent](Pool.md#tickcurrent)
- [tickDataProvider](Pool.md#tickdataprovider)
- [token0](Pool.md#token0)
- [token1](Pool.md#token1)

### Accessors

- [chainId](Pool.md#chainid)
- [tickSpacing](Pool.md#tickspacing)
- [token0Price](Pool.md#token0price)
- [token1Price](Pool.md#token1price)

### Methods

- [getInputAmount](Pool.md#getinputamount)
- [getOutputAmount](Pool.md#getoutputamount)
- [involvesToken](Pool.md#involvestoken)
- [priceOf](Pool.md#priceof)
- [swap](Pool.md#swap)
- [getAddress](Pool.md#getaddress)

## Constructors

### constructor

• **new Pool**(`tokenA`, `tokenB`, `fee`, `sqrtRatioX96`, `liquidity`, `tickCurrent`, `ticks?`)

Construct a pool

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tokenA` | `Token` | `undefined` | One of the tokens in the pool |
| `tokenB` | `Token` | `undefined` | The other token in the pool |
| `fee` | `FeeAmount` | `undefined` | The fee in hundredths of a bips of the input amount of every swap that is collected by the pool |
| `sqrtRatioX96` | `BigintIsh` | `undefined` | The sqrt of the current ratio of amounts of token1 to token0 |
| `liquidity` | `BigintIsh` | `undefined` | The current value of in range liquidity |
| `tickCurrent` | `number` | `undefined` | The current tick of the pool |
| `ticks` | `TickDataProvider` \| ([`Tick`](Tick.md) \| `TickConstructorArgs`)[] | `NO_TICK_DATA_PROVIDER_DEFAULT` | The current state of the pool ticks or a data provider that can return tick data |

#### Defined in

entities/pool.ts:70

## Properties

### \_token0Price

• `Private` `Optional` **\_token0Price**: `Price`\<`Token`, `Token`\>

#### Defined in

entities/pool.ts:41

___

### \_token1Price

• `Private` `Optional` **\_token1Price**: `Price`\<`Token`, `Token`\>

#### Defined in

entities/pool.ts:42

___

### fee

• `Readonly` **fee**: `FeeAmount`

#### Defined in

entities/pool.ts:35

___

### liquidity

• `Readonly` **liquidity**: `default`

#### Defined in

entities/pool.ts:37

___

### sqrtRatioX96

• `Readonly` **sqrtRatioX96**: `default`

#### Defined in

entities/pool.ts:36

___

### tickCurrent

• `Readonly` **tickCurrent**: `number`

#### Defined in

entities/pool.ts:38

___

### tickDataProvider

• `Readonly` **tickDataProvider**: `TickDataProvider`

#### Defined in

entities/pool.ts:39

___

### token0

• `Readonly` **token0**: `Token`

#### Defined in

entities/pool.ts:33

___

### token1

• `Readonly` **token1**: `Token`

#### Defined in

entities/pool.ts:34

## Accessors

### chainId

• `get` **chainId**(): `number`

Returns the chain ID of the tokens in the pool.

#### Returns

`number`

#### Defined in

entities/pool.ts:149

___

### tickSpacing

• `get` **tickSpacing**(): `number`

#### Returns

`number`

#### Defined in

entities/pool.ts:317

___

### token0Price

• `get` **token0Price**(): `Price`\<`Token`, `Token`\>

Returns the current mid price of the pool in terms of token0, i.e. the ratio of token1 over token0

#### Returns

`Price`\<`Token`, `Token`\>

#### Defined in

entities/pool.ts:109

___

### token1Price

• `get` **token1Price**(): `Price`\<`Token`, `Token`\>

Returns the current mid price of the pool in terms of token1, i.e. the ratio of token0 over token1

#### Returns

`Price`\<`Token`, `Token`\>

#### Defined in

entities/pool.ts:124

## Methods

### getInputAmount

▸ **getInputAmount**(`outputAmount`, `sqrtPriceLimitX96?`): `Promise`\<[`CurrencyAmount`\<`Token`\>, [`Pool`](Pool.md)]\>

Given a desired output amount of a token, return the computed input amount and a pool with state updated after the trade

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputAmount` | `CurrencyAmount`\<`Token`\> | the output amount for which to quote the input amount |
| `sqrtPriceLimitX96?` | `default` | The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap |

#### Returns

`Promise`\<[`CurrencyAmount`\<`Token`\>, [`Pool`](Pool.md)]\>

The input amount and the pool with updated state

#### Defined in

entities/pool.ts:185

___

### getOutputAmount

▸ **getOutputAmount**(`inputAmount`, `sqrtPriceLimitX96?`): `Promise`\<[`CurrencyAmount`\<`Token`\>, [`Pool`](Pool.md)]\>

Given an input amount of a token, return the computed output amount, and a pool with state updated after the trade

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputAmount` | `CurrencyAmount`\<`Token`\> | The input amount for which to quote the output amount |
| `sqrtPriceLimitX96?` | `default` | The Q64.96 sqrt price limit |

#### Returns

`Promise`\<[`CurrencyAmount`\<`Token`\>, [`Pool`](Pool.md)]\>

The output amount and the pool with updated state

#### Defined in

entities/pool.ts:159

___

### involvesToken

▸ **involvesToken**(`token`): `boolean`

Returns true if the token is either token0 or token1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `Token` | The token to check |

#### Returns

`boolean`

True if token is either token0 or token

#### Defined in

entities/pool.ts:102

___

### priceOf

▸ **priceOf**(`token`): `Price`\<`Token`, `Token`\>

Return the price of the given token in terms of the other token in the pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `Token` | The token to return price of |

#### Returns

`Price`\<`Token`, `Token`\>

The price of the given token, in terms of the other.

#### Defined in

entities/pool.ts:141

___

### swap

▸ `Private` **swap**(`zeroForOne`, `amountSpecified`, `sqrtPriceLimitX96?`): `Promise`\<\{ `amountCalculated`: `default` ; `liquidity`: `default` ; `sqrtRatioX96`: `default` ; `tickCurrent`: `number`  \\}\>

Executes a swap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zeroForOne` | `boolean` | Whether the amount in is token0 or token1 |
| `amountSpecified` | `default` | The amount of the swap, which implicitly configures the swap as exact input (positive), or exact output (negative) |
| `sqrtPriceLimitX96?` | `default` | The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap |

#### Returns

`Promise`\<\{ `amountCalculated`: `default` ; `liquidity`: `default` ; `sqrtRatioX96`: `default` ; `tickCurrent`: `number`  \}\>

amountCalculated

sqrtRatioX96

liquidity

tickCurrent

#### Defined in

entities/pool.ts:215

___

### getAddress

▸ `Static` **getAddress**(`tokenA`, `tokenB`, `fee`, `initCodeHashManualOverride?`, `factoryAddressOverride?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenA` | `Token` |
| `tokenB` | `Token` |
| `fee` | `FeeAmount` |
| `initCodeHashManualOverride?` | `string` |
| `factoryAddressOverride?` | `string` |

#### Returns

`string`

#### Defined in

entities/pool.ts:44
