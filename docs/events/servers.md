# Servers

**Class: `UnifiedEvents.Servers`**

Various server-related events.

### Methods

```
UnifiedEvents.Servers.onDatapackLoad(minecraftServer -> {
    // your custom behaviour here
});
UnifiedEvents.Servers.onStart(minecraftServer -> {
    // your custom behaviour here
});
UnifiedEvents.Servers.onStop(minecraftServer -> {
    // your custom behaviour here
});
UnifiedEvents.Servers.onTickStart(minecraftServer -> {
    // your custom behaviour here
});
UnifiedEvents.Servers.onTickEnd(minecraftServer -> {
    // your custom behaviour here
});
UnifiedEvents.Servers.onLevelTickStart(serverLevel -> {
    // your custom behaviour here
});
UnifiedEvents.Servers.onLevelTickEnd(serverLevel -> {
    // your custom behaviour here
});
```