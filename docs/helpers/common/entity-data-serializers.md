# Entity Data Serializers

**Class: `UnifiedHelpers / ENTITY_DATA_SERIALIZERS`**

Used to register an `EntityDataSerializer<?>`

::: warning
`UnifiedHelpers.ENTITY_DATA_SERIALIZERS` must be used in your registries init, not your common init.
:::

### Methods
```
void register(Identifier id, Supplier<EntityDataSerializer<?>> serializer);
```