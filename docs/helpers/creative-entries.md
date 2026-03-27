# Creative Entries

**Class: `UnifiedHelpers / HelpersImpl.CreativeEntries`**

Allows easily adding vanilla & modded items to vanilla & modded creative tabs.

To create your own custom Creative Tab, check out [Creative Tabs](/registries/creative-tabs)

You can either use `insert` to append the end of a tab, `insertBefore` to insert items before an existing entry or `insertAfter` to insert items after an existing entry. Multiple ItemLikes or ItemStacks are accepted.

### Methods
```
void insert(ResourceKey<CreativeModeTab> tab, ItemLike... items);
void insert(ResourceKey<CreativeModeTab> tab, ItemStackTemplate... items);

void insertAfter(ResourceKey<CreativeModeTab> tab, ItemLike existingItem, ItemLike... addedItems);
void insertAfter(ResourceKey<CreativeModeTab> tab, ItemLike existingItem, ItemStackTemplate... addedItems);

void insertBefore(ResourceKey<CreativeModeTab> tab, ItemLike existingItem, ItemLike... addedItems);
void insertBefore(ResourceKey<CreativeModeTab> tab, ItemLike existingItem, ItemStackTemplate... addedItems);
```

### Example

```
UnifiedHelpers.CREATIVE_ENTRIES.insertAfter(CreativeModeTabs.COMBAT, Items.BOW, ModItems.SHORTBOW, ModItems.LONGBOW)
```