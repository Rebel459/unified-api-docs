# Changelog

### 26.2

**26.2-r2.5**

Changed
- `WoodSet`
- - sign and hanging signs now use the block description prefix
- - the set's `WoodType` and `BlockSetType` are now automatically registered
- `BlockSet`
- - the set's `BlockSetType` is now automatically registered

**26.2-r2.4**

Added
- new `CreativeModeTabBuilder`
- - used to build custom creative tabs, which can then be registered via the Unified's deferred registry
- `ColoredItemSet`
- - new `setComponentWithDye`
- - - used to add components using a per-item `DyeColor`

Changed
- `ColoredItemSet`
- - fixed individually-set components not applying

**26.2-r2.3**

Added
- `BlockPreset`
- - new `SULFUR` and `POLISHED_SULFUR` presets
- - new `CINNABAR` and `POLISHED_CINNABAR` presets

Changed
- `WoodSet`
- - deprecated `setLeafSoundType` and `getLeafSoundType` in favour of new `setLeavesSoundType` and `getLeavesSoundType` respectively
- `WoodPreset`
- - `WoodPreset.CHERRY` now includes Cherry Leaves sounds
- deprecated `UnifiedRegistries.BlockEntityTypes`
- deprecated `UnifiedRegistries.CreativeTabs`

**26.2-r2.2**

Added
- `UnifiedRegistries.BlockEntityTypes`
- - added `register(String path, BlockEntityType.BlockEntitySupplier<T> builder, Supplier<? extends BlockLike>... blocks)`

Changed
- `ColoredBlockSet` and `ColoredItemSet`
- - fixed crash when `creativeInventoryPlacement` isn't used
- `UnifiedHelpers.DATA_PACKS` and `UnifiedClientHelpers.RESOURCE_PACKS` [26.2]
- - `addOptional` now defaults to disabled on Fabric, matching NeoForge behaviour
- `PackType` [26.1]
- - `OPTIONAL_RESOURCES` and `OPTIONAL_DATA` now default packs to disabled on Fabric, matching NeoForge behaviour
- `UnifiedRegistries.BlockEntityTypes`
- - deprecated `register(String path, BlockEntityType.BlockEntitySupplier<T> builder, BlockLike... blocks)`
- fixed NeoForge crash caused by incorrect event bus for server reload listeners

**26.2-r2.1**

Added
- `WoodSet`
- - second `creativeInventoryPlacement` method, giving the option to not include boats
- - second `createSapling` method, allowing the placement of saplings in the creative inventory
- - second `createLeaves` method, allowing the placement of leaves in the creative inventory

Changed
- `WoodSet`
- - `precedingNaturalItem` in `creativeInventoryPlacement` now places the set's log after the specified item
- `UnifiedClientHelpers.PARTICLE_PROVIDERS`
- - `add` now uses `Supplier<? extends ParticleType<T>` instead of `Supplier<T>`

**26.2-r2.0**

Added
- new `ColoredBlockSet` and `ColoredBlockPreset`
- - used to create a set of blocks in all 16 colors
- new `ColoredItemSet` and `ColoredItemPreset`
- - used to create a set of items in all 16 colors
- - can be bound to a `ColoredBlockSet` if you want separate block-items
- new `UnifiedHelpers.RELOAD_LISTENERS` and `UnifiedClientHelpers.RELOAD_LISTENERS`
- - used to register data and resource reload listeners respectively
- `UnifiedRegistries.Items`
- - 2 new `registerBlockItem` methods, which allow specifying the item's function (eg `BlockItem::new`)

Changed
- `UnifiedRegistries.Items`
- - deprecated old `registerBlockItem` methods as they were made redundant by the new ones
- anywhere that previously asked for `Supplier<? extends ItemLike>` now accepts `Supplier<? extends ItemLike>`
- `VanillaVersion` `getString` now skips `patch` if it equals zero [26.1]

**26.2-r1.1**

Changed
- fixed a crash caused by `UnifiedClientEvents.Huds` (and related internal classes) providing `Gui` instead of `Hud`
- `VanillaVersion` `getString` now skips `patch` if it equals zero

**26.2-r1.0**

Added
- `UnifiedHelpers.DATA_PACKS` and `UnifiedClientHelpers.RESOURCE_PACKS`
- - includes `addRequired` and `addOptional` methods
- - used to load built-in datapacks and resource packs respectively

