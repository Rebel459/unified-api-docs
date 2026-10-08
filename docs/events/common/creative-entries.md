# Creative Entries

**Class: `UnifiedEvents.CreativeEntries / CreativeEntryContext`**

An event-driven way of appending creative tabs.

### Methods

```
UnifiedEvents.CreativeEntries.modify((tab, context) -> {
    // your custom behaviour here
});

UnifiedEvents.CreativeEntries.modifyForTab(CreativeModeTabIds.TAB_NAME, context -> {
    // your custom behaviour here
});
```

### Context
```
public interface CreativeEntryContext {
    void insert(ItemLike... items);
    void insert(ItemStack... items);
    void insertAfter(ItemLike existingItem, ItemLike... addedItems);
    void insertAfter(ItemLike existingItem, ItemStack... addedItems);
    void insertAfter(ItemStack existingItem, ItemStack... addedItems);
    void insertBefore(ItemLike existingItem, ItemLike... addedItems);
    void insertBefore(ItemLike existingItem, ItemStack... addedItems);
    void insertBefore(ItemStack existingItem, ItemStack... addedItems);
}
```

### Example

```
UnifiedEvents.CreativeEntries.modify((tab, context) -> {
    if (tab == CreativeModeTabIds.COMBAT) {
        context.insertAfter(
                Items.CROSSBOW,
                CRItems.QUIVER.get(),
                CRItems.BLACK_QUIVER.get(),
                CRItems.BLUE_QUIVER.get(),
                CRItems.BROWN_QUIVER.get(),
                CRItems.CYAN_QUIVER.get(),
                CRItems.GRAY_QUIVER.get(),
                CRItems.GREEN_QUIVER.get(),
                CRItems.LIGHT_BLUE_QUIVER.get(),
                CRItems.LIGHT_GRAY_QUIVER.get(),
                CRItems.LIME_QUIVER.get(),
                CRItems.MAGENTA_QUIVER.get(),
                CRItems.ORANGE_QUIVER.get(),
                CRItems.PINK_QUIVER.get(),
                CRItems.PURPLE_QUIVER.get(),
                CRItems.RED_QUIVER.get(),
                CRItems.YELLOW_QUIVER.get(),
                CRItems.WHITE_QUIVER.get()
        );
    }
});
```