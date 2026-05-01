# Loot Tables

**Class: `UnifiedEvents.LootTables`**

This event allows you to add entire pools to any loot table through `addPool`. Further, you can also insert, replace and remove individual entries within any given pool using `editPool`.

::: info
`editPool` uses the [`LootEntry`](/utilities/loot-entry) record to determine how entries in a given loot table should be modified.
:::

### Methods

```
UnifiedEvents.LootTables.modify((table, key, provider) -> {
            // your loot table additions here
        }
);

UnifiedEvents.LootTables.modifyWithFilter(key -> {
            return true;
        },
        (table, key, provider) -> {
            // your loot table additions here
        }
);
```

### Examples

```
UnifiedEvents.LootTables.modify((table, key, provider) -> {
            if (key == BuiltInLootTables.SIMPLE_DUNGEON) {
                LootPool.Builder pool = LootPool.lootPool().setRolls(ConstantValue.exactly(1.0F))
                        .add(EmptyLootItem.emptyItem().setWeight(11))
                        .add(LootItem.lootTableItem(Items.DIAMOND).setWeight(1));
                table.addPool(pool); // adds a new loot pool to the table
            }
            if (key == BuiltInLootTables.ABANDONED_MINESHAFT) {
                table.editPool(item -> item == Items.IRON_INGOT, LootEntry.replace(LootItem.lootTableItem(Items.NETHERITE_INGOT).setWeight(15), true)); // edits existing loot pools within the table
            }
        }
);
```