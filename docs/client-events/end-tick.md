# End Tick

**Class: `UnifiedClientEvents.EndTick`**

Runs at the end of every client tick. Can be useful for providing custom functionality to [Key Mappings](/docs/client-registries/key-mappings).

### Example

```
UnifiedEvents.EndTick.access(minecraft -> {
    // your custom behaviour here
    while (ModKeyMappings.EXAMPLE_KEY.get().consumeClick()) {
        // custom keybind behaviour
    }
});
```