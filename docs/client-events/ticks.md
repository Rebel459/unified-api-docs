# Ticks

**Class: `UnifiedClientEvents.Ticks`**

Runs when the client ticks. `atEnd` Can be useful for providing custom functionality to [Key Mappings](/client-registries/key-mappings).

### Methods

```
UnifiedEvents.Tick.atStart(minecraft -> {
    // your custom behaviour here
});
UnifiedEvents.Tick.atEnd(minecraft -> {
    // your custom behaviour here
});
```
### Example

```
UnifiedEvents.EndTick.atEnd(minecraft -> {
    // your custom behaviour here
    while (ModKeyMappings.EXAMPLE_KEY.get().consumeClick()) {
        // custom keybind behaviour
    }
});
```