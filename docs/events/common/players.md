# Players

**Class: `UnifiedEvents.Players`**

Various player-related events.

### Methods

```
UnifiedEvents.Player.onJoin(player -> {
    // your custom behaviour here
});
UnifiedEvents.Player.onLeave(player -> {
    // your custom behaviour here
});
UnifiedEvents.Player.onRespawn((oldPlayer, newPlayer) -> {
    // your custom behaviour here
});
UnifiedEvents.Player.onTick(EventType.PRE/POST, (player) -> {
    // your custom behaviour here
});
```