# Blocks

**Class: `UnifiedRegistries.Blocks`**

Blocks are registered normally, as you'd expect. 

Unified API also adds an extra block registry method to allow you bind your custom block to an existing block entity in a multiloader-friendly manner, as per the example.

### Methods

```
<T extends Block> Supplier<T> register(String path, Function<BlockBehaviour.Properties, T> function, BlockBehaviour.Properties blockProperties);
<T extends Block, Y extends BlockEntity> Supplier<T> register(String path, Function<BlockBehaviour.Properties, T> function, BlockBehaviour.Properties blockProperties, BlockEntityType<Y> type);

<T extends Block> Supplier<T> registerWithoutItem(String path, Function<BlockBehaviour.Properties, T> function, BlockBehaviour.Properties properties);
<T extends Block, Y extends BlockEntity> Supplier<T> registerWithoutItem(String path, Function<BlockBehaviour.Properties, T> function, BlockBehaviour.Properties properties, BlockEntityType<Y> type);
```

### Example

```
public static UnifiedRegistries.Blocks BLOCKS = UnifiedRegistries.Blocks.create(ModName.MOD_ID);

public static final Supplier<Block> EXAMPLE_BLOCK = BLOCKS.register("example_block",
        Block::new,
        BlockBehaviour.Properties.ofFullCopy(Blocks.STONE)
                .strength(1.8F, 8F),
        BlockEntityType.BED // (optional) this binds our block to a given block entity
);
```