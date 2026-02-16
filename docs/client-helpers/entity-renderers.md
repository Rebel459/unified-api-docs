# Entity Renderers

**Class: `UnifiedClientHelpers / ClientHelpersImpl.EntityRenderers`**

`addLayerDefinition` is used to add a layer definition (texture) to a custom model.

`addEntityRenderer` and `addBlockEntityRenderer` are used to provide an EntityType or BlockEntityType respectively with a renderer.

### Methods
```
void addLayerDefinition(ModelLayerLocation location, Supplier<LayerDefinition> definition);

<T extends Entity> void addEntityRenderer(EntityType<? extends T> entityType, EntityRendererProvider<T> entityRendererProvider);

<T extends BlockEntity, S extends BlockEntityRenderState> void addBlockEntityRenderer(BlockEntityType<? extends T> blockEntityType, BlockEntityRendererProvider<T, S> blockEntityRendererProvider);
```