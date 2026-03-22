# Loot Tables

**Class: `UnifiedEvents.LootTables`**

This event allows you to add pools to any given loot table, similarly to the fabric loot api.

### Methods

```
UnifiedEvents.LootTables.modify(lootTable -> {
            // your loot table additions here
        }
);

UnifiedEvents.LootTables.modifyWithFilter(lootTableKey -> {
            return true;
        },
        lootTable -> {
            // your loot table additions here
        }
);
```

### Example

```
UnifiedEvents.LootTables.modify(lootTable -> {
            LootPool.Builder pool;
            if (lootTable.getKey() == BuiltInLootTables.SIMPLE_DUNGEON) {
                pool = LootPool.lootPool().setRolls(ConstantValue.exactly(1.0F))
                        .add(EmptyLootItem.emptyItem().setWeight(11))
                        .add(LootItem.lootTableItem(Items.DIAMOND).setWeight(1));
                lootTable.addPool(pool);
            }
        }
);
```