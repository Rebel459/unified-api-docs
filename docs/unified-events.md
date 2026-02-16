# Unified Events

**Class: `UnifiedEvents`**

Unified Events allow you to inject custom behaviour into various game events in a multiloader-friendly manner. Most events are focused on providing an easier way to perform functionality that differs between modloaders, so these should be supplemented by mixins in your common code.

The general syntax for Unified API events is pretty simple:

```
UnifiedEvents.Players.onJoin(player -> {
    // your custom behaviour here
});
```