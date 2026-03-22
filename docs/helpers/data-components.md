# Data Components

**Class: `UnifiedHelpers / DataComponents`**

Allows for simple appending of item components to any ItemLike (Block or Item).

Includes additional methods for `UnifiedDataComponents.FURNACE_FUEL` and `UnifiedDataComponents.COMPOST`.

Can also be used with a `DataComponentMap.Builder` provided by `UnifiedEvents.ItemComponents` in order to add components without overwriting existing ones.

### Methods
```
default <T> void add(DataComponentMap.Builder builder, DataComponentType<T> type, T value)
default <T> void add(ItemLike itemLike, DataComponentType<T> type, T value)

default void addFurnaceFuel(ItemLike itemLike, int ticks)
default void addCompost(ItemLike itemLike, float chance)
```

### Example

```
UnifiedHelpers.DATA_COMPONENTS.addFurnaceFuel(ExampleMod.EXAMPLE_PLANKS, 150)
```