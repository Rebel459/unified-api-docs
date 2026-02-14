# Hotbar GUI

**Class: `UnifiedClientEvents.HotbarGui`**

Allows you to access and add elements to the hotbar. 

This event is useful over an equivalent mixin as Fabric and NeoForge have differing @Inject mixin targets (`renderHotbarAndDecorations` vs `renderHotbar`).

`Gui` is exposed directly, in addition to `GuiGraphics` and `DeltaTracker`.

### Example

```
UnifiedClientEvents.HotbarGui.access(((gui, guiGraphics, deltaTracker) -> {
    // your custom behaviour here
}));
```