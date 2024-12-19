# Class: Payments

## Table of contents

### Constructors

- [constructor](Payments.md#constructor)

### Properties

- [INTERFACE](Payments.md#interface)

### Methods

- [encodeFeeBips](Payments.md#encodefeebips)
- [encodeRefundETH](Payments.md#encoderefundeth)
- [encodeSweepToken](Payments.md#encodesweeptoken)
- [encodeUnwrapWETH9](Payments.md#encodeunwrapweth9)

## Constructors

### constructor

• `Private` **new Payments**()

Cannot be constructed.

## Properties

### INTERFACE

▪ `Static` **INTERFACE**: `Interface`

## Methods

### encodeFeeBips

▸ `Static` `Private` **encodeFeeBips**(`fee`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fee` | `Percent` |

#### Returns

`string`

___

### encodeRefundETH

▸ `Static` **encodeRefundETH**(): `string`

#### Returns

`string`

___

### encodeSweepToken

▸ `Static` **encodeSweepToken**(`token`, `amountMinimum`, `recipient`, `feeOptions?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `Token` |
| `amountMinimum` | `default` |
| `recipient` | `string` |
| `feeOptions?` | [`FeeOptions`](../interfaces/FeeOptions.md) |

#### Returns

`string`

___

### encodeUnwrapWETH9

▸ `Static` **encodeUnwrapWETH9**(`amountMinimum`, `recipient`, `feeOptions?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountMinimum` | `default` |
| `recipient` | `string` |
| `feeOptions?` | [`FeeOptions`](../interfaces/FeeOptions.md) |

#### Returns

`string`
