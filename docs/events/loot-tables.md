# Loot Tables

**Class: `UnifiedEvents.LootTables`**

This event allows you to add pools to any given loot table, similarly to the fabric loot api.

Additionally, you can also edit individual pools within a loot table, by filtering for an item and either adding a new entry or replacing existing ones.

### Methods

```
UnifiedEvents.LootTables.modify(lootTable -> {
            // your loot table additions here
        }
);

UnifiedEvents.LootTables.modifyFiltered(lootTableKey -> {
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
            if (lootTable.getKey() == BuiltInLootTables.SIMPLE_DUNGEON) {
                LootPool.Builder pool = LootPool.lootPool().setRolls(ConstantValue.exactly(1.0F))
                        .add(EmptyLootItem.emptyItem().setWeight(11))
                        .add(LootItem.lootTableItem(Items.DIAMOND).setWeight(1));
                lootTable.addPool(pool); // adds a new loot pool to the table
            }
            if (lootTable.getKey() == BuiltInLootTables.ABANDONED_MINESHAFT) {
                lootTable.editPool(item -> item.value() == Items.IRON_INGOT, LootItem.lootTableItem(Items.NETHERITE_INGOT).setWeight(15), true); // edits existing loot pools within the table
            }
        }
);
```