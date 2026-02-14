# Unified Item Components

**Class: `UnifiedItemComponents`**

The Unified API contains custom item components to expose additional functionality in an easy-to-use, crossloader manner.

### Furnace Fuel

The "unified:furnace_fuel" component allows you to make an item function as furnace fuel during registration. This data-driven format is the suggested way to handle furnace fuels when using the Unified API.

Specifying 0 ticks force-disables furnace fuel functionality, even if an item had it in vanilla.

```
    // your item code
    () -> new Item.Properties()
        .component(UnifiedItemComponents.FURNACE_FUEL, 160)
```