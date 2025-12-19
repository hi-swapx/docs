@swapx-lib/v3-sdk / Exports / SqrtPriceMath

# Class: SqrtPriceMath

## Table of contents

### Constructors

- [constructor](SqrtPriceMath.md#constructor)

### Methods

- [getAmount0Delta](SqrtPriceMath.md#getamount0delta)
- [getAmount1Delta](SqrtPriceMath.md#getamount1delta)
- [getNextSqrtPriceFromAmount0RoundingUp](SqrtPriceMath.md#getnextsqrtpricefromamount0roundingup)
- [getNextSqrtPriceFromAmount1RoundingDown](SqrtPriceMath.md#getnextsqrtpricefromamount1roundingdown)
- [getNextSqrtPriceFromInput](SqrtPriceMath.md#getnextsqrtpricefrominput)
- [getNextSqrtPriceFromOutput](SqrtPriceMath.md#getnextsqrtpricefromoutput)

## Constructors

### constructor

• `Private` **new SqrtPriceMath**()

Cannot be constructed.

#### Defined in

utils/sqrtPriceMath.ts:23

## Methods

### getAmount0Delta

▸ `Static` **getAmount0Delta**(`sqrtRatioAX96`, `sqrtRatioBX96`, `liquidity`, `roundUp`): `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sqrtRatioAX96` | `default` |
| `sqrtRatioBX96` | `default` |
| `liquidity` | `default` |
| `roundUp` | `boolean` |

#### Returns

`default`

#### Defined in

utils/sqrtPriceMath.ts:25

___

### getAmount1Delta

▸ `Static` **getAmount1Delta**(`sqrtRatioAX96`, `sqrtRatioBX96`, `liquidity`, `roundUp`): `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sqrtRatioAX96` | `default` |
| `sqrtRatioBX96` | `default` |
| `liquidity` | `default` |
| `roundUp` | `boolean` |

#### Returns

`default`

#### Defined in

utils/sqrtPriceMath.ts:38

___

### getNextSqrtPriceFromAmount0RoundingUp

▸ `Static` `Private` **getNextSqrtPriceFromAmount0RoundingUp**(`sqrtPX96`, `liquidity`, `amount`, `add`): `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sqrtPX96` | `default` |
| `liquidity` | `default` |
| `amount` | `default` |
| `add` | `boolean` |

#### Returns

`default`

#### Defined in

utils/sqrtPriceMath.ts:71

___

### getNextSqrtPriceFromAmount1RoundingDown

▸ `Static` `Private` **getNextSqrtPriceFromAmount1RoundingDown**(`sqrtPX96`, `liquidity`, `amount`, `add`): `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sqrtPX96` | `default` |
| `liquidity` | `default` |
| `amount` | `default` |
| `add` | `boolean` |

#### Returns

`default`

#### Defined in

utils/sqrtPriceMath.ts:100

___

### getNextSqrtPriceFromInput

▸ `Static` **getNextSqrtPriceFromInput**(`sqrtPX96`, `liquidity`, `amountIn`, `zeroForOne`): `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sqrtPX96` | `default` |
| `liquidity` | `default` |
| `amountIn` | `default` |
| `zeroForOne` | `boolean` |

#### Returns

`default`

#### Defined in

utils/sqrtPriceMath.ts:48

___

### getNextSqrtPriceFromOutput

▸ `Static` **getNextSqrtPriceFromOutput**(`sqrtPX96`, `liquidity`, `amountOut`, `zeroForOne`): `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sqrtPX96` | `default` |
| `liquidity` | `default` |
| `amountOut` | `default` |
| `zeroForOne` | `boolean` |

#### Returns

`default`

#### Defined in

utils/sqrtPriceMath.ts:57
