### BlockGenerator

Used to generate blocks and related content.

**Methods**

`SuppliedBlock register`
- used to register a block

`SuppliedBlock registerWithoutItem`
- used to register a block without also automatically generating an item

**Builder**

`builder.properties`
- provides a custom `BlockGenerator.Properties` builder. Whilst these should be self-explanatory and largely re-implement the vanilla `BlockBehaviour.Properties`, they are documented under [data-driven blocks](/data/registries/blocks)

`builder.assets`
- `name(String value)` sets the generated name
- `model(BlockAsset<Void> type)` or `model(BlockAsset<T> type, T value)` sets the model
- `simpleCube()` sets the model as `BlockAssets.SIMPLE_CUBE`

`builder.data`
- `tag(TagKey<Block> tag)` / `tag(BlockItemTagId tag)` / `itemTag(TagKey<Item> tag)` adds a tag to the block, block item or both
- `optionalTag(TagKey<Block> tag)` / `optionalTag(BlockItemTagId tag)` / `optionalItemTag(TagKey<Item> tag)` adds an optional tag to the block, block item or both
- `loot(BiFunction<Block, BlockLootSubProvider, LootTable.Builder> factory)` provides a function used to create the block's loot table
- `recipes(BiConsumer<Item, RecipeProvider> factory)` provides a consumer used to construct recipes for the block item
- `dropSelf()` makes the block drop itself when broken

`builder.itemProperties`
- provides a vanilla `Item.Properties` builder to set block item properties

`builder.blockEntity(Supplier<? extends BlockEntityType<?>> type)`
- allows you to bind the block to any block entity

### Example

```
private static final BlockGenerator BLOCKS = ModName.DATA.registries().blocks()

public static final SuppliedBlock EXAMPLE_BLOCK = BLOCKS.register(
        "example_block",
        VanillaBlockCodecs.BLOCK.create(),
        builder -> builder
                .properties(properties -> properties
                        .copyFrom(() -> Blocks.STONE)
                        .sounds(SoundType.AMETHYST)
                        .flammable(5, 10)
                )
                .assets(assets -> assets
                        .simpleCube()
                )
                .data(data -> data
                        .dropSelf()
                        .tag(TEST_BLOCKS)
                )
                .itemProperties(itemProperties -> itemProperties
                        .stacksTo(16)
                        .rarity(Rarity.UNCOMMON)
                )
                .blockEntity(() -> BlockEntityType.CHEST)
);
```