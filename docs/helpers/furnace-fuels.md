# Furnace Fuels

**Class: `UnifiedHelpers / HelpersImpl.FurnaceFuels`**

Allows registering an item as a furnace fuel.

:::info
It is recommended that you use the [furnace fuel component](/unified-item-components) instead.
:::

### Methods
```
void add(ItemLike item, int ticks)
```

### Example

```
UnifiedHelpers.FURNACE_FUELS.add(ModItems.EXAMPLE_ITEM.get(), 160)
```