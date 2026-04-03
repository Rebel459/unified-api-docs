# Instance

**Class: `UnifiedClientEvents.Instance`**

Client instance-related events. `onTick` Can be useful for providing custom functionality to [Key Mappings](/client-registries/key-mappings).

### Methods

```
UnifiedClientEvents.Instance.onTick(EventType.PRE/POST, minecraft -> {
    // your custom behaviour here
});
UnifiedClientEvents.Instance.onRespawn(player -> {
    // your custom behaviour here
});
```
### Example

```
UnifiedClientEvents.Instance.onTick(EventType.POST, minecraft -> {
    // your custom behaviour here
    while (ModKeyMappings.EXAMPLE_KEY.get().consumeClick()) {
        // custom keybind behaviour
    }
});
```