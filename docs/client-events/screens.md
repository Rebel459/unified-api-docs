# Screens

**Class: `UnifiedClientEvents.Screens`**

Provides access to `AbstractContainerScreen`, which is useful if you need to register your own mouse scrolling behaviour for a custom tooltip.

### Example

```
UnifiedClientEvents.Screen.initAbstractContainerScreen(abstractContainerScreen -> {
    abstractContainerScreen.addItemSlotMouseAction(new ExampleMouseActions(abstractContainerScreen.minecraft));
});
```