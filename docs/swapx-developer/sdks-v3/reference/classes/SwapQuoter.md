@swapx-lib/v3-sdk / Exports / SwapQuoter

# Class: SwapQuoter

Represents the SwapX V3 QuoterV1 contract with a method for returning the formatted
calldata needed to call the quoter contract.

## Table of contents

### Constructors

- [constructor](SwapQuoter.md#constructor)

### Properties

- [V1INTERFACE](SwapQuoter.md#v1interface)
- [V2INTERFACE](SwapQuoter.md#v2interface)

### Methods

- [quoteCallParameters](SwapQuoter.md#quotecallparameters)

## Constructors

### constructor

• **new SwapQuoter**()

## Properties

### V1INTERFACE

▪ `Static` **V1INTERFACE**: `Interface`

#### Defined in

quoter.ts:37

___

### V2INTERFACE

▪ `Static` **V2INTERFACE**: `Interface`

#### Defined in

quoter.ts:38

## Methods

### quoteCallParameters

▸ `Static` **quoteCallParameters**\<`TInput`, `TOutput`\>(`route`, `amount`, `tradeType`, `options?`): `MethodParameters`

Produces the on-chain method name of the appropriate function within QuoterV2,
and the relevant hex encoded parameters.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TInput` | extends `Currency` | The input token, either Ether or an ERC-20 |
| `TOutput` | extends `Currency` | The output token, either Ether or an ERC-20 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `route` | [`Route`](Route.md)\<`TInput`, `TOutput`\> | The swap route, a list of pools through which a swap can occur |
| `amount` | `CurrencyAmount`\<`TInput` \| `TOutput`\> | The amount of the quote, either an amount in, or an amount out |
| `tradeType` | `TradeType` | The trade type, either exact input or exact output |
| `options` | `QuoteOptions` | The optional params including price limit and Quoter contract switch |

#### Returns

`MethodParameters`

The formatted calldata

#### Defined in

quoter.ts:51
