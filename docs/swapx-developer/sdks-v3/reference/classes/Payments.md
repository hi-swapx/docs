@swapx-lib/v3-sdk / Exports / Payments

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

#### Defined in

payments.ts:25

## Properties

### INTERFACE

▪ `Static` **INTERFACE**: `Interface`

#### Defined in

payments.ts:20

## Methods

### encodeFeeBips

▸ `Static` `Private` **encodeFeeBips**(`fee`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fee` | `Percent` |

#### Returns

`string`

#### Defined in

payments.ts:27

___

### encodeRefundETH

▸ `Static` **encodeRefundETH**(): `string`

#### Returns

`string`

#### Defined in

payments.ts:73

___

### encodeSweepToken

▸ `Static` **encodeSweepToken**(`token`, `amountMinimum`, `recipient`, `feeOptions?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `Token` |
| `amountMinimum` | `default` |
| `recipient` | `string` |
| `feeOptions?` | `FeeOptions` |

#### Returns

`string`

#### Defined in

payments.ts:49

___

### encodeUnwrapWETH9

▸ `Static` **encodeUnwrapWETH9**(`amountMinimum`, `recipient`, `feeOptions?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountMinimum` | `default` |
| `recipient` | `string` |
| `feeOptions?` | `FeeOptions` |

#### Returns

`string`

#### Defined in

payments.ts:31
