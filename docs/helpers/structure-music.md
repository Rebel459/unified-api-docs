# Structure Music

**Class: `UnifiedHelpers / StructureMusic`**

Allows you to register unique music pools to individual structures, which take precedence over biome music.

### Methods
```
default void add(Identifier structure, Music music)

default void add(Identifier structure, Music music, boolean fullBox)
```

### Example

```
UnifiedHelpers.STRUCTURE_MUSIC.add(
    Identifier.withDefaultNamespace("stronghold"), 
    new Music(ModSounds.STRONGHOLD_MUSIC, 60, 120, true)
);
```