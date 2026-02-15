# Entity Types

**Class: `UnifiedRegistries.EntityTypes`**

Allows you to register custom entities.

### Methods

```
<T extends Entity> @NotNull Supplier<EntityType<T>> register(String path, EntityType.@NotNull Builder<T> builder);
```

### Example

```
public static UnifiedRegistries.EntityTypes ENTITIES = UnifiedRegistries.EntityTypes.create(MOD_ID);

public static final @NotNull Supplier<EntityType<TestEntity>> EXAMPLE_ENTITY = ENTITIES.register(
        "example_entity",
        EntityType.Builder.<TestEntity>of(TestEntity::new, MobCategory.MISC)
                .sized(1F, 1F)
);
```