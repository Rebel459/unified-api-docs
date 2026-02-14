# Creative Entries

**Class: `UnifiedHelpers.CreativeEntries`**

Allows easily adding vanilla & modded items to vanilla & modded creative tabs.

To create your own custom Creative Tab, check out [Creative Tabs](/registries/creative-tabs)

You can either use `add` to append the end of a tab, `addBefore` to insert items before an existing entry or `addAfter` to insert items after an existing entry. Multiple ItemLikes or ItemStacks are accepted.

### Methods
```
void add(ResourceKey<CreativeModeTab> tab, ItemLike... items);
void add(ResourceKey<CreativeModeTab> tab, ItemStack... items);

void addAfter(ResourceKey<CreativeModeTab> tab, ItemLike existingItem, ItemLike... addedItems);
void addAfter(ResourceKey<CreativeModeTab> tab, ItemLike existingItem, ItemStack... addedItems);

void addBefore(ResourceKey<CreativeModeTab> tab, ItemLike existingItem, ItemLike... addedItems);
void addBefore(ResourceKey<CreativeModeTab> tab, ItemLike existingItem, ItemStack... addedItems);
```

### Example

```
var entries = UnifiedHelpers.CreativeEntries.get()
entries.addAfter(CreativeModeTabs.COMBAT, Items.BOW, ModItems.SHORTBOW, ModItems.LONGBOW)
```