# Unified Registries

**Class: `UnifiedRegistries`**

Unified Registries allow us to register content for both Fabric and NeoForge simultaneously, using our deferred [Supplied](/utilities/supplied) class to ensure that we remain compliant with NeoForge's staged registry system.

In NeoForge, as discussed back in [Getting Started](/about/getting-started), mod initialisation and registries are staged:
- first, deferred registries are created, before the actual registering of content is completed (and therefore registered content cannot yet be accessed in this stage)
- then, the rest of the mod runs as normal, during which the registered content can be accessed using `.get()`

Unified API handles all this for you, however you must ensure that all registered content is registered *before* it is accessed with `.get()`.

### NeoForge Setup

::: warning
Before you register your content, you must first pass your NeoForge event bus to `NeoForgeUnifiedRegistries` using the `registerBus` method, otherwise initialisation will fail.
:::

An example of a NeoForge initialisation class which correctly sets up its registries through the Unified API is shown below:

```
@Mod(ModName.MOD_ID)
public class ModNameNeoForge {

    public ModNameNeoForge(IEventBus modEventBus) {
        NeoForgeUnifiedRegistries.registerBus(ModName.MOD_ID, modEventBus);
        ModName.initRegistries();
        modEventBus.addListener(ModNameNeoForge::commonSetup);
    }

    private static void commonSetup(final FMLCommonSetupEvent event) {
        ModName.init();
    }
}
```
- the `modEventBus` is first passed to `NeoForgeUnifiedRegistries`
- then, our mod's registries are initialised to the deferred registries
- finally, we add a listener for our common setup, which runs the rest of our mod's code once the registries have been created and are thus accessible by the rest of our mod

::: info
If you've created a unique registry type in your project not present in vanilla, you must pass that through manually to `NeoForgeUnifiedRegistries`, such as by doing `registerBus(ModName.MOD_ID, modEventBus, YourModRegistries.REGISTRY_NAME, YourModRegistries.OTHER_REGISTRY_NAME)`
:::

For Fabric setup, you can just initialise your mod as normal - there is no staged mod loading system. We use [Supplied](/utilities/supplied) for our registries for convenient NeoForge compatability.

### Deferred Registries and Usage Example

In order to register content, you will use `UnifiedRegistries` in order to register your content in a way that is compatible with both mod loaders, without requiring extra effort on your part. As such, we will not use vanilla (fabric) or neoforge registries, and instead create our own.
```
public static UnifiedRegistries.DeferredRegistry REGISTRY = UnifiedRegistries.DeferredRegistry.create(ModName.MOD_ID, BuiltInRegistries.REGISTRY_NAME);
```

As you can see, it's very easy to set up a [Deferred Registry](/registries/deferred-registry), and you can use any vanilla or modded registry you like. However, Unified API also provides many dedicated registries for specific registry types which contain their own specific methods to make mod development more convenient, such as the one below.

```
public static UnifiedRegistries.Items ITEMS = UnifiedRegistries.Items.create(ModName.MOD_ID);
```

Once we create our mod-specific registry, we can simply register our content normally. If you're coming from NeoForge, you're familiar with using deferred holders, however Fabric-familiar developers should be aware that all registries use a `Supplied<>` in order to remain compatible with NeoForge's staged system, which directly provides a resource key whilst deferring direct access of registered content to `.get()` and `.holder()` in order to ensure content is only accessed directly after the registry stage.

Whilst most content will use a regular [Supplied](/utilities/supplied) which extends `ResourceKey`, implements `Supplier` and provides access to a `Holder`, Items and Blocks have the option of using [SuppliedItem](/utilities/supplied-item) and [SuppliedBlock](/utilities/supplied-block) respectively, which also implement additional interfaces such as ItemLike.

```
public static final SuppliedItem EXAMPLE_ITEM = ITEMS.register("example_item",
        Item::new,
        () -> new Item.Properties()
                .rarity(Rarity.UNCOMMON)
                .stacksTo(16)
);
```

As you can see, the syntax is nearly identical to vanilla / fabric registries, except we use `SuppliedItem` in place of a direct `Item` (with other content, this would be a generic `Supplied<Object>`), and also use `() ->` to wrap our `Item.Properties` with `Supplier` to ensure we can safely access any custom components we've created. That's it - no extra work for any registries, so it's easy to get started, or even convert an existing single-loader project with a simple find-replace.

::: info
Most of Unified API's registries also contain the `void addAlias(Identifier convertedFrom, Identifier convertedTo);` method, in order to easily create registry aliases.
:::