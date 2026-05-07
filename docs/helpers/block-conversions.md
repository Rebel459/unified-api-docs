# Block Conversions

**Class: `UnifiedHelpers / BlockConversions`**

Allows to easily create block conversion functionality, such as axes stripping logs.

### Methods
```
default void addStrippable(BlockLike originalBlock, BlockLike convertedBlock)

default void addWeathering(BlockLike block, BlockLike exposedBlock, BlockLike weatheredBlock, BlockLike oxidizedBlock, BlockLike waxedBlock, BlockLike waxedExposedBlock, BlockLike waxedWeatheredBlock, BlockLike waxedOxidizedBlock)
default void addWeathering(WeatheringCopperBlocks set)

default void add(Predicate<ItemStack> item, BlockLike originalBlock, BlockLike convertedBlock, SoundEvent sound)
default void add(Predicate<ItemStack> item, BlockLike originalBlock, BlockLike convertedBlock, SoundEvent sound, float volume, float pitch)
default void add(Predicate<ItemStack> item, BlockLike originalBlock, BlockLike convertedBlock, Consumer<UseOnContext> context)
```

### Example

```
UnifiedHelpers.BLOCK_CONVERSIONS.addStrippable(ExampleMod.EXAMPLE_LOG, ExampleMod.EXAMPLE_STRIPPED_LOG)

UnifiedHelpers.BLOCK_CONVERSIONS.add(item -> item.is(ItemTags.PICKAXES), Blocks.STONE_BRICKS, Blocks.CHISELED_STONE_BRICKS, ModSounds.PICKAXE_CHISELS)
```