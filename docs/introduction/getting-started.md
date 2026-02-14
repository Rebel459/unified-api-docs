# Getting Started

This page will guide you through getting started with a multiloader project using Unimined and the Unified API. It is assumed that you are already somewhat familiar with mod development using [IntelliJ IDEA](https://www.jetbrains.com/idea/).

### Using Unimined

The recommended way to use the Unified API is through Unimined, which allows for easy multiloader development on modern versions through common/fabric/neoforge branches. Architectury Loom is also supported, however Unimined is preferred due to Arch loom being outdated on new releases.

To create a new workspace with Unimined, or to migrate your existing single-loader or architectury workspace, you can either [install Unimined directly](https://github.com/unimined/Unimined), or (recommended) **download / clone this [template Unimined project](https://github.com/firstdarkdev/fdd-xplat).**

### Adding the Unified API

Once you have your workspace setup, you're going to want to depend on the Unified API.

In your `gradle.properties`, add the following:

```
unified_version=21.11-r1.0 # change this to whatever version you're using
```

In your root `build.gradle`, add the following:

```
    repositories {
        maven { url = "https://api.modrinth.com/maven" }
    }
```
```
dependencies {
    modCompileOnly("maven.modrinth:unified-api:${unified_version}-fabric")
}
```

As per above, we add the modrinth maven to fetch Unified API releases. `modCompileOnly` is used to ensure we do not break `runClient` for NeoForge (the API is identical between both loaders, so sharing the fabric version during compilation is fine).

In your fabric `build.gradle`, add the following:
```
dependencies {
    modImplementation("maven.modrinth:unified-api:${unified_version}-fabric")
}
```

And in your neoforge `build.gradle`:
```
dependencies {
    modImplementation("maven.modrinth:unified-api:${unified_version}-neoforge")
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
Whilst little work is required in setting up Unified API, we do need to make sure that our mod initialisations are structured correctly to handle the mutliloader environment. If you're familiar with NeoForge, you'll know this already, however this section is very important to know if you're coming from Fabric.
:::

In your common mod inits, you'll need to make sure they're being called from their respective Fabric & NeoForge initialisation classes. Whilst you can call your inits from your Fabric classes normally, NeoForge requires us to split registry and non-registry inits.

`ModName` (in common package)

```
    public static void initRegistries() {
        ModDataComponents.init();
        ModBlocks.init();
        ModEntities.init();
        ModSounds.init();
        // only registry inits go here
    }

	public static void init() {
        ModLootTables.init()
        // all your non-registry / behaviour class inits go here
	}
```

`ModNameNeoForge` (in neoforge package)
```
    public CombatRebornNeoForge(IEventBus modEventBus) {
        NeoForgeUnifiedRegistries.registerBus(ModName.MOD_ID, modEventBus);
        ModName.initRegistries();
        modEventBus.addListener(ModNameNeoForge::commonSetup);
    }

    private static void commonSetup(final FMLCommonSetupEvent event) {
        ModName.init();
    }
```

As you can see above, we've split the init calls specifically for NeoForge. This is because NeoForge requires us to register our content early, but does not let us access it until after registry creation has finished. We register our content first, and then we call our remaining classes, so that `.get()` is accessible on our custom content as we've ensured that the registering process has finished.

You'll also notice that we call `NeoForgeUnifiedRegistries.registerBus` before we initialise the registries - this is done to ensure the deffered registers are setup before they are called. For more information on Unified API's multiloader registries & how NeoForge handles its registries, please refer [here](/docs/registries).