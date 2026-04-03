# Default Data Components

**Class: `UnifiedEvents.DefaultDataComponents`**

This event is extremely useful, as it allows you to dynamically modify the components on any given item.

### Methods

```
UnifiedEvents.DefaultDataComponents.modify((item, builder, provider) -> {
    // your component modifications here
});

UnifiedEvents.DefaultDataComponents.modifyFiltered(
        item -> {
            return true; // used to filter applicable items
        },
        (item, builder, provider) -> {
            // your component modifications here
});
```

### Example

```
UnifiedEvents.DefaultDataComponents.modify(
        (item, builder, provider) -> {
            if (item.getDefaultInstance().is(Items.TRIDENT)) {
                builder.set(DataComponents.REPAIRABLE, new Repairable(holderGetter.getOrThrow(CRItemTags.TRIDENT_REPAIR_MATERIALS)));
                // you can also use UnifiedHelpers.DATA_COMPONENTS.add(builder, DataComponents.REPAIRABLE, new Repairable(holderGetter.getOrThrow(CRItemTags.TRIDENT_REPAIR_MATERIALS))) if you'd like to avoid overwriting existing components
            }
        });
```