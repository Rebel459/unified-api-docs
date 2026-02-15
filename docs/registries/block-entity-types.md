# Block Entity Types

**Class: `UnifiedRegistries.BlockEntityTypes`**

Allows you to register custom block entities. 

::: info
Whilst it's recommended you bind your blocks to your custom block entity here, you can also bind custom [Blocks](/registries/blocks) when registering them using Unified API.
:::

### Methods

```
@NotNull <T extends BlockEntity> Supplier<BlockEntityType<T>> register(String path, @NotNull BlockEntityType.BlockEntitySupplier<T> builder);
@NotNull <T extends BlockEntity> Supplier<BlockEntityType<T>> register(String path, @NotNull BlockEntityType.BlockEntitySupplier<T> builder, Block... blocks);
```