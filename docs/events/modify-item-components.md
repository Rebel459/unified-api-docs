# Modify Item Components

**Class: `UnifiedEvents.ModifyItemComponents`**

This event is extremely powerful, as it allows you to dynamically filter and modify the components on any given item.

### Example

```
UnifiedEvents.ModifyItemComponents.access(
        item -> {
            return true; // used to filter applicable items, returning true just skips this
        },
        (builder, item) -> {
            if (item.getDefaultInstance().is(Items.TRIDENT)) {
                builder.set(DataComponents.REPAIRABLE, new Repairable(holderGetter.getOrThrow(CRItemTags.TRIDENT_REPAIR_MATERIALS))); // use the builder to set components
            }
        });
```