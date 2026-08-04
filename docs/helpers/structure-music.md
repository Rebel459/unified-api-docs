# Structure Music

**Class: `UnifiedHelpers / STRUCTURE_MUSIC`**

Allows you to register unique music pools for structures, which take precedence over biome music.

### Methods
```
default void add(Identifier structure, Music music)
default void add(ResourceKey<Structure> structure, Music music)
default void add(TagKey<Structure> structure, Music music)

default void add(Identifier structure, Music music, boolean fullBox)
default void add(ResourceKey<Structure> structure, Music music, boolean fullBox)
default void add(TagKey<Structure> structure, Music music, boolean fullBox)
```

### Example

```
UnifiedHelpers.STRUCTURE_MUSIC.add(
    Identifier.withDefaultNamespace("stronghold"), 
    new Music(ModSounds.STRONGHOLD_MUSIC, 60, 120, true)
);
```