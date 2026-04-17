# Block Conversions

**Class: `UnifiedHelpers / BlockConversions`**

Allows to easily create block conversion functionality, such as axes stripping logs.

### Methods
```
default void addStrippable(Block originalBlock, Block convertedBlock)

default void addWeathering(WeatheringCopperBlocks set)

default void add(Predicate<ItemStack> item, Block originalBlock, Block convertedBlock, SoundEvent sound)
default void add(Predicate<ItemStack> item, Block originalBlock, Block convertedBlock, SoundEvent sound, float volume, float pitch)
default void add(Predicate<ItemStack> item, Block originalBlock, Block convertedBlock, Consumer<UseOnContext> context)
```

### Example

```
UnifiedHelpers.BLOCK_CONVERSIONS.addStrippable(ExampleMod.EXAMPLE_LOG, ExampleMod.EXAMPLE_STRIPPED_LOG)

UnifiedHelpers.BLOCK_CONVERSIONS.add(item -> item.is(ItemTags.PICKAXES), Blocks.STONE_BRICKS, Blocks.CHISELED_STONE_BRICKS, ModSounds.PICKAXE_CHISELS)
```