# Unified Data Components

**Class: `UnifiedDataComponents`**

The Unified API contains custom item components to expose additional functionality in an easy-to-use, crossloader manner.

::: info
These components can also be easily added to blocks and vanilla items using [UnifiedHelpers.DATA_COMPONENTS](/helpers/data-components)
:::

### Furnace Fuel

The "unified:furnace_fuel" component allows you to make an item function as furnace fuel during registration. This data-driven format is the suggested way to handle furnace fuels when using the Unified API.

Specifying 0 ticks force-disables furnace fuel functionality, even if an item had it in vanilla.

```
    // your item code
    () -> new Item.Properties()
        .component(UnifiedDataComponents.FURNACE_FUEL.get(), 160)
```

### Compost

The "unified:compost" component allows you to make an item compostable during registration. This data-driven format is the suggested way to handle compostable items when using the Unified API.

Specifying a chance of 0F force-disables composting functionality, even if an item had it in vanilla.

```
    // your item code
    () -> new Item.Properties()
        .component(UnifiedDataComponents.COMPOST.get(), 0.35F)
```