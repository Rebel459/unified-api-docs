# Server

**Class: `UnifiedEvents.Server`**

Various server-related events.

### Methods

```
UnifiedEvents.Server.onDatapackLoad(minecraftServer -> {
    // your custom behaviour here
});
UnifiedEvents.Server.onStart(minecraftServer -> {
    // your custom behaviour here
});
UnifiedEvents.Server.onStop(minecraftServer -> {
    // your custom behaviour here
});
UnifiedEvents.Server.onTick(EventTiming.PRE/POST, minecraftServer -> {
    // your custom behaviour here
});
UnifiedEvents.Server.onLevelLoad(serverLevel -> {
    // your custom behaviour here
});
UnifiedEvents.Server.onLevelUnload(serverLevel -> {
    // your custom behaviour here
});
UnifiedEvents.Server.onLevelTick(EventTiming.PRE/POST, serverLevel -> {
    // your custom behaviour here
});
```