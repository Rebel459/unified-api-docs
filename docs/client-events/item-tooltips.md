# Item Tooltips

**Class: `UnifiedClientEvents.ItemTooltips`**

Events used to append different item tooltips.

### Methods

```
UnifiedClientEvents.Instance.addDetails(EventType.PRE/POST, context -> {
    // your custom behaviour here
});
UnifiedClientEvents.Instance.addAttributes(EventType.PRE/POST, (stack, consumer, display, player) -> {
    // your custom behaviour here
});
UnifiedClientEvents.Instance.insertLines(context -> {
    // your custom behaviour here
});
```