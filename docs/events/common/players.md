# Players

**Class: `UnifiedEvents.Players`**

Various player-related events.

### Methods

```
UnifiedEvents.Players.onJoin(player -> {
    // your custom behaviour here
});
UnifiedEvents.Players.onLeave(player -> {
    // your custom behaviour here
});
UnifiedEvents.Players.onRespawn((oldPlayer, newPlayer) -> {
    // your custom behaviour here
});
UnifiedEvents.Players.onTick(EventTiming.PRE/POST, (player) -> {
    // your custom behaviour here
});
```