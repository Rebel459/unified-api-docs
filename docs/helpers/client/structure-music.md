# Structure Music

**Class: `UnifiedClientHelpers / STRUCTURE_MUSIC`**

Allows you to register unique music pools for structures, which take precedence over biome music.

::: warn
Whilst this helper is called client-side, Unified API must be installed on the server in order for the `ClientStructureReceiver` api to populate structures at the client's position.
:::

### Methods
```
default void add(ResourceKey<Structure> structure, BackgroundMusic music)
default void add(TagKey<Structure> structures, BackgroundMusic music)

default void addFullBox(ResourceKey<Structure> structure, BackgroundMusic music)
default void addFullBox(TagKey<Structure> structures, BackgroundMusic music)
```