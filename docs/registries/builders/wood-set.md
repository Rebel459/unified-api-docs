# Wood Set

**Classes: `WoodSet / UnifiedRegistries.Blocks.Builders`**

**Builder Method: `woodSet(String name, WoodPreset preset, MapColor barkColor, MapColor plankColor)`**

**Preset: [Wood Preset](/registries/builders/wood-preset)**

The Wood Set builder allows you to create an entire woodset, including all items, entities and blocks. Everything other than datagen is handled simply by registering the set.

::: info
Leaves and Saplings are not created by default, and must instead be registered through `.createLeaves` and `.createSapling` in the registry builder respectively.
:::

### Builder Methods

Methods used when building the Set.

`creativeInventoryPlacement(Supplier<? extends ItemLike> precedingBuildingItem, Supplier<? extends ItemLike> precedingNaturalItem, Supplier<? extends ItemLike> precedingFunctionalShelfItem, Supplier<? extends ItemLike> precedingFunctionalSignItem)`

`creativeInventoryPlacement(Supplier<? extends ItemLike> precedingBuildingItem, Supplier<? extends ItemLike> precedingNaturalItem, Supplier<? extends ItemLike> precedingFunctionalShelfItem, Supplier<? extends ItemLike> precedingFunctionalSignItem, Supplier<? extends ItemLike> precedingUtilitiesItem)`

Used to add items to the creative inventory. Optionally specifying `precedingUtilitiesItem` adds boats to the creative inventory.

`setLeavesSoundType(Supplier<SoundType> leavesSoundType)`

Sets the sounds of leaves.

`setWoodSoundType(Supplier<SoundType> woodSoundType)`

Sets the sounds of wood (logs and planks).

`setHangingSignSoundType(Supplier<SoundType> hangingSignSoundType)`

Sets the sounds of hanging signs.

`setButtonSounds(Supplier<SoundEvent> on, Supplier<SoundEvent> off)`

Sets the on and off sounds for buttons.

`setPressurePlateSounds(Supplier<SoundEvent> on, Supplier<SoundEvent> off)`

Sets the on and off sounds for pressure plates.

`setDoorSounds(Supplier<SoundEvent> open, Supplier<SoundEvent> close)`

Sets the open and close sounds for doors.

`setTrapdoorSounds(Supplier<SoundEvent> open, Supplier<SoundEvent> close)`

Sets the open and close sounds for trapdoors.

`setFenceGateSounds(Supplier<SoundEvent> open, Supplier<SoundEvent> close)`

Sets the open and close sounds for fence gates.

`setWoodName(String woodName)`

Sets the name of the wood and stripped wood blocks.

`setLogName(String logName)`

Sets the name of logs and stripped logs.

`setSaplingName(String saplingName)`

Sets the name of saplings.

`setLeavesName(String leavesName)`

Sets the name of leaves.

`setBoats(Boats boats)`

Sets the type of boats the woodset has. Can be either `WoodSet.Boats.BOATS`, `WoodSet.Boats.RAFTS` or `WoodSet.Boats.NONE`

`hasMosaic(boolean hasMosaic)`

Whether the woodset should have Mosaic, Mosaic Stairs and Mosaic Slabs.

`isFlammable(boolean isFlammable)`

Whether blocks (not items) can be burned by fire.

`hasWood(boolean hasWood)`

Whether Wood and Stripped Wood should be registered within the block set.

`setDoorOpening(boolean canOpenByHand, boolean canOpenByWindCharge)`

Sets door behaviour.

`canArrowsActivateButton(boolean canArrowsActivateButton)`

Sets button behaviour.

`setPressurePlateSensitivity(BlockSetType.PressurePlateSensitivity pressurePlateSensitivity)`

Sets pressure plate behaviour.

`build()`

Must be used when finishing the set, to return either a WoodSet or WoodPreset.

**WoodSet Builder Only**

`createLeaves(Function<BlockBehaviour.Properties, Block> properties, MapColor mapColor)`

`createLeaves(Function<BlockBehaviour.Properties, Block> properties, MapColor mapColor, Supplier<? extends ItemLike> precedingCreativeLeaves)`

Creates leaves for the WoodSet. Optionally specifying `precedingCreativeLeaves` adds the leaves to the creative inventory.

`createSapling(Function<BlockBehaviour.Properties, Block> properties, MapColor mapColor)`

`createSapling(Function<BlockBehaviour.Properties, Block> properties, MapColor mapColor, Supplier<? extends ItemLike> precedingCreativeSapling)`

Creates a sapling for the WoodSet. Optionally specifying `precedingCreativeSapling` adds the sapling to the creative inventory.

### Object Methods

Methods which can be called after creating the set. Note that for brevity, methods for retrieving individual supplied objects, such as `getPlanks`, will not be listed here.

`List<SuppliedBlock> getRegisteredBlocks()`

Returns a list of all registered blocks.

`List<SuppliedItem> getRegisteredItems()`

Returns a list of all registered items.

`BlockFamily getBlockFamily()`

Returns a vanilla `BlockFamily` constructed from the created woodset.

`boolean hasLeaves()`

Checks whether leaves have been registered.

`boolean hasSapling()`

Checks whether a sapling has been registered.

`boolean hasWood()`

Checks whether wood and stripped wood have been registered.

`boolean hasMosaic()`

Checks whether mosaic blocks have been registered.

`boolean hasBoats()`

Checks whether boats (including rafts) have been registered.

`Supplier<WoodType> getWoodType()`

Returns a vanilla `WoodType` (with a Supplier for multiloader safety), constructed from the woodset's builder settings.

`Settings getSettings()`

Allows access to the woodset's non-static `WoodSet.Settings`. This provides access to more methods which allow you to check any relevant property set during the builder stage.

### Example

```
public static UnifiedRegistries.Blocks BLOCKS = UnifiedRegistries.Blocks.create(ModName.MOD_ID);
public static UnifiedRegistries.Blocks.Builders BLOCK_BUILDERS = BLOCKS.builders();

public static final WoodSet PITH = BLOCK_BUILDERS.woodSet("pith", WoodPreset.DEFAULT, MapColor.COLOR_BROWN, MapColor.COLOR_BROWN)
        .setLogName("strand")
        .setWoodName("sheath")
        .createLeaves(properties -> new UntintedParticleLeavesBlock(
                0.01F,
                LacunaParticleTypes.PITH_LEAVES.get(),
                properties
        ), MapColor.COLOR_BROWN)
        .createSapling(properties -> new SaplingBlock(
                new TreeGrower(
                        "pith",
                        Optional.of(LacunaConfiguredFeatures.PITH_TREE),
                        Optional.empty(),
                        Optional.empty()
                ),
                properties), MapColor.COLOR_BROWN)
        .creativeInventoryPlacement(() -> Blocks.WARPED_BUTTON, () -> Blocks.WARPED_FUNGUS, () -> Blocks.WARPED_SHELF, () -> Blocks.WARPED_HANGING_SIGN, () -> Items.SPRUCE_BOAT)
        .build();
```