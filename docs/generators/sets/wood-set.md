# Wood Set

**Classes: `WoodSet / UnifiedRegistries.Blocks.Builders`**

**Builder Method: `woodSet(String name, WoodPreset preset, MapColor barkColor, MapColor plankColor)`**

**Preset: [Wood Preset](/generators/sets/wood-preset)**

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

`isOverworld(boolean isOverworld)`

Sets whether the woodset is from the Overworld. Used to determine whether the logs should be added to the overworld logs tag.

`logRecipe(BiConsumer<Item, RecipeProvider> consumer)`

Sets a crafting recipe for the log. As an example, this would be used when replicating the vanilla bamboo set.

`logModel(BlockAsset<Void> logModel)`

Sets the model of the logs.

`planksFromLog(int planksFromLog)`

How many planks should be granted per log. Most sets would use 4.

`build()`

Must be used when finishing the set, to return either a WoodSet or WoodPreset.

**WoodSet Builder Only**

`createLeaves(WoodSet.Leaves... leaves)`

Creates leaves for the WoodSet. You can create as many as you want through `WoodSet.Leaves`, which is documented further below.

`createSapling(ExtensibleCodec.Entry<Function<BlockBehaviour.Properties, ? extends Block>> type, MapColor mapColor, BlockAssets.PlantType plantType)`

`createSapling(ExtensibleCodec.Entry<Function<BlockBehaviour.Properties, ? extends Block>> type, MapColor mapColor, BlockAssets.PlantType plantType, Supplier<? extends ItemLike> precedingCreativeSapling)`

Creates a sapling for the WoodSet. Optionally specifying `precedingCreativeSapling` adds the sapling to the creative inventory.

**WoodSet.Leaves**

To allow the creation of multiple leaf types per set (such as to match 26.3's Poplar), leaves are created individually through `WoodSet.Leaves` creation methods.

`base(ExtensibleCodec.Entry<Function<BlockBehaviour.Properties, ? extends Block>> type, MapColor mapColor, BlockAsset<Void> model, BiFunction<Block, BlockLootSubProvider, LootTable.Builder> loot)`

`base(ExtensibleCodec.Entry<Function<BlockBehaviour.Properties, ? extends Block>> type, MapColor mapColor, BlockAsset<Void> model, BiFunction<Block, BlockLootSubProvider, LootTable.Builder> loot, Supplier<? extends ItemLike> precedingCreativeItem)`

Creates a base leaf for the set. This should be used when your set only has one leaf block, or when you want a base non-prefixed variant alongside specific leaf types.

`variant(String prefix, ExtensibleCodec.Entry<Function<BlockBehaviour.Properties, ? extends Block>> type, MapColor mapColor, BlockAsset<Void> model, BiFunction<Block, BlockLootSubProvider, LootTable.Builder> loot)`

`variant(String prefix, ExtensibleCodec.Entry<Function<BlockBehaviour.Properties, ? extends Block>> type, MapColor mapColor, BlockAsset<Void> model, BiFunction<Block, BlockLootSubProvider, LootTable.Builder> loot, String precedingLeavesVariant)`

`variant(String prefix, ExtensibleCodec.Entry<Function<BlockBehaviour.Properties, ? extends Block>> type, MapColor mapColor, BlockAsset<Void> model, BiFunction<Block, BlockLootSubProvider, LootTable.Builder> loot, Supplier<? extends ItemLike> precedingCreativeItem)`

Creates a variant leaf for the set, which has a prefix (eg "yellow"). The underscore is automatically added. The second `variant` method lets you reference another leaf prefix (eg "red" for a variant with that name, or "" for a base leaf) if you want to place leaf variants after another leaf.

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
public static UnifiedData.Sets SETS = ModName.DATA.sets();

public static final WoodSet JACARANDA = SETS.woodSet("jacaranda", WoodPreset.CHERRY, new BlockItemTagId(BloomBlockTags.JACARANDA_LOGS, BloomItemTags.JACARANDA_LOGS), MapColor.COLOR_PURPLE, MapColor.COLOR_BROWN)
        .createLeaves(WoodSet.Leaves.base(
                VanillaBlockCodecs.UNTINTED_PARTICLE_LEAVES.create(() -> new VanillaBlockCodecs.ParticleLeaves(0.1F, BloomParticleTypes.JACARANDA_LEAVES.get())),
                MapColor.COLOR_PURPLE,
                BlockAssets.LEAVES,
                (block, provider) -> provider.createLeavesDrops(block, block, 0.05F, 0.0625F, 0.083333336F, 0.1F),
                () -> Items.CHERRY_LEAVES
        ))
        .createSapling(VanillaBlockCodecs.SAPLING.create(() -> BloomTreeGrowers.JACARANDA), MapColor.COLOR_PURPLE, BlockAssets.PlantType.NOT_TINTED, () -> Items.CHERRY_SAPLING)
        .creativeInventoryPlacement(() -> Items.CHERRY_BUTTON, () -> Items.CHERRY_SAPLING, () -> Items.CHERRY_SHELF, () -> Items.CHERRY_HANGING_SIGN, () -> Items.CHERRY_CHEST_BOAT)
        .build();
```