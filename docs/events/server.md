# Server

**Class: `UnifiedEvents.Server`**

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
UnifiedEvents.Servers.onTick(EventType.PRE/POST, minecraftServer -> {
    // your custom behaviour here
});
UnifiedEvents.Servers.onLevelTick(EventType.PRE/POST, serverLevel -> {
    // your custom behaviour here
});
```