# Changelog

### 26.1

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