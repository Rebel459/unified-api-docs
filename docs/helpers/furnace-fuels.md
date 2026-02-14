# Furnace Fuels

**Class: `UnifiedHelpers.FurnaceFuels`**

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
var fuels = UnifiedHelpers.FurnaceFuels.get()
fuels.add(ModItems.EXAMPLE_ITEM.get(), 160)
```