Changed
- Unified API packages have been completely redone, so you'll have to re-import all referenced classes
- - this includes a split with `unified.api.` and `unified.impl.`, which clearly separates developer-focused code from internal-only code
- - - you can be assured that no breaking changes will be made in the same vanilla drop version within `unified.api.`
- - it should be much easier to find the classes you're looking for going forward
- - many internal classes were either exposed in `api.` or renamed within `impl.` for clarity
- - - these include `BiomeModificationContext` and `LootTableContext`, which were moved into `api.`
- renamed `UnifiedPlatform` to `UnifiedInstance`
- - renamed `getLoader` to `getModLoader`
- renamed `UnifiedEvents.Guis` to `UnifiedEvents.Hud`
- - this matches changes to vanilla naming
- renamed `LoaderType` to `ModLoader`
- renamed `EventType` to `EventTiming`
- renamed `UnifiedClientHelpers.LEGACY_BABY_ARMOR` to `UnifiedClientHelpers.SIMPLE_BABY_ARMOR`
- - replaced `add(ResourceKey<EquipmentAsset> asset, boolean resize, int cutoff)` with `add(ResourceKey<EquipmentAsset> asset, int cutoff)`
- - replaced `add(ResourceKey<EquipmentAsset> asset, boolean resize)` with `addWithoutDownscale`
- renamed `CreativeModeTabs` to `CreativeModeTabIds`

Removed
- `UnifiedHelpers.PACKS`
- - removed in favour of split `UnifiedHelpers.DATA_PACKS` and `UnifiedClientHelpers.RESOURCE_PACKS`
- `PackType`
- - no longer needed due to the removal of `UnifiedHelpers.PACKS`
- `UnifiedHelpers.BLOCK_CONVERSIONS`
- - removed `addWeathering(WeatheringCopperBlocks set)`
- - - vanilla removed `WeatheringCopperBlocks` and another `addWeathering` method still exists, so this was removed outright
- removed all deprecated methods and classes

*Continued from 26.1-r5.3*

### 26.1

**26.1-r6.5**

Changed
- `WoodSet`
- - sign and hanging signs now use the block description prefix
- - the set's `WoodType` and `BlockSetType` are now automatically registered
- `BlockSet`
- - the set's `BlockSetType` is now automatically registered

**26.1-r6.4**

Added
- new `CreativeModeTabBuilder`
- - used to build custom creative tabs, which can then be registered via the Unified's deferred registry
- `ColoredItemSet`
- - new `setComponentWithDye`
- - - used to add components using a per-item `DyeColor`

Changed
- `ColoredItemSet`
- - fixed individually-set components not applying

**26.1-r6.3**

Changed
- `WoodSet`
- - deprecated `setLeafSoundType` and `getLeafSoundType` in favour of new `setLeavesSoundType` and `getLeavesSoundType` respectively
- `WoodPreset`
- - `WoodPreset.CHERRY` now includes Cherry Leaves sounds
- deprecated `UnifiedRegistries.BlockEntityTypes`
- deprecated `UnifiedRegistries.CreativeTabs`

**26.1-r6.2**

Added
- `UnifiedRegistries.BlockEntityTypes`
- - added `register(String path, BlockEntityType.BlockEntitySupplier<T> builder, Supplier<? extends BlockLike>... blocks)`

Changed
- `ColoredBlockSet` and `ColoredItemSet`
- - fixed crash when `creativeInventoryPlacement` isn't used
- `UnifiedHelpers.DATA_PACKS` and `UnifiedClientHelpers.RESOURCE_PACKS` [26.2]
- - `addOptional` now defaults to disabled on Fabric, matching NeoForge behaviour
- `PackType` [26.1]
- - `OPTIONAL_RESOURCES` and `OPTIONAL_DATA` now default packs to disabled on Fabric, matching NeoForge behaviour
- `UnifiedRegistries.BlockEntityTypes`
- - deprecated `register(String path, BlockEntityType.BlockEntitySupplier<T> builder, BlockLike... blocks)`
- fixed NeoForge crash caused by incorrect event bus for server reload listeners

**26.1-r6.1**

