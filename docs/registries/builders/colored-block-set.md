# Colored Block Set

**Classes: `ColoredBlockSet / UnifiedRegistries.Blocks.Builders`**

**Builder Method: `coloredBlockSet(String name, ColoredBlockPreset preset)`**

**Preset: [Colored Block Preset](/registries/builders/colored-block-preset)**

The Colored Block Set builder registers a set of blocks in all 16 colors. This set is basic, but extremely flexible.

### Builder Methods

Methods used when building the Set.

`creativeInventoryPlacement(Supplier<? extends ItemLike> precedingColoredItem)`

`creativeInventoryPlacement(Supplier<? extends ItemLike> precedingColoredItem, ResourceKey<CreativeModeTab> secondTab)`

`creativeInventoryPlacement(Supplier<? extends ItemLike> precedingColoredItem, ResourceKey<CreativeModeTab> secondTab, Supplier<? extends ItemLike> precedingSecondTabItem)`

Used to add items to the creative inventory. Optionally specifying `secondTab` will add the blocks to the specified creative tab. Further, specifying `precedingSecondTabItem` can be used to place items in the second tab after a different block to the first tab.

`function(Function<BlockBehaviour.Properties, Block> function)`

Sets the block function (eg `Block::new`) used by all blocks.

`properties(Supplier<BlockBehaviour.Properties> properties)`

Sets the properties of all blocks.

`setFlammability(int igniteOdds, int burnOdds)`

`setFlammability(int igniteOdds, int burnOdds, int furnaceTicks)`

Makes the blocks able to be lit on fire. Optionally specifying `furnaceTicks` will also make the blocks work as furnace fuel, provided the `ColoredBlockSet` was not registered without items.

`build()`

Must be used when finishing the set, to return either a ColoredBlockSet or ColoredBlockPreset.

**ColoredBlockSet Builder Only**

`createWithoutItems()`

Creates the blocks of the set without any items. This should be used if you intend on binding a `ColoredItemSet` to your colored block set.

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

public static final ColoredBlockSet WOOL_STAIRS = BLOCK_BUILDERS.coloredBlockSet("wool_stairs", ColoredBlockPreset.WOOL)
        .creativeInventoryPlacement(() -> Blocks.WOOL.pink())
        .function(properties -> new StairBlock(Blocks.WHITE_WOOL.defaultBlockState(), properties))
        .build();
```