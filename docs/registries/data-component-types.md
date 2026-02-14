# Data Component Types

**Class: `UnifiedRegistries.DataComponentTypes`**

Allows you to register custom item components.

### Methods

```
<T> Supplier<DataComponentType<T>> register(String path, UnaryOperator<DataComponentType.Builder<T>> unaryOperator);
```

### Example

```
public static UnifiedRegistries.DataComponentTypes COMPONENTS = UnifiedRegistries.DataComponentTypes.create(MOD_ID);

public static final Supplier<DataComponentType<Integer>> EXAMPLE_COMPONENT = COMPONENTS.register("example_component",
        (builder) -> builder.persistent(ExtraCodecs.POSITIVE_INT).networkSynchronized(ByteBufCodecs.VAR_INT)
);
```