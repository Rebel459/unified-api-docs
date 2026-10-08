# Unified Registries

**Class: `UnifiedRegistries`**

Allows you to register multiloader content the traditional way, with deferred objects and registries. Even if you choose to use code for content that has data-driven alternatives, other developers can override your content with JSON, so you don't miss out on that interoperability.

This is the way of registering content that will be most familiar to most developers, however I would argue it is not the most efficient. I highly advise instead checking out the [generator overview](/generators/overview)

### UnifiedRegistries.DeferredRegistry

A generic, flexible class used to register content to *any* registry. This could be blocks, items, data-driven codecs and much more - anything from BuiltInRegistries or your own custom registry types will work.

Content is registered almost identically to vanilla - you just need to wrap your path-succeeding code with a Supplier.

::: info
In the rare case of using a custom registry you've created yourself (as opposed to a vanilla one), make sure to explicitly specify that registry when you pass your modEventBus through `NeoForgeUnifiedBus.register(String modId, IEventBus modEventBus, T... registries)`
:::

**Methods**

```
<Y, T extends Y> Supplied<T> register(String path, Supplier<T> value);

void addAlias(Identifier convertedFrom, Identifier convertedTo);
```

### Other Registries

`UnifiedRegistries` contains more convenient registries for common content
- `UnifiedRegistries.Items`
- `UnifiedRegistries.Blocks`
- `UnifiedRegistries.DataComponentTypes`
- `UnifiedRegistries.EntityTypes`
- `UnifiedRegistries.SoundEvents`

### Examples
```
public static UnifiedRegistries.DeferredRegistry<MobEffect> EFFECTS = UnifiedRegistries.DeferredRegistry.create(LaLConstants.MOD_ID, BuiltInRegistries.MOB_EFFECT);

public static final Holder<MobEffect> FREEZING = EFFECTS.register(
        "freezing",
        () -> new MobEffect(MobEffectCategory.HARMFUL, 7720931) {}
).holder();
```

```
public static UnifiedRegistries.DeferredRegistry<MapCodec<? extends EnchantmentEntityEffect>> ENCHANTMENT_ENTITY_EFFECT = UnifiedRegistries.DeferredRegistry.create(Mod.MOD_ID, BuiltInRegistries.ENCHANTMENT_ENTITY_EFFECT);

public static void example() {
    ENCHANTMENT_ENTITY_EFFECT.register("example_name", () -> EXAMPLE_CODEC)
    ENCHANTMENT_ENTITY_EFFECT.addAlias(Identifier.fromNamespaceAndPath(Mod.MOD_ID, "old_name"), Identifier.fromNamespaceAndPath(Mod.MOD_ID, "example_name"))
}
```

```
public static UnifiedRegistries.Items ITEMS = UnifiedRegistries.Items.create(ModName.MOD_ID);

public static final SuppliedItem EXAMPLE_ITEM = ITEMS.register("example_item",
        Item::new,
        () -> new Item.Properties() // note that you must use a supplier for Item.Properties
                .rarity(Rarity.UNCOMMON)
                .stacksTo(16)
);
```