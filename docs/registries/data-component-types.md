# Data Component Types

**Class: `UnifiedRegistries.DataComponentTypes`**

Allows you to register custom item components.

### Methods

```
<T> Supplied<DataComponentType<T>> register(String path, UnaryOperator<DataComponentType.Builder<T>> unaryOperator);

void addAlias(Identifier convertedFrom, Identifier convertedTo);
```

### Example

```
public static UnifiedRegistries.DataComponentTypes COMPONENTS = UnifiedRegistries.DataComponentTypes.create(MOD_ID);

public static final Supplied<DataComponentType<Integer>> EXAMPLE_COMPONENT = COMPONENTS.register("example_component",
        (builder) -> builder.persistent(ExtraCodecs.POSITIVE_INT).networkSynchronized(ByteBufCodecs.VAR_INT)
);
```