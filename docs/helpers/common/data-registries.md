# Data Registries

**Class: `UnifiedHelpers / DATA_REGISTRIES`**

Used to add data registry listeners (for example, vanilla uses this for Sulfur Cube Archetypes)

::: warning
`UnifiedHelpers.DATA_REGOSTROES` must be used in your registries init, not your common init.
:::

### Methods
```
<T> void register(ResourceKey<Registry<T>> key, Codec<T> codec);
<T> void registerSynced(ResourceKey<Registry<T>> key, Codec<T> serverCodec, Codec<T> clientCodec);
```