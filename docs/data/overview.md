### Overview

If you're looking to work with JSON features, this section of the wiki is dedicated exclusively to that. As you'll notice in the sidebar under Data, there are a plethora of new data and resource-driven features you can use. 

You should already be familiar with vanilla [data packs](https://minecraft.wiki/w/Data_pack). Everything discussed in this overview will assume as such.

**Common**

All unified-api driven data features are located under `unified/`. For example, biome modifiers would go in `data/<namespace>/unified/biome_modifiers`.

All unified-api features support [Load Requirements](/data/codecs/load-requirement). These are an optional field that makes the given JSON file only run if its conditions pass. This is done safely thus that, if you reference something that depends on another mod but the load requirement is not passed, the JSON will not attempt to load and thus your project will continue functioning as normal. This is great for adding config (if you're a modder) or mod-dependant content.

**Listeners**

Listeners are traditional datapack and resource-pack driven features. These can be loaded normally via datapack, resource pack or mod, and many will even refresh on /reload at runtime.

**Registries**

New to Unified API is the concept of data-driven registries. These are stored in `unified/registry/`. For example, blocks would go in `data/<namespace>/unified/registry/items`. 

The identifier of the registered content is simply the path, so `data/example_mod/unified/registry/blocks/example_block.json` would create `example_mod:example_block`.

Unlike non-registry content, data-driven registries must be present at runtime and must match on both the client and server. This means you cannot just drag a datapack with custom registry content on world creation - it must be present from the moment the game loads.

There are multiple ways to achieve this
- as a mod, your data-driven registries can be part of the mod's built-in data
- as a datapack, your data-driven registries can be loaded through Simple Resource Loader or Paxi
- as a distributed datapack, you can upload your datapack to Modrinth and have it repackage it as a mod, then remove the upload of the datapack version

Typically, if a datapack wanted to override another datapack, you'd load it above it. Seeing as this is not possible for registries, all registries, in addition to load requirements, support the priority codec.

A JSON with higher priority than a lower-priority one replaces it. For example `"priority": 10`. 

Furthermore, if you're overriding non-data-driven content from a mod registered through Unified API, simply put your file under the same namespace and path as the content's identifier, and it will automatically override it.

**Codecs**

Many listeners or data-driven registries will allow you to reference an extensible codec (the built-in ones are listed under codecs in the sidebar). Mods can add their own, but Unified API out-of-the-box includes vanilla ones to allow 1:1 recreation of all vanilla content, plus some additional ones under the unified namespace.

Documentation for those codecs is specifically for the latest vanilla version. Older versions may have different syntax, in which case you might need to check Unified API's source code for that version, or another project that already uses it.

**Other Projects**

Whilst Unified API has a ton of data-driven features, there are a couple other projects you may want to look at for additional complementary features.

If you'd like to add extensible resource-pack driven music events, you should look at [Music and Melody](https://github.com/Rebel459/music-and-melody/wiki).

If you'd like to place biomes, modify worldgen, modify structures and more, you should look at [Lithostitched](https://github.com/Apollounknowndev/lithostitched/wiki).