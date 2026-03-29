# Default Item Components

**Class: `UnifiedEvents.DefaultItemComponents`**

This event is extremely useful, as it allows you to dynamically modify the components on any given item.

### Methods

```
UnifiedEvents.DefaultItemComponents.modify((item, builder) -> {
    // your component modifications here
});

UnifiedEvents.DefaultItemComponents.modifyFiltered(
        item -> {
            return true; // used to filter applicable items
        },
        (builder, item) -> {
            // your component modifications here
});
```

### Example

```
UnifiedEvents.DefaultItemComponents.modify(
        (builder, item) -> {
            if (item.getDefaultInstance().is(Items.TRIDENT)) {
                builder.set(DataComponents.REPAIRABLE, new Repairable(holderGetter.getOrThrow(CRItemTags.TRIDENT_REPAIR_MATERIALS)));
                // you can also use UnifiedHelpers.DATA_COMPONENTS.add(builder, DataComponents.REPAIRABLE, new Repairable(holderGetter.getOrThrow(CRItemTags.TRIDENT_REPAIR_MATERIALS))) if you'd like to avoid overwriting existing components
            }
        });
```