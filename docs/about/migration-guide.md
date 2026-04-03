# Migration Guide

This migration guide only covers breaking changes to existing code made to the Unified API between Minecraft versions. You'll want to check out the changelog for a full list of what's actually changed in the API.

[View Full Changelog](/about/changelog)

### 1.21.11 to 26.1

Registries
- `UnifiedRegistries.Items`
- - whilst optional, you should use `SuppliedItem` rather than `Supplier<Item>`
- `UnifiedRegistries.Blocks`
- - whilst optional, you should use `SuppliedBlock` rather than `Supplier<Block>`

Helpers
- replaced `UnifiedHelpers.PLATFORM` with `UnifiedPlatform.get()`
- - replaced `getEnvironment` with `isClientSide` and `isServerSide`
- - renamed `PlatformType getPlatform` to `LoaderType getLoader`
- removed `UnifiedHelpers.LOOT_TABLES`
- - this has been replaced by the more powerful `UnifiedEvents.LootTables`
- removed `UnifiedHelpers.FURNACE_FUELS`
- - this has been replaced by the more powerful `UnifiedHelpers.DATA_COMPONENTS` and `UnifiedDataComponents.FURNACE_FUEL`
- - - the equivalent of `FURNACE_FUELS.add` would be `DATA_COMPONENTS.addFurnaceFuel`
- removed `UnifiedHelpers.STRIPPABLES`
- - this has been replaced by the more powerful `UnifiedHelpers.BLOCK_CONVERSIONS`
- - - the equivalent of `STRIPPABLES.add` would be `BLOCK_CONVERSIONS.addStrippable`
- `UnifiedHelpers.CREATIVE_ENTRIES`
- - all methods which previously accepted an ItemStack now require an ItemStackTemplate
- - renamed `add` to `insert`
- - renamed `addAfter` to `insertAfter`
- - renamed `addBefore` to `insertBefore`
- `UnifiedHelpers.NETWORKING`
- - renamed `registerPlayC2S` to `registerPlayToServer`
- - renamed `registerPlayS2C` to `registerPlayToClient`
- - renamed `registerConfigC2S` to `registerConfigToServer`
- - renamed `registerConfigS2C` to `registerConfigToClient`
- removed `UnifiedClientHelpers.BLOCK_LAYERS`, as 26.1 vanilla handles this behavior automatically now
- added `UnifiedClientHelpers.LEGACY_BABY_ARMOR`
- - the `add` method can be used to add EquipmentAsset resource keys to a list which reverts to pre-26.1 baby armor rendering, providing a fallback for armor sets lacking dedicated baby textures

Events
- renamed `UnifiedEvents.ItemComponents` to `UnifiedEvents.DefaultDataComponents`
- - `modify` no longer provides an Item predicate
- - - if you'd like to continue using the predicate, instead use `modifyFiltered`
- - both methods provide a `TriConsumer` with a `HolderLookup.Provider`
- renamed `UnifiedClientEvents.Ticks` to `UnifiedClientEvents.Instance`
- - replaced `atStart` and `atEnd` with `onTick`, which accepts `EventType`
- `UnifiedEvents.Players.onRespawn`
- - now provides a BiConsumer with `oldPlayer` and `newPlayer`
- - - previously, only the new player was provided, so usages of this event must be adjusted

Utilities
- renamed `UnifiedItemComponents` to `UnifiedDataComponents`
- renamed `PackInfo` to `PackType`
- renamed `PlatformInfo` to `LoaderType`