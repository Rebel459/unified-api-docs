# Entity Renderers

**Class: `UnifiedClientHelpers / ClientHelpersImpl.EntityRenderers`**

`addLayerDefinition` is used to add a layer definition (texture) to a custom model.

`addEntityRenderer` and `addBlockEntityRenderer` are used to provide an EntityType or BlockEntityType respectively with a renderer.

::: warning
This helper should be used during NeoForge's client registering initialisation, not client common initialisation. Also be sure to add your layer definitions before calling them with the renderer methods.
:::

### Methods
```
void addLayerDefinition(ModelLayerLocation location, Supplier<LayerDefinition> definition);

<T extends Entity> void addEntityRenderer(Supplier<EntityType<? extends T>> entityType, EntityRendererProvider<T> entityRendererProvider);

<T extends BlockEntity, S extends BlockEntityRenderState> void addBlockEntityRenderer(Supplier<BlockEntityType<? extends T>> blockEntityType, BlockEntityRendererProvider<T, S> blockEntityRendererProvider);
```

### Example

```
UnifiedClientHelpers.ENTITY_RENDERERS.addEntityRenderer(LaLEntityTypes.GLOW_STICK::get, context -> new ThrownItemRenderer<>(context, 1F, true));
```