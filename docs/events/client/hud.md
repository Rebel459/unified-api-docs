# Hud

**Class: `UnifiedClientEvents.Hud`**

::: info
Known as `UnifiedClientEvents.Gui` on 26.1
:::

Allows you to access and add to Hud elements.

The `renderHotbar` event is particularly useful over an equivalent mixin as Fabric and NeoForge have differing @Inject mixin targets (`extractHotbarAndDecorations` vs `extractHotbar`).

`Hud` is exposed directly, in addition to all other parameters you'd get from mixining into the equivalent methods.

### Example

```
UnifiedClientEvents.Hud.renderCrosshair(((hud, graphics, deltaTracker) -> {
    // your custom behaviour here
}));
UnifiedClientEvents.Hud.renderHotbar(((hud, graphics, deltaTracker) -> {
    // your custom behaviour here
}));
```