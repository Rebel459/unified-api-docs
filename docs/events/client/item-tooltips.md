# Item Tooltips

**Class: `UnifiedClientEvents.ItemTooltips`**

Events used to append different item tooltips.

### Methods

```
UnifiedClientEvents.ItemTooltips.addDetails(EventTiming.PRE/POST, context -> {
    // your custom behaviour here
});
UnifiedClientEvents.ItemTooltips.addAttributes(EventTiming.PRE/POST, (stack, consumer, display, player) -> {
    // your custom behaviour here
});
UnifiedClientEvents.ItemTooltips.afterBaseAttributeAdded(((builder, stack, itemModifiers, player, attribute, displayValue) -> {
    // your custom behaviour here
}));
UnifiedClientEvents.ItemTooltips.afterAttributeAdded(((builder, stack, itemModifiers, player, attribute, modifier) -> {
    // your custom behaviour here
}));
UnifiedClientEvents.ItemTooltips.insertLines(context -> {
    // your custom behaviour here
});
```