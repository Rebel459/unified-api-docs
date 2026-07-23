# Entity Types

**Class: `UnifiedRegistries.EntityTypes`**

Allows you to register custom entities.

### Methods

```
<T extends Entity> @NotNull Supplied<EntityType<T>> register(String path, EntityType.@NotNull Builder<T> builder);
<T extends LivingEntity> Supplied<EntityType<T>> register(String path, EntityType.Builder<T> builder, Supplier<AttributeSupplier> attributes);

void addAlias(Identifier convertedFrom, Identifier convertedTo);
```

### Example

```
public static UnifiedRegistries.EntityTypes ENTITIES = UnifiedRegistries.EntityTypes.create(MOD_ID);

public static final @NotNull Supplied<EntityType<TestEntity>> EXAMPLE_ENTITY = ENTITIES.register(
        "example_entity",
        EntityType.Builder.<TestEntity>of(TestEntity::new, MobCategory.MISC)
                .sized(1F, 1F),
        () -> Mob.createMobAttributes()
			.add(Attributes.MAX_HEALTH, 24D)
			.add(Attributes.MOVEMENT_SPEED, 0.16D)
			.add(Attributes.FOLLOW_RANGE, 32D)
			.build();
);
```