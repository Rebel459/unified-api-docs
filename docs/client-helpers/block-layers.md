# Block Layers

**Class: `UnifiedHelpers.BlockLayers`**

::: info
This helper method has been removed in 26.1 and above, as this process is now handled automatically by vanilla.
:::

Allows you to specify a ChunkSectionLayer for a block or fluid, in order to handle how a block should be rendered on the client (such as transparent / non-full blocks)

### Methods
```
void addLayerDefinition(ModelLayerLocation location, Supplier<LayerDefinition> definition);

<T extends Entity> void addEntityRenderer(EntityType<? extends T> entityType, EntityRendererProvider<T> entityRendererProvider);

<T extends BlockEntity, S extends BlockEntityRenderState> void addBlockEntityRenderer(BlockEntityType<? extends T> blockEntityType, BlockEntityRendererProvider<T, S> blockEntityRendererProvider);
```

### Example

```
var blockLayers = UnifiedClientHelpers.BlockLayers.get();
blockLayers.add(ModBlocks.EXAMPLE_BLOCK.get(), ChunkSectionLayer.CUTOUT)
```