# Hotbar GUI

**Class: `UnifiedClientEvents.Gui`**

Allows you to access and add to Gui (HUD) elements.

The `accessHotbar` event is particularly useful over an equivalent mixin as Fabric and NeoForge have differing @Inject mixin targets (`renderHotbarAndDecorations` vs `renderHotbar`).

`Gui` is exposed directly, in addition to all other parameters you'd get from mixining into the equivalent methods.

### Example

```
UnifiedClientEvents.Gui.accessCrosshair(((gui, guiGraphics, deltaTracker) -> {
    // your custom behaviour here
}));
UnifiedClientEvents.Gui.accessHotbar(((gui, guiGraphics, deltaTracker) -> {
    // your custom behaviour here
}));
```