Added
- `WoodSet`
- - second `creativeInventoryPlacement` method, giving the option to not include boats
- - second `createSapling` method, allowing the placement of saplings in the creative inventory
- - second `createLeaves` method, allowing the placement of leaves in the creative inventory

Changed
- `WoodSet`
- - `precedingNaturalItem` in `creativeInventoryPlacement` now places the set's log after the specified item
- `UnifiedClientHelpers.PARTICLE_PROVIDERS`
- - `add` now uses `Supplier<? extends ParticleType<T>` instead of `Supplier<T>`

**26.1-r6.0**

Added
- new `ColoredBlockSet` and `ColoredBlockPreset`
- - used to create a set of blocks in all 16 colors
- new `ColoredItemSet` and `ColoredItemPreset`
- - used to create a set of items in all 16 colors
- - can be bound to a `ColoredBlockSet` if you want separate block-items
- new `UnifiedHelpers.RELOAD_LISTENERS` and `UnifiedClientHelpers.RELOAD_LISTENERS`
- - used to register data and resource reload listeners respectively
- `UnifiedRegistries.Items`
- - 2 new `registerBlockItem` methods, which allow specifying the item's function (eg `BlockItem::new`)

Changed
- `UnifiedRegistries.Items`
- - deprecated old `registerBlockItem` methods as they were made redundant by the new ones
- anywhere that previously asked for `Supplier<? extends ItemLike>` now accepts `Supplier<? extends ItemLike>`
- `VanillaVersion` `getString` now skips `patch` if it equals zero [26.1]

**26.1-r5.3**

Added
- new `VanillaVersion` record
- - used to get and compare against the current game version

Changed
- `UnifiedEvents.Levels`
- - fixed `onTick` being ignored


**26.1-r5.2.1**

