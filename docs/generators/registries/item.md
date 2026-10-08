### ItemGenerator

Used to generate items and related content.

**Methods**

`SuppliedItem register`
- used to register an item

`SuppliedItem registerBlockItem`
- used to register a block item for an existing block

**Builder**

`builder.properties`
- provides a vanilla `Item.Properties` builder

`builder.assets`
- `name(String value)` sets the generated name
- `model(ItemAsset<Void> type)` or `model(ItemAsset<T> type, T value)` sets the model
- `generated()` sets the model as `ItemAssets.GENERATED`
- `handheld()` sets the model as `ItemAssets.HANDHELD`

`builder.data`
- `tag(TagKey<Item> tag)` adds a tag
- `optionalTag(TagKey<Item> tag)` adds an optional tag
- `recipes(BiConsumer<Item, RecipeProvider> factory)` provides a consumer used to construct recipes for the item

### Example

```
private static final ItemGenerator ITEMS = ModName.DATA.registries().items()

public static final SuppliedItem EXAMPLE_ITEM = ITEMS.register(
        "example_item",
        VanillaItemCodecs.ITEM.create(),
        builder -> builder
                .properties(properties -> properties
                        .stacksTo(16)
                        .rarity(Rarity.UNCOMMON)
                )
                .assets(assets -> assets
                        .handheld()
                )
                .data(data -> data
                        .dropSelf()
                )
);
```