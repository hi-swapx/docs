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


## Properties

### INTERFACE

▪ `Static` **INTERFACE**: `Interface`


## Methods

### swapCallParameters

▸ `Static` **swapCallParameters**(`trades`, `options`): [`MethodParameters`](../interfaces/MethodParameters.md)

Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trades` | [`Trade`](Trade.md)<`Currency`, `Currency`, `TradeType`\> \| [`Trade`](Trade.md)<`Currency`, `Currency`, `TradeType`\>[] | - |
| `options` | [`SwapOptions`](../interfaces/SwapOptions.md) | options for the call parameters |

#### Returns

[`MethodParameters`](../interfaces/MethodParameters.md)
