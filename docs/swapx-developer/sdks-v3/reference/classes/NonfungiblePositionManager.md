@swapx-lib/v3-sdk / Exports / NonfungiblePositionManager

# Class: NonfungiblePositionManager

## Table of contents

### Constructors

- [constructor](NonfungiblePositionManager.md#constructor)

### Properties

- [INTERFACE](NonfungiblePositionManager.md#interface)

### Methods

- [addCallParameters](NonfungiblePositionManager.md#addcallparameters)
- [collectCallParameters](NonfungiblePositionManager.md#collectcallparameters)
- [createCallParameters](NonfungiblePositionManager.md#createcallparameters)
- [encodeCollect](NonfungiblePositionManager.md#encodecollect)
- [encodeCreate](NonfungiblePositionManager.md#encodecreate)
- [removeCallParameters](NonfungiblePositionManager.md#removecallparameters)
- [safeTransferFromParameters](NonfungiblePositionManager.md#safetransferfromparameters)

## Constructors

### constructor

• `Private` **new NonfungiblePositionManager**()

Cannot be constructed.

#### Defined in

nonfungiblePositionManager.ts:181

## Properties

### INTERFACE

▪ `Static` **INTERFACE**: `Interface`

#### Defined in

nonfungiblePositionManager.ts:176

## Methods

### addCallParameters

▸ `Static` **addCallParameters**(`position`, `options`): `MethodParameters`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Position`](Position.md) |
| `options` | [`AddLiquidityOptions`](./modules.md#addliquidityoptions) |

#### Returns

`MethodParameters`

#### Defined in

nonfungiblePositionManager.ts:199

___

### collectCallParameters

▸ `Static` **collectCallParameters**(`options`): `MethodParameters`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `CollectOptions` |

#### Returns

`MethodParameters`

#### Defined in

nonfungiblePositionManager.ts:326

___

### createCallParameters

▸ `Static` **createCallParameters**(`pool`): `MethodParameters`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | [`Pool`](Pool.md) |

#### Returns

`MethodParameters`

#### Defined in

nonfungiblePositionManager.ts:192

___

### encodeCollect

▸ `Static` `Private` **encodeCollect**(`options`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `CollectOptions` |

#### Returns

`string`[]

#### Defined in

nonfungiblePositionManager.ts:286

___

### encodeCreate

▸ `Static` `Private` **encodeCreate**(`pool`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | [`Pool`](Pool.md) |

#### Returns

`string`

#### Defined in

nonfungiblePositionManager.ts:183

___

### removeCallParameters

▸ `Static` **removeCallParameters**(`position`, `options`): `MethodParameters`

Produces the calldata for completely or partially exiting a position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`Position`](Position.md) | The position to exit |
| `options` | `RemoveLiquidityOptions` | Additional information necessary for generating the calldata |

#### Returns

`MethodParameters`

The call parameters

#### Defined in

nonfungiblePositionManager.ts:341

___

### safeTransferFromParameters

▸ `Static` **safeTransferFromParameters**(`options`): `MethodParameters`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SafeTransferOptions` |

#### Returns

`MethodParameters`

#### Defined in

nonfungiblePositionManager.ts:416
