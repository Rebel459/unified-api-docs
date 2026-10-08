# Spawn Placements

**Class: `UnifiedHelpers / SPAWN_PLACEMENTS`**

Used to register spawn behaviour for entities.

### Methods
```
<T extends Mob> void register(Supplier<EntityType<T>> type, SpawnPlacementType placementType, Heightmap.Types heightmap, net.minecraft.world.entity.SpawnPlacements.SpawnPredicate<T> spawnPredicate);
```