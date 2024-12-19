# Class: Route<TInput, TOutput\>

Represents a list of pools through which a swap can occur

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TInput` | extends `Currency` | The input token |
| `TOutput` | extends `Currency` | The output token |

## Table of contents

### Constructors

- [constructor](Route.md#constructor)

### Properties

- [\_midPrice](Route.md#_midprice)
- [input](Route.md#input)
- [output](Route.md#output)
- [pools](Route.md#pools)
- [tokenPath](Route.md#tokenpath)

### Accessors

- [chainId](Route.md#chainid)
- [midPrice](Route.md#midprice)

## Constructors

### constructor

• **new Route**<`TInput`, `TOutput`\>(`pools`, `input`, `output`)

Creates an instance of route.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TInput` | extends `Currency` |
| `TOutput` | extends `Currency` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pools` | [`Pool`](Pool.md)[] | An array of `Pool` objects, ordered by the route the swap will take |
| `input` | `TInput` | The input token |
| `output` | `TOutput` | The output token |

## Properties

### \_midPrice

• `Private` **\_midPrice**: ``null`` \| `Price`<`TInput`, `TOutput`\> = `null`

___

### input

• `Readonly` **input**: `TInput`

___

### output

• `Readonly` **output**: `TOutput`

___

### pools

• `Readonly` **pools**: [`Pool`](Pool.md)[]

___

### tokenPath

• `Readonly` **tokenPath**: `Token`[]

## Accessors

### chainId

• `get` **chainId**(): `number`

#### Returns

`number`

___

### midPrice

• `get` **midPrice**(): `Price`<`TInput`, `TOutput`\>

Returns the mid price of the route

#### Returns

`Price`<`TInput`, `TOutput`\>
