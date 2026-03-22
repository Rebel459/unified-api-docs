# Blocks

**Class: `UnifiedRegistries.Blocks`**

Blocks are registered normally, as you'd expect.

::: info
Unified API also adds an extra block registry method to allow you bind your custom block to an existing block entity in a multiloader-friendly manner, as per the example. You can also register custom [Block Entity Types](/registries/block-entity-types)
:::

::: info
If you're looking to create strippable blocks, compostable blocks, or furnace fuel blocks, Unified API contains a multiloader [Data Components](/helpers/data-components) helper to do just that
:::

### Methods

```
<T extends Block> Supplier<T> register(String path, Function<BlockBehaviour.Properties, T> function, BlockBehaviour.Properties blockProperties);
<T extends Block, Y extends BlockEntity> Supplier<T> register(String path, Function<BlockBehaviour.Properties, T> function, BlockBehaviour.Properties blockProperties, BlockEntityType<Y> type);

<T extends Block> Supplier<T> registerWithoutItem(String path, Function<BlockBehaviour.Properties, T> function, BlockBehaviour.Properties properties);
<T extends Block, Y extends BlockEntity> Supplier<T> registerWithoutItem(String path, Function<BlockBehaviour.Properties, T> function, BlockBehaviour.Properties properties, BlockEntityType<Y> type);

<T extends Block> Supplier<T> register(String path, Function<BlockBehaviour.Properties, T> blockFunction, BlockBehaviour.Properties blockProperties, Supplier<Item.Properties> itemProperties);
<T extends Block> Supplier<T> register(String path, Function<BlockBehaviour.Properties, T> blockFunction, BlockBehaviour.Properties blockProperties, Function<Item.Properties, Item> itemFunction);
<T extends Block> Supplier<T> register(String path, Function<BlockBehaviour.Properties, T> blockFunction, BlockBehaviour.Properties blockProperties, Function<Item.Properties, Item> itemFunction, Supplier<Item.Properties> itemProperties);
<T extends Block, Y extends BlockEntity> Supplier<T> register(String path, Function<BlockBehaviour.Properties, T> blockFunction, BlockBehaviour.Properties blockProperties, Supplier<Item.Properties> itemProperties, BlockEntityType<Y> type);
<T extends Block, Y extends BlockEntity> Supplier<T> register(String path, Function<BlockBehaviour.Properties, T> blockFunction, BlockBehaviour.Properties blockProperties, Function<Item.Properties, Item> itemFunction, BlockEntityType<Y> type);
<T extends Block, Y extends BlockEntity> Supplier<T> register(String path, Function<BlockBehaviour.Properties, T> blockFunction, BlockBehaviour.Properties blockProperties, Function<Item.Properties, Item> itemFunction, Supplier<Item.Properties> itemProperties, BlockEntityType<Y> type);

void addAlias(Identifier convertedFrom, Identifier convertedTo);
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

::: info
If you're trying to make blocks with more advanced block items (such as registering a DoorBlock with a DoorItem), you can used the more advanced `register` methods which allow specifying custom item classes & properties
:::

```
public static UnifiedRegistries.Blocks BLOCKS = UnifiedRegistries.Blocks.create(ModName.MOD_ID);

public static final Supplier<Block> EXAMPLE_DOOR_BLOCK = BLOCKS.register("example_door_block",
        DoorBlock::new,
        BlockBehaviour.Properties.ofFullCopy(Blocks.OAK_DOOR)
        DoorItem::new,
        () -> new Item.Properties()
);
```