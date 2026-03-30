# Guis

**Class: `UnifiedClientEvents.Guis`**

Allows you to access and add to Gui (HUD) elements.

The `renderHotbar` event is particularly useful over an equivalent mixin as Fabric and NeoForge have differing @Inject mixin targets (`extractHotbarAndDecorations` vs `extractHotbar`).

`Gui` is exposed directly, in addition to all other parameters you'd get from mixining into the equivalent methods.

### Example

```
UnifiedClientEvents.Gui.renderCrosshair(((gui, graphics, deltaTracker) -> {
    // your custom behaviour here
}));
UnifiedClientEvents.Gui.renderHotbar(((gui, graphics, deltaTracker) -> {
    // your custom behaviour here
}));
```