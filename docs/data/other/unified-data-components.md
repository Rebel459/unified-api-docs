# Unified Data Components

**Class: `UnifiedDataComponents`**

The Unified API contains custom item components to expose additional functionality in an easy-to-use, crossloader manner.

::: info
This class was made redundant by new vanilla components and thus removed on 26.3 & above
:::

### Furnace Fuel

The "unified:furnace_fuel" component allows you to make an item function as furnace fuel during registration. This data-driven format is the suggested way to handle furnace fuels when using the Unified API.

Specifying 0 ticks force-disables furnace fuel functionality, even if an item had it in vanilla.

```
    // your item code
    () -> new Item.Properties()
        .component(UnifiedDataComponents.FURNACE_FUEL.get(), 160)
```

```json5
"properties": {
    "unified:furnace_fuel": <int> // at least 0
}
```

### Compost

The "unified:compost" component allows you to make an item compostable during registration. This data-driven format is the suggested way to handle compostable items when using the Unified API.

Specifying a chance of 0F force-disables composting functionality, even if an item had it in vanilla.

```
    // your item code
    () -> new Item.Properties()
        .component(UnifiedDataComponents.COMPOST.get(), 0.35F)
```

```json5
"properties": {
    "unified:compost": <float> // at least 0.0
}
```