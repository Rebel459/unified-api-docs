# Changelog

### 26.1

**26.1-r1.0.1**

- fixed `UnifiedEvents.LootTables` `editPool` replacement not working on Fabric

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