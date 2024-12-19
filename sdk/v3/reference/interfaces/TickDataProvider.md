# Interface: TickDataProvider

Provides information about ticks

## Implemented by

- [`NoTickDataProvider`](../classes/NoTickDataProvider.md)
- [`TickListDataProvider`](../classes/TickListDataProvider.md)

## Table of contents

### Methods

- [getTick](TickDataProvider.md#gettick)
- [nextInitializedTickWithinOneWord](TickDataProvider.md#nextinitializedtickwithinoneword)

## Methods

### getTick

▸ **getTick**(`tick`): `Promise`<{ `liquidityNet`: `BigintIsh`  }\>

Return information corresponding to a specific tick

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tick` | `number` | the tick to load |

#### Returns

`Promise`<{ `liquidityNet`: `BigintIsh`  }\>

___

### nextInitializedTickWithinOneWord

▸ **nextInitializedTickWithinOneWord**(`tick`, `lte`, `tickSpacing`): `Promise`<[`number`, `boolean`]\>

Return the next tick that is initialized within a single word

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tick` | `number` | The current tick |
| `lte` | `boolean` | Whether the next tick should be lte the current tick |
| `tickSpacing` | `number` | The tick spacing of the pool |

#### Returns

`Promise`<[`number`, `boolean`]\>
