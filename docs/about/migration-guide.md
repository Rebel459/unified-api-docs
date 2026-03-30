# Migration Guide

[View Full Changelog](/about/changelog)

### 26.1-b6.0 to 26.1-b7.0

Changes
- `UnifiedEvents.DefaultItemComponents`
- - now provides a `TriConsumer` with a `HolderLookup.Provider`
- - - this will require updating usages of DefaultItemComponent events to use a TriConsumer, rather than the previous BiConsumer

Renames
- `UnifiedClientEvents.Ticks`
- - renamed `atStart` to `onStart`
- - renamed `atEnd` to `onEnd`

### 26.1-b5.0 to 26.1-b6.0

Changes
- `UnifiedPlatform`
- - replaced `getEnvironment` with `isClientSide` and `isServerSide`

Renames
- `UnifiedEvents.LootTables`
- - renamed `modifyWithFilter` to `modifyFiltered`
- `UnifiedPlatform`
- - renamed `getDevelopmentInstance` to `getDevelopmentEnvironment`
- - renamed `getPlatform` to `getLoader`

### 26.1-b4.0 to 26.1-b5.0

Changes
- when registering blocks with `UnifiedRegistries.Blocks`, you must now wrap your `BlockBehaviour.Properties` with a Supplier: `() ->`

Renames
- renamed `UnifiedEvents.ItemComponents` to `UnifiedEvents.DefaultItemComponents`
- - renamed `modifyWithFilter` to `modifyFiltered`

### 26.1-b3.1 to 26.1-b4.0

Changes
- replaced `UnifiedHelpers.PLATFORM` with `UnifiedPlatform.get()`
- - anywhere using `UnifiedHelpers.PLATFORM` will have to update to use `UnifiedPlatform.get()`

### 26.1-b2.0 to 26.1-b3.1

Changes
- `UnifiedEvents.Players.onRespawn` now provides a `BiConsumer` with `oldPlayer` and `newPlayer`
- - previously, only the new player was provided, so usages of this event must be adjusted

### 26.1-b1.0 to 26.1-b2.0

Changes
- methods in `UnifiedHelpers.CREATIVE_ENTRIES` which previously required `ItemStack` now require `ItemStackTemplate` instead
- - these methods were previously broken on 26.1, and are fixed by this change

### 1.21.11 to 26.1

Renames
- `UnifiedHelpers.NETWORKING`
- - renamed `registerPlayC2S` to `registerPlayToServer`
- - renamed `registerPlayS2C` to `registerPlayToClient`
- - renamed `registerConfigC2S` to `registerConfigToServer`
- - renamed `registerConfigS2C` to `registerConfigToClient`
- `UnifiedHelpers.CREATIVE_ENTRIES`
- - renamed `add` to `insert`
- - renamed `addAfter` to `insertAfter`
- - renamed `addBefore` to `insertBefore`
- `UnifiedEvents.ItemComponents`=
- - renamed old `modify` method to `modifyWithFilter`
- renamed `UnifiedItemComponents` to `UnifiedDataComponents`

Removals
- `UnifiedClientHelpers.BLOCK_LAYERS`
- - removed due to 26.1 handling block layers automatically. You can safely delete any code which called this helper
- `UnifiedHelpers.LOOT_TABLES`
- - removed due to being replaced by the `UnifiedEvents.LootTables` event, which functions similarly to fabric's loot table api
- `UnifiedHelpers.STRIPPABLES`
- - instead of using `UnifiedHelpers.STRIPPABLES.add(log, strippedLog)`, you should instead use `UnifiedHelpers.BLOCK_CONVERSIONS.addStrippable(log, strippedLog)`
- `UnifiedHelpers.FURNACE_FUELS`
- - instead of using `UnifiedHelpers.FURNACE_FUELS.add(itemLike, ticks)`, you should use either `UnifiedHelpers.DATA_COMPONENTS.addFurnaceFuel(itemLike, ticks)` or add `UnifiedDataComponents.FURNACE_FUELS` to your item's components list

Other
- Composting
- - composting can now be handled using `UnifiedHelpers.DATA_COMPONENTS.addCompost(itemLike, chance)` or by adding `UnifiedDataComponents.COMPOST` to your item's components list, as opposed to appending the vanilla list