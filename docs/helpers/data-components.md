# Data Components

**Class: `UnifiedHelpers / DataComponents`**

Allows for simple appending of item components to any ItemLike (Block or Item).

Includes additional methods for `UnifiedDataComponents.FURNACE_FUEL` and `UnifiedDataComponents.COMPOST`.

::: info
UnifiedHelpers.DATA_COMPONENTS is also great for adding / changing item components on individual blocks, without having to separately register the block's item.
:::

### Methods
```
default <T> void add(ItemLike itemLike, DataComponentType<T> type, T value)
default <T> void addWithProvider(ItemLike itemLike, DataComponentType<T> type, DataComponentInitializers.SingleComponentInitializer<T> initializer)
default <T> void addWithKey(ItemLike itemLike, DataComponentType<Holder<T>> type, ResourceKey<T> valueKey)

default void addFurnaceFuel(ItemLike itemLike, int ticks)
default void addCompost(ItemLike itemLike, float chance)
```

### Example

```
UnifiedHelpers.DATA_COMPONENTS.addFurnaceFuel(ExampleMod.EXAMPLE_PLANKS, 150)
UnifiedHelpers.DATA_COMPONENTS.addWithProvider(ExampleMod.EXAMPLE_FIREPROOF_BLOCK, DataComponents.DAMAGE_RESISTANT, (provider) -> new DamageResistant(provider.getOrThrow(DamageTypeTags.IS_FIRE)))
```