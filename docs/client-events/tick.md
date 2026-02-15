# End Tick

**Class: `UnifiedClientEvents.Tick`**

Runs when the client ticks. `accessEnd` Can be useful for providing custom functionality to [Key Mappings](/client-registries/key-mappings).

### Methods

```
UnifiedEvents.Tick.accessStart(minecraft -> {
    // your custom behaviour here
});
UnifiedEvents.Tick.accessEnd(minecraft -> {
    // your custom behaviour here
});
```
### Example

```
UnifiedEvents.EndTick.accessEnd(minecraft -> {
    // your custom behaviour here
    while (ModKeyMappings.EXAMPLE_KEY.get().consumeClick()) {
        // custom keybind behaviour
    }
});
```