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

## Properties

### INTERFACE

▪ `Static` **INTERFACE**: `Interface`


## Methods

### addCallParameters

▸ `Static` **addCallParameters**(`position`, `options`): [`MethodParameters`](../interfaces/MethodParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Position`](Position.md) |
| `options` | [`AddLiquidityOptions`](../modules.md#addliquidityoptions) |

#### Returns

[`MethodParameters`](../interfaces/MethodParameters.md)


___

### collectCallParameters

▸ `Static` **collectCallParameters**(`options`): [`MethodParameters`](../interfaces/MethodParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CollectOptions`](../interfaces/CollectOptions.md) |

#### Returns

[`MethodParameters`](../interfaces/MethodParameters.md)

___

### createCallParameters

▸ `Static` **createCallParameters**(`pool`): [`MethodParameters`](../interfaces/MethodParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | [`Pool`](Pool.md) |

#### Returns

[`MethodParameters`](../interfaces/MethodParameters.md)


___

### encodeCollect

▸ `Static` `Private` **encodeCollect**(`options`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CollectOptions`](../interfaces/CollectOptions.md) |

#### Returns

`string`[]


___

### encodeCreate

▸ `Static` `Private` **encodeCreate**(`pool`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | [`Pool`](Pool.md) |

#### Returns

`string`


___

### removeCallParameters

▸ `Static` **removeCallParameters**(`position`, `options`): [`MethodParameters`](../interfaces/MethodParameters.md)

Produces the calldata for completely or partially exiting a position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`Position`](Position.md) | The position to exit |
| `options` | [`RemoveLiquidityOptions`](../interfaces/RemoveLiquidityOptions.md) | Additional information necessary for generating the calldata |

#### Returns

[`MethodParameters`](../interfaces/MethodParameters.md)

The call parameters

___

### safeTransferFromParameters

▸ `Static` **safeTransferFromParameters**(`options`): [`MethodParameters`](../interfaces/MethodParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SafeTransferOptions`](../interfaces/SafeTransferOptions.md) |

#### Returns

[`MethodParameters`](../interfaces/MethodParameters.md)

