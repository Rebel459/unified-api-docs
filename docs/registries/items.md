# Items

**Class: `UnifiedRegistries.Items`**

Items are registered similarly to vanilla, though you must make sure to use a Supplier for your components

### Methods

```
Supplier<Item> register(String path, Function<Item.Properties, Item> function, Supplier<Item.Properties> properties);

<T extends Block> Supplier<BlockItem> registerBlockItem(String path, Supplier<T> blockSupplier, Supplier<Item.Properties> properties);
```

### Example

```
public static UnifiedRegistries.Items ITEMS = UnifiedRegistries.Items.create(ModName.MOD_ID);

public static final Supplier<Item> EXAMPLE_ITEM = ITEMS.register("example_item",
        Item::new,
        () -> new Item.Properties() // note that you must use a supplier for Item.Properties
                .rarity(Rarity.UNCOMMON)
                .stacksTo(16)
);
```