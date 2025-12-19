@swapx-lib/v3-sdk / Exports / SwapRouter

# Class: SwapRouter

Represents the SwapX V3 SwapRouter, and has static methods for helping execute trades.

## Table of contents

### Constructors

- [constructor](SwapRouter.md#constructor)

### Properties

- [INTERFACE](SwapRouter.md#interface)

### Methods

- [swapCallParameters](SwapRouter.md#swapcallparameters)

## Constructors

### constructor

• `Private` **new SwapRouter**()

Cannot be constructed.

#### Defined in

swapRouter.ts:57

## Properties

### INTERFACE

▪ `Static` **INTERFACE**: `Interface`

#### Defined in

swapRouter.ts:52

## Methods

### swapCallParameters

▸ `Static` **swapCallParameters**(`trades`, `options`): `MethodParameters`

Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trades` | [`Trade`](Trade.md)\<`Currency`, `Currency`, `TradeType`\> \| [`Trade`](Trade.md)\<`Currency`, `Currency`, `TradeType`\>[] | - |
| `options` | `SwapOptions` | options for the call parameters |

#### Returns

`MethodParameters`

#### Defined in

swapRouter.ts:64
