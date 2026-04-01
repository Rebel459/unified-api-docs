# Entities

**Class: `UnifiedEvents.Entities`**

Various entity-related events.

### Methods

```
UnifiedEvents.Entities.onDeath(entity, damageSource -> {
    // your custom behaviour here
});
UnifiedEvents.Entities.onEquipmentChange(entity, equipmentSlot, oldStack, newStack -> {
    // your custom behaviour here
});
UnifiedEvents.Entities.onLoad(entity, level -> {
    // your custom behaviour here
});
UnifiedEvents.Entities.onUnload(entity, level -> {
    // your custom behaviour here
});
```