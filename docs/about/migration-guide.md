# Migration Guide

This migration guide only covers breaking changes to existing code made to the Unified API between Minecraft versions. You'll want to check out the changelog for a full list of what's actually changed in the API.

[View Full Changelog](/about/changelog)

### 26.1 to 26.2

*This update has minimal overall API changes, however it comes with a major internal restructuring, which will require the re-importing of all classes. This change was made in order to split all code into `api.` and `impl.`, so that internal-use code is clearly separated from developer-focused code (`api.` code will not receive breaking changes within the same Minecraft release).*

Platform
- renamed `UnifiedPlatform` to `UnifiedInstance`
- - privatised `.get()` - this was marked as internal back on 26.1, and you can use all `UnifiedInstance` methods directly instead
- - renamed `getLoader` to `getModLoader`
- renamed `LoaderType` to `ModLoader`

Registries
- `UnifiedRegistries`
- - all deprecated `registerHolder` methods were removed in favour of the identical `registerForHolder`
- `UnifiedRegistries.Blocks`
- - removed deprecated registry methods that required a non-supplied `BlockEntityType`
- - - you can replace these with new methods that are otherwise identical, but require `Supplier<BlockEntityType`
- - removed deprecated methods that allowed separate item property registrations
- - - you should either use `registerWithoutItem` with a separately registered item, or use `UnifiedHelpers.DATA_COMPONENTS` to replace usages of these
- `UnifiedRegistries.BlockEntityTypes`
- - the deprecated register method which demanded the use of `Block` has been removed in favour of its `BlockLike` equivalent
- `Supplied`, `SuppliedItem` and `SuppliedBlock`
- - if you were using old registration methods, you might've been using `Supplier` - switch to using `Supplied` for additional features
- - `SuppliedItem` and `SuppliedBlock` extend `ResourceKey` rather than the old (deprecated) ones within 26.1 extending `Holder`
- - - if you were still using the old `SuppliedItem` and `SuppliedBlock` and need access to a `Holder`, use the `.holder()` method

Helpers
- replaced `UnifiedHelpers.PACKS` with `UnifiedHelpers.DATA_PACKS` and `UnifiedClientHelpers.RESOURCE_PACKS`
- - this split was made for clarity, and to remove unnecessary enums
- - both new helpers contain `addOptional` and `addRequired`, which you can use instead of `add` with `PackType`
- removed `PackType`
- - not used anymore due to the replacement of `UnifiedHelpers.PACKS`
- renamed `UnifiedClientHelpers.LEGACY_BABY_ARMOR` to `UnifiedClientHelpers.SIMPLE_BABY_ARMOR`
- - replaced `add(ResourceKey<EquipmentAsset> asset, boolean resize, int cutoff)` with `add(ResourceKey<EquipmentAsset> asset, int cutoff)`
- - replaced `add(ResourceKey<EquipmentAsset> asset, boolean resize)` with `addWithoutDownscale`
- `UnifiedHelpers`
- - deprecated methods which demanded the use of a `Block` have been removed in favour of their `BlockLike` equivalents
- moved `HelpersImpl.BiomeModifications.Context` to `BiomeModificationContext`
- - now part of `api.`

Events
- renamed `EventType` to `EventTiming`
- renamed `UnifiedClientEvents.Guis` to `UnifiedClientEvents.Hud`
- - matches vanilla renames in 26.2
- `UnifiedEvents`
- - deprecated `modifyFiltered` methods and replaced with the identical `modifyWithFilter`
- `UnifiedEvents.LootTables`
- - removed the deprecated `editPool` method
- - - the newer `editPool` method introduced a while back uses a `LootEntry` which supports replacement, insertion and removal, rather than just replacement and insertion
- `UnifiedHelpers.BLOCK_CONVERSIONS`
- - removed `addWeathering(WeatheringCopperBlocks set)`
- - - vanilla removed `WeatheringCopperBlocks` and another `addWeathering` method still exists, so this was removed outright
- moved `EventsImpl.LootTables.LootTable` to `LootTableContext`
- - now part of `api.`

Utilities
- renamed `CreativeModeTabs` to `CreativeModeTabIds`
- - this was made for consistency with new vanilla id classes, and to distinguish it from the vanilla `CreativeModeTabs` class

### 1.21.11 to 26.1

Registries
- `UnifiedRegistries.DeferredRegistry`
- - allows you to register content to any vanilla or modded registry
- `UnifiedRegistries.Items`
- - whilst optional, you should use `SuppliedItem` rather than `Supplier<Item>`
- `UnifiedRegistries.Blocks`
- - whilst optional, you should use `SuppliedBlock` rather than `Supplier<Block>`
- removed `UnifiedRegistries.MobEffects`
- - this was made redundant by `UnifiedRegistries.DeferredRegistry`
- removed `UnifiedRegistries.ParticleTypes`
- - this was made redundant by `UnifiedRegistries.DeferredRegistry`

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