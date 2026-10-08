# Loot Entry

**Class: `LootEntry`**

A custom record used by the `modifyPool` method in the [Loot Tables](/events/common/loot-tables) event.

`insert(LootPoolEntryContainer.Builder<?> entry)` - accepts a loot table entry, which is inserted after the first occurence in each pool of the item predicate.

`replace(LootPoolEntryContainer.Builder<?> entry)` - accepts a loot table entry, which replaces every occurence of the item predicate in each pool.

`remove()` - removes every occurence of the item predicate in each pool.