# Blocks

**Class: `UnifiedRegistries.Blocks`**

Blocks are registered normally, as you'd expect. Note that block registries return a [Supplied Block](/utilities/supplied-block).

::: info
Unified API also adds an extra block registry method to allow you bind your custom block to an existing block entity in a multiloader-friendly manner, as per the example. You can also register custom [Block Entity Types](/registries/block-entity-types)
:::

::: info
If you're looking to create compostable blocks, or furnace fuel blocks, Unified API contains a multiloader [Data Components](/helpers/data-components) helper to do just that - and there's also [Block Conversions](/helpers/block-conversions) for custom behavior like log stripping
:::

::: info
the `.builders()` method allows you to access block-related [registry builders](/registries/builders/registry-builders), providing a much easier way to register sets of blocks (and related registry content) such as [Wood Sets](/registries/builders/wood-sets)
:::

### Methods

```
<T extends Block> SuppliedBlock register(String path, Function<BlockBehaviour.Properties, T> function, Supplier<BlockBehaviour.Properties> blockProperties);
<T extends Block, Y extends BlockEntity> SuppliedBlock register(String path, Function<BlockBehaviour.Properties, T> function, Supplier<BlockBehaviour.Properties> blockProperties, Supplier<BlockEntityType<Y>> type);

<T extends Block> SuppliedBlock registerWithoutItem(String path, Function<BlockBehaviour.Properties, T> function, Supplier<BlockBehaviour.Properties> properties);
<T extends Block, Y extends BlockEntity> SuppliedBlock registerWithoutItem(String path, Function<BlockBehaviour.Properties, T> function, Supplier<BlockBehaviour.Properties> properties, Supplier<BlockEntityType<Y>> type);

default Builders builders()

void addAlias(Identifier convertedFrom, Identifier convertedTo);
```

### Example

```
public static UnifiedRegistries.Blocks BLOCKS = UnifiedRegistries.Blocks.create(ModName.MOD_ID);

public static final SuppliedBlock EXAMPLE_BLOCK = BLOCKS.register("example_block",
        Block::new,
        () -> BlockBehaviour.Properties.ofFullCopy(Blocks.STONE)
                .strength(1.8F, 8F),
        () -> BlockEntityType.BED // (optional) this binds our block to a given block entity
);
```