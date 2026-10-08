# Getting Started

::: info
If you're a datapack or modpack developer looking to use Unified API as a data-driven JSON library, you should instead refer to the [data-driven overview](/data/overview).
:::

This page will guide you through getting started with a multiloader project and the Unified API. It is assumed that you are already somewhat familiar with mod development using [IntelliJ IDEA](https://www.jetbrains.com/idea/).

### Multiloader Setup

When using Unified API, it is recommended to do so on a multiloader project. Great examples of multiloader templates include Jared's Multiloader Template, Unimined, or Architectury Loom.

I would recommend you use the [multiloader template](https://github.com/jaredlll08/MultiLoader-Template) to setup your workspace, however whichever setup you prefer will work fine.

### Adding Unified API

Once you have your workspace setup, you're going to want to depend on Unified API.

In your `gradle.properties`, add the following:

```
unified_version=26.1-1.0 # change this to whatever version you're using
```

In your root `build.gradle`, add the following:

```
repositories {
    maven { url = "https://api.modrinth.com/maven" }
}
```

In your common `build.gradle`, add the following:

```
dependencies {
    compileOnly("maven.modrinth:unified-api:${unified_version}-fabric")
}
```

As per above, we add the modrinth maven to fetch Unified API releases. `compileOnly` is used to ensure we do not break `runClient` for NeoForge (the API is identical between both loaders, so sharing the fabric version during compilation is fine).

In your fabric `build.gradle`, add the following:
```
dependencies {
    implementation("maven.modrinth:unified-api:${unified_version}-fabric")
}
```

And in your neoforge `build.gradle`:
```
dependencies {
    implementation("maven.modrinth:unified-api:${unified_version}-neoforge")
}
```

Finally, it doesn't hurt to make sure we tell players that Unified API is a required dependency of our mod:

`fabric.mod.json`
```
"depends": {
    "unified": "*"
}
```

`neoforge.mods.toml`
```
[[dependencies.${mod_id}]]
modId = "unified"
```

### Structuring Project Initialisation

::: tip
Unlike Fabric-only code, Unified API requires us to split registry and common initialization on **both** Fabric and NeoForge. This allows us to maintain compliant with NeoForge's own registration system, and support Unified API's data-driven staged registration.
:::

In your common mod inits, you'll need to make sure they're being called from their respective Fabric & NeoForge initialisation classes.

`ModName` (in common package)
```
public static void initRegistries() {
    ModDataComponents.init();
    ModBlocks.init();
    ModEntities.init();
    ModSounds.init();
    // only registry inits go here
}

public static void initCommon() {
    ModLootTables.init()
    // all your non-registry / behaviour class inits go here
}
```

`ModNameFabric` (in fabric package)
```
@Override
public void onInitialize() {
    ModName.initRegistries();
    FabricUnifiedInitializer.register(this::onInitializeCommon);
}

private void onInitializeCommon() {
    ModName.initCommon();
}
```


`ModNameNeoForge` (in neoforge package)
```
public CombatRebornNeoForge(IEventBus modEventBus) {
    NeoForgeUnifiedBus.register(ModName.MOD_ID, modEventBus);
    ModName.initRegistries();
    modEventBus.addListener(ModNameNeoForge::commonSetup);
}

private static void commonSetup(final FMLCommonSetupEvent event) {
    ModName.initCommon();
}
```

You'll also notice that we call `NeoForgeUnifiedBus.register` before we initialise the registries - this is done to ensure the NeoForge deferred registers are setup before they are called. For more information on Unified API's registries, please refer [here](/registries/unified-registries).