- fixed client-side woodset builder boat crash ([#3](https://github.com/Rebel459/unified-api/issues/3)) [NeoForge]

**26.1-r5.2**

Changed
- `UnifiedHelpers.CREATIVE_ENTRIES`
- - fixed inverted placement order on NeoForge
- made builders thread-safe ([#2](https://github.com/Rebel459/unified-api/issues/2))

**26.1-r5.1**

Added
- `BlockSet.Settings`
- - new `getDestroyTime` method
- - new `getExplosionResistance` method
- `BlockSet.Builder`
- - new `setDestroyTime` method
- - new `setExplosionResistance` method
- - new `hasLegacySlab` method
- - new `baseBlockSuffix` method
- `BlockPreset`
- - new `LEGACY`, `STONE_BRICKS`, `COBBLED_DEEPSLATE`, `POLISHED_DEEPSLATE`, `DEEPSLATE_BRICKS`, `DEEPSLATE_TILES`, `TUFF`, `POLISHED_TUFF`, `TUFF_BRICKS`, `MUD_BRICKS`, `RESIN_BRICKS`, `SANDSTONE`, `END_STONE_BRICKS` and `PURPUR`presets

Changed
- `UnifiedRegistries.Blocks.Builders`
- - deprecated the old `blockSetBuilder` method in favour of a new one which doesn't require two floats
- `WoodSet.Settings` & `BlockSet.Settings`
- - fixed incorrect naming of `canArrowsActivateButton`
- `BlockPreset`
- - deprecated `CRACKED` and `CHISELED` presets
- - `STONE` and `POLISHED_BLACKSTONE` and `NETHER_BRICKS` presets now use legacy slabs
- - the `NETHER_BRICKS` preset now uses the correct sounds

**26.1-r5.0**

Added
- new `UnifiedRegistries.Items.Builders`
- - `EquipmentSet` and `EquipmentPreset` allow easily creating sets of tools and armor
- - - see the [Equipment Set](https://unified-api.dev/registries/builders/equipment-set.html) documentation for details
- `UnifiedRegistries.Blocks.Builders`
- - `BlockSet` and `BlockPreset` allow easily creating stone and brick-like block sets
- - - see the [Block Set](https://unified-api.dev/registries/builders/block-set.html) documentation for details
- - `WoodSet` and `WoodPreset` allow easily creating entire woodsets
- - - see the [Wood Set](https://unified-api.dev/registries/builders/wood-set.html) documentation for details
- `UnifiedRegistries.EntityTypes`
- - added a new `add` method that additionally allows the providing of a `Supplier<AttributeSupplier>`, in order to link attributes to custom mobs

Changed
- `UnifiedRegistries.Blocks`
- - registration methods containing `BlockEntityType<>` have now been superceded by new methods containing `Supplier<BlockEntityType<>>`
- - - existing non-supplier `BlockEntityType` methods were deprecated as a result
- - - this change was made to support custom block entity types
- `UnifiedClientHelpers.LEGACY_BABY_ARMOR`
- - the `add(ResourceKey<EquipmentAsset> asset)` now sets `resize` to `true`
- - - previously, this method defaulted to `false`. For the original behaviour, simply use `add(ResourceKey<EquipmentAsset> asset, boolean resize)` instead

Removed
- `UnifiedRegistries.Blocks`
- - removed two previously-deprecated registration methods
- - - this was required by the addition of the `Supplier<BlockEntityType<>>` methods

**26.1-r4.3**

Changed
- NeoForge-side `UnifiedEvents.LootTables` no longer unnecessarily overrides other mods' NeoForge-driven loot tables

**26.1-r4.2**

Added
- `UnifiedHelpers.NETWORKING` and `UnifiedClientHelpers.NETWORKING`
- - added `canSend` method

Changed
- `UnifiedHelpers.NETWORKING` and `UnifiedClientHelpers.NETWORKING`
- - marked all networking registration methods as optional for NeoForge
- - `send` methods now check if they can be sent before sending

**26.1-r4.1**

Added
- `UnifiedHelpers.STRUCTURE_MUSIC`
- - added support for structure tags

Changed
- internal structure music refactors
- moved helper impls into impl subfolders

**26.1-r4.0.4**

- fixed composting issues on Fabric

**26.1-r4.0.3**

- fixed Fabric biome modification feature order

**26.1-r4.0.1**

- fixed Fabric client particle providers

**26.1-r4.0**

Added
- `Supplied`
- - new generic class which accepts generics and functions much like `Supplier`
- - extends `ResourceKey`, implements `Supplier` and provides a registry-searched `Holder` through the `holder` method
- - all common registries now use `Supplied` instead of `Supplier` (though are backwards compatible), and `SuppliedItem` / `SuppliedBlock` now extend this, too
- `BlockLike`
- - basically vanilla's `ItemLike`, but for `Block` instead of `Item`
- - injected into the vanilla `Block` class
- - any methods which previously accepted `Block` have been deprecated in favour of new methods which accept `BlockLike`
- `UnifiedHelpers.BLOCK_CONVERSIONS`
- - added new `addWeathering` method which matches the deprecated `addWaxed` method, except it allows `BlockLike`

Changed
- new `SuppliedItem` class
- - rewritten in `util.registry`, with the old `SuppliedItem` interface being deprecated
- - - *Breaking: no longer implements `Holder<Item>`*
- - now extends `Supplied<Item>`
- new `SuppliedBlock` class
- - rewritten in `util.registry`, with the old `SuppliedBlock` interface being deprecated
- - - *Breaking: no longer implements `Holder<Block>`*
- - now extends `Supplied<Block>`
- - now implements `BlockLike`
- `UnifiedRegistries`
- - now provides `Supplied` instead of `Supplier`
- - - registered content which previously used `Supplier` will still work until backwards-compatability support is fully removed in 26.2
- - rewrote how much of internal registering is handled to accomodate the many additions and fixes in this update
- - - registered content now stores `Supplier<Registry>` internally in order to provide fully-functional holders through `Supplied`, `SuppliedItem` and `SuppliedBlock`
- `UnifiedRegistries.DeferredRegistry`
- - now allows the defining of generics (`<>`)
- - - existing DeferredRegistry calls will work as before, though there will be an unchecked warning unless generics are provided
- `UnifiedRegistries.BlockEntityTypes`
- - `BlockLike... blocks` is now accepted for the `register` method which previously accepted `Block... blocks`, the latter of which remains (but has been deprecated) for backwards-compatability
- `UnifiedHelpers.BLOCK_CONVERSIONS`
- - `addStrippable` and all `add` methods now accept `BlockLike` wherever `Block` was previously accepted, the latter which remain (but have been deprecated) for backwards-compatability
- `UnifiedHelpers.CREATIVE_ENTRIES`
- - improved NeoForge-side entry appending to allow `insertBefore` and `insertAfter` to work with modded entries as starting points, rather than only vanilla

**26.1-r3.2**

Added
- `UnifiedEvents.Levels`
- - includes `onLoad` and `onUnload` methods
- - - `UnifiedClientEvents.Instance` and `UnifiedEvents.Server` have also received similar `onLevelLoad` and `onLevelUnload` events
- `UnifiedClientEvents.Instance`
- - added `onStart` and `onStop` methods

Changed
- `UnifiedRegistries`
- - deprecated `registerHolder` in favour of identical `registerForHolder` method
- - - this change affects both `UnifiedRegistries.DeferredRegistry` and `UnifiedRegistries.SoundEvents`

**26.1-r3.1.2**

- fixed `ItemStack stack` always being `null` in `UnifiedEvents.ItemTooltips.afterAttributeAdded` and `UnifiedEvents.ItemTooltips.afterBaseAttributeAdded` on Fabric
- fixed `UnifiedEvents.ItemTooltips.addAttributes` triggering with incorrect `EventType.POST` timing on NeoForge

**26.1-r3.1**

Added
- `UnifiedEvents.ItemTooltips`
- - added `afterAttributeAdded` method
- - - allows you to add / check tooltips after each regular attribute tooltip (in vanilla, these are blue)
- - added `afterBaseAttributeAdded` method
- - - allows you to add / check tooltips after each base attribute tooltip (in vanilla, these are green)

Changed
- marked `UnifiedPlatform.get()` as `@ApiStatus.Internal`
- - you can (and should) now call `UnifiedPlatform` methods directly, without the use of `.get()`

**26.1-r3.0.4**
- fixed `UnifiedClientEvents.ItemTooltips.addAttributes` being ignored on NeoForge

**26.1-r3.0.2**
- fixed hopper composting crash on Fabric

**26.1-r3.0.1**
- fixed biome modification api causing crashes on Fabric when used with other biome mods

**26.1-r3.0**

Added
- `UnifiedEvents.LootTables`
- - added new `editPool` method
- - - provides an item predicate, and requires a `LootEntry`
- `LootEntry`
- - new record which allows for more flexible creation of loot pool entry changes
- - - `insert(LootPoolEntryContainer.Builder<?> entry)` inserts an entry for the first matching item in each pool
- - - `replace(LootPoolEntryContainer.Builder<?> entry)` replaces each entry containing the matching item
- - - `remove()` fully removes all matching entries

Changed
- `UnifiedEvents.LootTables`
- - deprecated old `editPool` method
- - - replaced with new `editPool`
- - both `editPool` methods now support vanilla `AlternativesEntry`, `EntryGroup` and `SequentialEntry` entries

**26.1-r2.2.1**
- fixed `UnifiedHelpers.BLOCK_CONVERSIONS` `addWeathering` oxidization not working on NeoForge

**26.1-r2.2**

Changed
- `UnifiedHelpers.BLOCK_CONVERSIONS`
- - blocks can now hold multiple different conversions

**26.1-r2.1**

Changed
- `UnifiedHelpers.BLOCK_CONVERSIONS`
- - added `addWeathering` method, which accepts a `WeatheringCopperBlocks` record
- - deprecated `addWaxed` method in favour of `addWeathering`
- - `addWaxed` / `addWeathering` now also setup oxidization behaviour for added blocks

**26.1-r2.0**

Added
- `UnifiedHelpers.DATA_COMPONENTS`
- - `addWithProvider` method
- - `addWithKey` method
- `UnifiedEvents.Players`
- - `onTick` event
- `UnifiedEvents.Entities`
- - `onTick` event
- - `onLivingTick` event

Changed
- `UnifiedRegistries.Blocks`
- - deprecated hybrid block + item `register` methods
- - - you should either separately register custom block items, or use Unified's data components helper, instead of using these
- `UnifiedEvents.DefaultDataComponents`
- - deprecated `modifyFiltered` in favour of `modifyWithFilter`
- `UnifiedEvents.LootTables`
- - deprecated `modifyFiltered` in favour of `modifyWithFilter`

Fixed
- `UnifiedHelpers.BLOCK_CONVERSIONS` is no longer ignored

Removed
- `UnifiedHelpers.DATA_COMPONENTS`
- - removed `add(DataComponentMap.Builder builder, DataComponentType<T> type, T value)`

**26.1-r1.2.2**

- fixed `UnifiedClientHelpers.ENTITY_RENDERERS` rendering methods not working on NeoForge by requiring Entities / Block Entities to be wrapped with a Supplier

**26.1-r1.2.1**

- fixed `SuppliedBlock` not correctly attatching Items when using certain `UnifiedRegistries.Blocks` methods

**26.1-r1.2**

Changed
- `UnifiedEvents.LootTables` `editPool` provides a direct `Item` predicate, rather than `SuppliedItem`

Fixed
- fixed `SuppliedItem` and `SuppliedBlock` `is(Holder<Item> holder)` method

**26.1-r1.1**

Changed
- `UnifiedEvents.LootTables` `editPool` provides a `SuppliedItem` predicate, rather than `Supplier<Item>`

Fixed
- `UnifiedEvents.LootTables` `editPool` replacements now correctly work on Fabric

**26.1-r1.0**

Added
- `UnifiedRegistries.DeferredRegistry`
- - allows you to register content to *any* registry through `create(modId, registry)`
- - includes `register`, `registerHolder` and `addAlias` methods
- `UnifiedRegistries.SoundEvents`
- - added new `register` and `registerHolder` methods which accept a float value for a fixed range

Fixed
- stopped NeoForge biome modifications duplicating on reload

Removed
- removed the following due to them being made redundant by `UnifiedRegistries.DeferredRegistry`:
- - `UnifiedRegistries.MobEffects`
- - `UnifiedRegistries.ParticleTypes`
- - `UnifiedRegistries.EnchantmentCodecs`
- - `UnifiedRegistries.MapDecorationTypes`

**26.1-b8.2**

Added
- `UnifiedClientHelpers.LEGACY_BABY_ARMOR`
- - added two new `add` methods which can accept a boolean and integer
- - - this allows for automatic pixel density resizing, so that adult textures can be rescaled to have a similar visible pixel density to baby mobs and vanilla baby armor

**26.1-b8.1**

Added
- `UnifiedClientHelpers.LEGACY_BABY_ARMOR`
- - includes an `add` method to allow a given EquipmentAsset resource key to fallback to old 1.21.11 baby armor rendering

Changed
- renamed `UnifiedEvents.DefaultItemComponents` to `UnifiedEvents.DefaultDataComponents`

**26.1-b8.0**

Added
- `UnifiedClientEvents.ItemTooltips`
- - used to add tooltips to an ItemStack
- - includes `addDetails`, `addAttributes` and `insertLines` methods
- `UnifiedClientEvents.Instance`
- - added `onRespawn` method
- `EventType`
- - new enum used to determine whether certain events should run at the start or end of an event
- - - uses `EventType.PRE` and `EventType.POST` to accomplish this

Changed
- renamed `UnifiedClientEvents.Ticks` to `UnifiedClientEvents.Instance`
- - replaced `onStart` and `onEnd` with `onTick`, which accepts `EventType`
- `UnifiedEvents.Blocks`
- - replaced `beforePlace` and `afterPlace` with `onPlace`, which accepts `EventType`
- `UnifiedEvents.Items`
- - replaced `beforeUse` and `afterUse` with `onUse`, which accepts `EventType`
- renamed `UnifiedEvents.Servers` to `UnifiedEvents.Server`
- - replaced `onTickStart` and `onTickEnd` with `onTick`, which accepts `EventType`
- - replaced `onLevelTickStart` and `onLevelTickEnd` with `onLevelTick`, which accepts `EventType`
- `UnifiedEvents.LootTables`
- - now accepts a LootTable, ResourceKey and HolderLookup.Provider directly
- - - `LootTable` context now only provides `addPool` and `editPool` as part of this change
- `UnifiedEvents.Entities`
- - `onEquipmentChange` now provides a `QuadConsumer<LivingEntity, EquipmentSlot, ItemStack, ItemStack>`, rather than a `Consumer<EquipmentContext>`

Fixed
- stopped composters crashing on Fabric

**26.1-b7.2**

Added
- `UnifiedEvents.Items`
- - includes `beforeUse`, `afterUse` and `onUseOn`
- `UnifiedEvents.Blocks`
- - includes `beforePlace`, `afterPlace` and `onUseOn`
- `UnifiedEvents.Entities`
- - includes `onDeath`, `onEquipmentChange`, `onLoad` and `onUnload`

Changed
- `UnifiedEvents.Players` now directly provides a `ServerPlayer`, rather than `Player`
- fixed the `replaceCurrentMusic` boolean in the `Music` provided to `UnifiedHelpers.STRUCTURE_MUSIC` being ignored

**26.1-b7.1**

Changed
- internal improvements to `UnifiedHelpers.STRUCTURE_MUSIC`

**26.1-b7.0**

Added
- `UnifiedHelpers.STRUCTURE_MUSIC`
- - new `add` methods which allow providing `ResourceKey<Structure>`

Changed
- `UnifiedEvents.DefaultItemComponents`
- - now provides a `TriConsumer` with a `HolderLookup.Provider`
- `UnifiedClientEvents.Ticks`
- - renamed `atStart` to `onStart`
- - renamed `atEnd` to `onEnd`
- fixed `UnifiedHelpers.STRUCTURE_MUSIC` crashing when used

**26.1-b6.0**

Added
- `UnifiedHelpers.STRUCTURE_MUSIC`
- - new helper that allows registering custom structure music pools
- `UnifiedEvents.LootTables`
- - added `editPool`
- - - allows replacing or adding individual entries within existing loot pools
- `UnifiedEvents.Servers`
- - added `onTickStart` and `onTickEnd`
- - added `onLevelTickStart` and `onLevelTickEnd`
- `UnifiedPlatform`
- - added `isClientSide` and `isServerSide`

Changed
- `UnifiedEvents.LootTables`
- - renamed `modifyWithFilter` to `modifyFiltered`
- `UnifiedPlatform`
- - renamed `getDevelopmentInstance` to `getDevelopmentEnvironment`
- - renamed `getPlatform` to `getLoader`
- renamed `PackInfo` to `PackType`
- renamed `PlatformInfo` to `LoaderType`

Removed
- `UnifiedPlatform`
- - removed `getEnvironment`
- removed unused `WoodTypeBuilder`
- removed unused `RenderStateDataKey`

**26.1-b5.0**

What's New
- `UnifiedRegistries.MapDecorationTypes`
- - allows registering custom map decorations

Changed
- `UnifiedRegistries.Blocks` methods now expect a supplier for block properties
- `UnifiedPlatform` can now correctly checks for mods during early-loading on NeoForge
- fixed `UnifiedHelpers.CREATIVE_ENTRIES.insertBefore` ordering on NeoForge
- fixed `UnifiedHelpers.BIOME_MODIFICATIONS` not working with non-vanilla biomes, features, carvers and entities
- renamed `UnifiedEvents.ItemComponents` to `UnifiedEvents.DefaultItemComponents`
- - renamed `modifyWithFilter` to `modifyFiltered`

**26.1-b4.0**

Changed
- replaced `UnifiedHelpers.PLATFORM` with `UnifiedPlatform.get()`
- - this will require mods to update to match this change, however it should address the Platform helper not working in mixin plugins

**26.1-b3.2**

Changed
- `UnifiedHelpers.PLATFORM`
- - added `isDevelopmentInstance()` method, which returns a boolean of whether the mod is in a development environment
- fixed `UnifiedClientHelpers.ENTITY_RENDERERS.addLayerDefinition` crashing on Fabric due to an incorrect cast

**26.1-b3.1**

What's New
- `UnifiedRegistries.EnchantmentCodecs`
- - allows registering enchantment-related codecs, through `registerProvider`, `registerLevelBasedValue`, `registerEntityEffect`, `registerValueEffect` and `registerLocationBasedEffect`
- `CreativeModeTabs`
- - provides easy access to vanilla `CreativeModeTabs` resource keys

Changed
- `UnifiedEvents.Players`
- - `onRespawn` now provides a `BiConsumer` with `oldPlayer` and `newPlayer`
- - - previously, only the new player was provided

**26.1-b2.0**

What's New
- `SuppliedItem`
- - new item class which implements `Holder<Item>`, `SuppliedItem`, `ItemLike` and `SuppliedItemInterface`
- - - `SuppliedItemInterface` includes `getTemplate` and `getDefaultInstance` methods
- `SuppliedBlock`
- - new block class which implements `Holder<Block>`, `SuppliedBlock`, `ItemLike` and `SuppliedBlockInterface`
- - - `SuppliedBlockInterface` includes `getTemplate` and `defaultBlockState` methods

Changed
- `UnifiedRegistries.Items`
- - now returns `SuppliedItem` instead of `Supplier<Item>` in all relevant methods
- `UnifiedRegistries.Blocks`
- - now returns `SuppliedBlock` instead of `Supplier<Block>` in all relevant methods
- `UnifiedHelpers.CREATIVE_ENTRIES`
- - methods which previously accepted `ItemStack` now require `ItemStackTemplate`
- - - this change fixes relevant methods which previously caused loading failure on 26.1

**26.1-b1.0**

What's New
- `UnifiedHelpers.BIOME_MODIFICATIONS`
- - full multiloader equivalent of the fabric biome modification api, allowing to modify biome features, carvers, mob spawns, effects, climate & environment attributes
- `UnifiedHelpers.BLOCK_CONVERSIONS`
- - allows for simple, extensible block-swapping functionality, including strippable logs and de-oxidizing/waxing copper
- `UnifiedHelpers.DATA_COMPONENTS`
- - used to easily append item components to blocks and items alike, including Unified API's furnace fuel and compost components
- `UnifiedEvents.Servers`
- - allows running code during server start, stop or datapack reload
- `UnifiedEvents.LootTables`
- - full loot table modification api, akin to the fabric loot table api
- `UnifiedDataComponents.COMPOST`
- - data-driven compost functionality
- `UnifiedItemTags`
- - currently contains the "unified:persistent_cooldowns" tag, which allows you to make item cooldowns persist even when a player quits the world

Changed
- added `addAlias` method to Unified registries
- `UnifiedHelpers.NETWORKING`
- - renamed `registerPlayC2S` to `registerPlayToServer`
- - renamed `registerPlayS2C` to `registerPlayToClient`
- - renamed `registerConfigC2S` to `registerConfigToServer`
- - renamed `registerConfigS2C` to `registerConfigToClient`
- `UnifiedHelpers.CREATIVE_ENTRIES`
- - renamed `add` to `insert`
- - renamed `addAfter` to `insertAfter`
- - renamed `addBefore` to `insertBefore`
- `UnifiedEvents.ItemComponents`
- - builder now provides a full `DataComponentMap.Builder`
- - added new `modify` method, which is a simpler event with no predicate filter
- - renamed old `modify` method to `modifyWithFilter`
- renamed `UnifiedItemComponents` to `UnifiedDataComponents`

Removed
- `UnifiedClientHelpers.BLOCK_LAYERS`, due to 26.1 changes making it redundant
- `UnifiedHelpers.LOOT_TABLES`, in favor of the new `UnifiedEvents.LootTables`
- `UnifiedHelpers.STRIPPABLES`, in favor of the new `UnifiedHelpers.BLOCK_CONVERSIONS`
- `UnifiedHelpers.FURNACE_FUELS`, in favor of the new `UnifiedHelpers.DATA_COMPONENTS` and `UnifiedDataComponents`

*Continued from 21.11-b1.3*

### 1.21.11

**21.11-b2.0.1**

- fixed Fabric client particle providers

**21.11-b2.0**

Changed
- `UnifiedRegistries.Blocks` methods now expect a supplier for block properties

**21.11-b1.4**

Changed
- fixed `UnifiedClientHelpers.ENTITY_RENDERERS.addLayerDefinition` crashing on Fabric due to an incorrect cast

**21.11-b1.3**

Changed
- server-to-client networking methods now provide a biconsumer with `Player`

**21.11-b1.2**

Changed
- renamed `registerC2S` and `registerS2C` to `registerPlayC2S` and `registerPlayS2C` respectively in `UnifiedHelpers.NETWORKING`
- added `registerConfigC2S` and `registerConfigS2C` methods to `UnifiedHelpers.NETWORKING`

**21.11-b1.1**

Changed
- renamed `Platform` enum to `PlatformInfo`
- added `getEnvironment` method to `UnifiedHelpers.PLATFORM`, which returns whether the client or server is loaded

**21.11-b1.0**