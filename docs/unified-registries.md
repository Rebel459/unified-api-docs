# Unified Registries

**Class: `UnifiedRegistries`**

Unified Registries allow us to register content for both Fabric and NeoForge simultaneously, using Suppliers to ensure that we remain compliant with NeoForge's staged registry system.

In NeoForge, as discussed back in [Getting Started](/docs/introduction/getting-started), mod initialisation and registries are staged:
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

For Fabric setup, you can just initialise your mod as normal - there is no staged mod loading system. We use Suppliers for our registries simply to remain compatible with NeoForge.

### Suppliers and Usage Example

In order to register content, you will use `UnifiedRegistries` in order to register your content in a way that is compatible with both mod loaders, without requiring extra effort on your part. As such, we will not use vanilla (fabric) or neoforge registries, and instead create our own.
```
public static UnifiedRegistries.Items ITEMS = UnifiedRegistries.Items.create(ModName.MOD_ID);

```

Once we add the above, we can simply register our content normally. If you're coming from NeoForge, you're familiar with using Suppliers, however Fabric-familiar developers should be aware that all registries use a Supplier in order to remain compatible with NeoForge's staged system, which in practice means that you'll need to use `.get()` every time you want to access your content in the rest of your project.

```
public static final Supplier<Item> EXAMPLE_ITEM = ITEMS.register("example_item",
        Item::new,
        () -> new Item.Properties()
                .rarity(Rarity.UNCOMMON)
                .stacksTo(16)
);
```

As you can see, the syntax is nearly identical to vanilla / fabric registries, except we wrap our registerd `Item` with `Supplier`, and (with items specifically) also use `() ->` to wrap our `Item.Properties` with `Supplier` to ensure we can safely access any custom components we've created. That's it - no extra work for any registries, so it's easy to get started, or even convert an existing single-loader project with a simple find-replace.
