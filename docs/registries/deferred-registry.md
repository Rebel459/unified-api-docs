# Deferred Registry

**Class: `UnifiedRegistries.DeferredRegistry`**

A generic, flexible class used to register content to *any* registry. This could be blocks, items, data-driven codecs and much more - anything from BuiltInRegistries or your own custom registry types will work.

Content is registered almost identically to vanilla - you just need to wrap your path-succeeding code with a Supplier.

::: info
In the rare case of using a custom registry you've created yourself (as opposed to a vanilla one), make sure to explicitly specify that registry when you pass your modEventBus through `NeoForgeUnifiedRegistries.registerBus(String modId, IEventBus modEventBus, T... registries)`
:::

### Methods

```
<Y, T extends Y> Supplied<T> register(String path, Supplier<T> value);

<Y, T extends Y> Holder<T> registerForHolder(String path, Supplier<T> value);

void addAlias(Identifier convertedFrom, Identifier convertedTo);
```

### Examplea
```
public static UnifiedRegistries.DeferredRegistry<MobEffect> EFFECTS = UnifiedRegistries.DeferredRegistry.create(LaLConstants.MOD_ID, BuiltInRegistries.MOB_EFFECT);

public static final Holder<MobEffect> FREEZING = EFFECTS.registerForHolder(
        "freezing",
        () -> new MobEffect(MobEffectCategory.HARMFUL, 7720931) {}
);
```
```
public static UnifiedRegistries.DeferredRegistry<MapCodec<? extends EnchantmentEntityEffect>> ENCHANTMENT_ENTITY_EFFECT = UnifiedRegistries.DeferredRegistry.create(Mod.MOD_ID, BuiltInRegistries.ENCHANTMENT_ENTITY_EFFECT);

public static void example() {
    ENCHANTMENT_ENTITY_EFFECT.register("example_name", () -> EXAMPLE_CODEC)
    ENCHANTMENT_ENTITY_EFFECT.addAlias(Identifier.fromNamespaceAndPath(Mod.MOD_ID, "old_name"), Identifier.fromNamespaceAndPath(Mod.MOD_ID, "example_name"))
}
```