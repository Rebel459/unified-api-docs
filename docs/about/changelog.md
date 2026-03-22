# Changelog

### 26.1

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