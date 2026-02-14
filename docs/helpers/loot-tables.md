# Loot Tables

**Class: `UnifiedHelpers.LootTables`**

Allows you to add to any vanilla or modded loot table.

`addPool` is your typical way to add as many full, custom loot pools you want to a given loot table (or list of loot tables), whilst `addItem` is a convenient way to insert a single item using an integer to provide a % chance.

### Methods
```
void addPool(ResourceKey<LootTable> table, LootPool.Builder... pools);
void addPool(List<ResourceKey<LootTable>> tables, LootPool.Builder... pools);
void addItem(ResourceKey<LootTable> table, ItemLike item, int chance);
void addItem(List<ResourceKey<LootTable>> tables, ItemLike item, int chance);
```

### Example

```
var lootTables = UnifiedHelpers.LootTables.get()
lootTables.addPool(
        BuiltInLootTables.SIMPLE_DUNGEON,
        LootPool.lootPool().setRolls(ConstantValue.exactly(1.0F))
                .add(EmptyLootItem.emptyItem().setWeight(5))
                .add(LootItem.lootTableItem(ModItems.EXAMPLE_ITEM.get()))
);
lootTables.addItem(
        BuiltInLootTables.SIMPLE_DUNGEON,
        Items.DIAMOND,
        50
);
```