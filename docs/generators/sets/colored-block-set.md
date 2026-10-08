# Colored Block Set

**Classes: `ColoredBlockSet / UnifiedRegistries.Blocks.Builders`**

**Builder Method: `coloredStoneSet(String name, ColoredBlockPreset preset)`**

**Preset: [Colored Block Preset](/registries/builders/colored-block-preset)**

The Colored Block Set builder registers a set of blocks in all 16 colors. This set is basic, but extremely flexible.

### Builder Methods

Methods used when building the Set.

`creativeInventoryPlacement(Supplier<? extends ItemLike> precedingColoredItem)`

`creativeInventoryPlacement(Supplier<? extends ItemLike> precedingColoredItem, ResourceKey<CreativeModeTab> secondTab)`

`creativeInventoryPlacement(Supplier<? extends ItemLike> precedingColoredItem, ResourceKey<CreativeModeTab> secondTab, Supplier<? extends ItemLike> precedingSecondTabItem)`

Used to add items to the creative inventory. Optionally specifying `secondTab` will add the blocks to the specified creative tab. Further, specifying `precedingSecondTabItem` can be used to place items in the second tab after a different block to the first tab.

`type(Function<DyeColor, ExtensibleCodec.Entry<Function<BlockBehaviour.Properties, ? extends Block>>> type)`

Sets the block type (eg `VanillaBlockCodecs.BLOCK.create()`).

`builder(BiConsumer<DyeColor, BlockGenerator.Builder> builder)`

Sets the full builder to be used - including properties, assets, data etc.

`dyeRecipe(QuadConsumer<Item, List<SuppliedBlock>, Item, RecipeProvider> recipe)`

Lets you add recipes for each item, with the `QuadConsumer` providing everything you need to make all dye-related recipes.

`build()`

Must be used when finishing the set, to return either a ColoredBlockSet or ColoredBlockPreset.

### Object Methods

Methods which can be called after creating the set. Note that for brevity, methods for retrieving individual supplied objects, such as `getWhite`, will not be listed here.

`List<SuppliedBlock> getRegisteredBlocks()`

Returns a list of all registered blocks.

`DyeColor getDyeFromBlock(SuppliedBlock block)`

Gets the dye color corresponding to the specified block. Make sure you only test against a block from the same `ColoredBlockSet`.

`DyeColor getBlockFromDye(DyeColor color)`

Gets the block corresponding to the dye color.

`Settings getSettings()`

Allows access to the colored blockset's non-static `ColoredBlockSet.Settings`. This provides access to more methods which allow you to check any relevant property set during the builder stage.

### Example

```
public static UnifiedRegistries.Blocks BLOCKS = UnifiedRegistries.Blocks.create(ModName.MOD_ID);
public static UnifiedRegistries.Blocks.Builders BLOCK_BUILDERS = BLOCKS.builders();

public static final ColoredBlockSet WOOL_STAIRS = BLOCK_BUILDERS.coloredStoneSet("wool_stairs", ColoredBlockPreset.WOOL)
        .creativeInventoryPlacement(() -> Blocks.WOOL.pink())
        .function(properties -> new StairBlock(Blocks.WHITE_WOOL.defaultBlockState(), properties))
        .build();
```