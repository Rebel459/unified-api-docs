### Extensible Codecs

As part of Unified API's effort to expose a ton of data-driven features to datapackers, and convenient registration generators to modders, the `ExtensibleCodec` system was created.

This system allows for mod developers to easily register new JSON-friendly behaviour.

**Creating a new Extensible Codec**

This part's quite simple, for example `public static final ExtensibleCodec<Consumer<UseOnContext>> USE_CONTEXT = new ExtensibleCodec<>();`

Challenging, I know. At this point, you can call `USE_CONTEXT.codec()` or `USE_CONTEXT.mapCodec()` to include it in your codec.

**Registering to an existing Extensible Codec**

This part is also... quite simple. There are two `.register` methods, a simple no-field one and a complex one which supports binding another codec to it (expands at flat-level). Make sure that you do this during registration init, not common init.

```
public static final ExtensibleItemCodec.Simple ARROW = ExtensibleCodecs.ITEM.register(Identifier.withDefaultNamespace("arrow"), () -> ArrowItem::new);

public static final ExtensibleItemCodec.Complex<MobBucket> MOB_BUCKET = ExtensibleCodecs.ITEM.register(Identifier.withDefaultNamespace()"mob_bucket"), MobBucket.CODEC, definition -> properties -> 
    new MobBucketItem((EntityType<? extends net.minecraft.world.entity.Mob>) definition.entityType, definition.fluid, definition.emptySound, properties));

public record MobBucket(EntityType<?> entityType, Fluid fluid, SoundEvent emptySound) {
    public static final MapCodec<MobBucket> CODEC = RecordCodecBuilder.mapCodec(instance -> instance.group(
            ENTITY_TYPE_CODEC.forGetter(MobBucket::entityType),
            FLUID_CODEC.forGetter(MobBucket::fluid),
            BuiltInRegistries.SOUND_EVENT.byNameCodec().fieldOf("empty_sound").forGetter(MobBucket::emptySound)
    ).apply(instance, MobBucket::new));
}
```

**Registering ExtensibleEntityCodec Rendering**

When creating an entity codec, there's an additional client-side step you must take. As entity model rendering is hardcoded, you must bind rendering information to the codec through `.bind`, so that every entity which uses the codec automatically receives correct rendering.

```
VanillaEntityCodecs.BOAT.bind((entity, id) -> {
    ModelLayerLocation location = new ModelLayerLocation(getLayerName(id, "boat"), "main");
    UnifiedClientHelpers.ENTITY_RENDERERS.addLayerDefinition(location, BoatModel::createBoatModel);
    UnifiedClientHelpers.ENTITY_RENDERERS.addEntityRenderer(entity::get, ctx -> new BoatRenderer(ctx, location));
});
```