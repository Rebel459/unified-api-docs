# Block Set

**Classes: `BlockSet / UnifiedRegistries.Blocks.Builders`**

**Builder Method: `blockSet(String name, BlockPreset preset, MapColor color)`**

**Preset: [Block Preset](/registries/builders/block-preset)**

The Block Set builder allows you to create an entire blockset based on stone / bricks. Everything other than datagen is handled simply by registering the set.

::: info
The only block that *must* be created in a block set is the base block - all others are optional.
:::

### Builder Methods

Methods used when building the Set.

`creativeInventoryPlacement(Supplier<? extends ItemLike> precedingBuildingItem)`

`creativeInventoryPlacement(Supplier<? extends ItemLike> precedingBuildingItem, Supplier<? extends ItemLike> precedingNaturalItem)`

Used to add items to the creative inventory. Optionally specifying `precedingNaturalItem` will add the base block to the natural creative tab.

`setDestroyTime(float destroyTime)`

Sets how long blocks take to mine.

`setExplosionResistance(float explosionResistance)`

Sets the explosion resistance of blocks.

`setSoundType(Supplier<SoundType> soundType)`

Sets the sounds of blocks in the set.

`setButtonSounds(Supplier<SoundEvent> on, Supplier<SoundEvent> off)`

Sets the on and off sounds for buttons.

`setPressurePlateSounds(Supplier<SoundEvent> on, Supplier<SoundEvent> off)`

Sets the on and off sounds for pressure plates.

`hasChiseled(boolean hasChiseled)`

Determines whether to register a chiseled block.

`hasButton(boolean hasButton)`

Determines whether to register a button.

`hasCracked(boolean hasCracked)`

Determines whether to register a cracked block.

`hasFence(boolean hasFence)`

Determines whether to register a fence.

`hasPillar(boolean hasPillar)`

Determines whether to register a pillar.

`hasPressurePlate(boolean hasPressurePlate)`

Determines whether to register a pressure plate.

`hasSlab(boolean hasSlab)`

Determines whether to register a slab.

`hasStairs(boolean hasStairs)`

Determines whether to register stairs.

`hasWall(boolean hasWall)`

Determines whether to register a wall.

`hasPluralName(boolean hasPluralName)`

Specifies whether the set name is in plural form. Specifying this is not necessary for set names ending in "bricks" or "tiles", as these are automatically detected.

`hasLegacySlab(boolean hasLegacySlab)`

If set to true, slabs have a destroy time of 2 and explosion resistance of 6, regardless of the rest of set values. Used to mimic the behaviour of many older vanilla slabs.

`canArrowsActivateButton(boolean canArrowsActivateButton)`

Sets button behaviour.

`setPressurePlateSensitivity(BlockSetType.PressurePlateSensitivity pressurePlateSensitivity)`

Sets pressure plate behaviour.

`baseBlockFunction(Function<BlockBehaviour.Properties, Block> baseBlockFunction)`

Sets the function properties (class) of the base block.

`baseBlockSuffix(Optional<String> baseBlockSuffix)`

Used to add a suffix to the base block (for example, "purpur" with a suffix of "block" would become "purpur block"). `Optional.empty()` skips adding a suffix.

`build()`

Must be used when finishing the set, to return either a BlockSet or BlockPreset.

### Object Methods

Methods which can be called after creating the set. Note that for brevity, methods for retrieving individual supplied objects, such as `getBase`, will not be listed here.

`List<SuppliedBlock> getRegisteredBlocks()`

Returns a list of all registered blocks.

`boolean hasStairs()`

Checks whether stairs have been registered.

`boolean hasSlab()`

Checks whether a slab has been registered.

`boolean hasWall()`

Checks whether a wall has been registered.

`boolean hasChiseled()`

Checks whether a chiseled block has been registered.

`boolean hasCracked()`

Checks whether a cracked block has been registered.

`boolean hasPillar()`

Checks whether a pillar has been registered.

`boolean hasFence()`

Checks whether a fence has been registered.

`boolean hasPressurePlate()`

Checks whether a pressure plate has been registered.

`boolean hasButton()`

Checks whether a button has been registered.

`Supplier<BlockSetType> getBlockSetType()`

Returns a vanilla `BlockSetType` (with a Supplier for multiloader safety), constructed from the blockset builder's settings.

`Settings getSettings()`

Allows access to the blockset's non-static `BlockSet.Settings`. This provides access to more methods which allow you to check any relevant property set during the builder stage.

### Example

```
public static UnifiedRegistries.Blocks BLOCKS = UnifiedRegistries.Blocks.create(ModName.MOD_ID);
public static UnifiedRegistries.Blocks.Builders BLOCK_BUILDERS = BLOCKS.builders();

public static final BlockSet SKYSLATE = BLOCK_BUILDERS.blockSet("skyslate", BlockPreset.DEFAULT, MapColor.STONE, 3.0F, 6.0F)
        .creativeInventoryPlacement(POLISHED_ZOLA_BRICKS.getWall()::get)
        .build();

public static final BlockSet POLISHED_SKYSLATE = BLOCK_BUILDERS.blockSet("polished_skyslate", BlockPreset.CHISELED, MapColor.STONE, 3.0F, 6.0F)
        .creativeInventoryPlacement(SKYSLATE.getWall()::get)
        .build();

public static final BlockSet POLISHED_SKYSLATE_BRICKS = BLOCK_BUILDERS.blockSet("polished_skyslate_bricks", BlockPreset.DEFAULT, MapColor.STONE, 3.0F, 6.0F)
        .creativeInventoryPlacement(POLISHED_SKYSLATE.getChiseled()::get)
        .hasPluralName(true)
        .build();
```