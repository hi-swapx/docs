# Class: TickMath

## Table of contents

### Constructors

- [constructor](TickMath.md#constructor)

### Properties

- [MAX\_SQRT\_RATIO](TickMath.md#max_sqrt_ratio)
- [MAX\_TICK](TickMath.md#max_tick)
- [MIN\_SQRT\_RATIO](TickMath.md#min_sqrt_ratio)
- [MIN\_TICK](TickMath.md#min_tick)

### Methods

- [getSqrtRatioAtTick](TickMath.md#getsqrtratioattick)
- [getTickAtSqrtRatio](TickMath.md#gettickatsqrtratio)

## Constructors

### constructor

• `Private` **new TickMath**()

Cannot be constructed.


## Properties

### MAX\_SQRT\_RATIO

▪ `Static` **MAX\_SQRT\_RATIO**: `default`

The sqrt ratio corresponding to the maximum tick that could be used on any pool.


___

### MAX\_TICK

▪ `Static` **MAX\_TICK**: `number` = `-TickMath.MIN_TICK`

The maximum tick that can be used on any pool.


___

### MIN\_SQRT\_RATIO

▪ `Static` **MIN\_SQRT\_RATIO**: `default`

The sqrt ratio corresponding to the minimum tick that could be used on any pool.


___

### MIN\_TICK

▪ `Static` **MIN\_TICK**: `number` = `-887272`

The minimum tick that can be used on any pool.


## Methods

### getSqrtRatioAtTick

▸ `Static` **getSqrtRatioAtTick**(`tick`): `default`

Returns the sqrt ratio as a Q64.96 for the given tick. The sqrt ratio is computed as sqrt(1.0001)^tick

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tick` | `number` | the tick for which to compute the sqrt ratio |

#### Returns

`default`


___

### getTickAtSqrtRatio

▸ `Static` **getTickAtSqrtRatio**(`sqrtRatioX96`): `number`

Returns the tick corresponding to a given sqrt ratio, s.t. #getSqrtRatioAtTick(tick) <= sqrtRatioX96
and #getSqrtRatioAtTick(tick + 1) > sqrtRatioX96

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sqrtRatioX96` | `default` | the sqrt ratio as a Q64.96 for which to compute the tick |

#### Returns

`number`

