### Overview

Unified API has 3 ways of registering content correctly, which almost work as steps flowing onto one another.

**Types of Registration**

1. Generator

See the [generator overview](/generators/overview).

Generates JSON code during datagen, and returns the supplied object.

If you're a mod developer looking to add items, blocks or entities of any sort, I highly advise you check here out before looking at option 3.

2. JSON

See the [data overview](/data/overview).

This JSON is read by more traditional-looking deferred registries to add the content.

If you like working with datapacks, head here and you can get started making modded content without any java knowledge (or maybe you just want the convenience of JSON for random things!).

3. Deferred Registry

See [Unified Registries](/registries/unified-registries).

Here, the content is actually registered internally on mod startup. 

If you're a mod developer looking to register anything like you would with other multiloader projects, Fabric or NeoForge, head here and you'll be immediately familiar with it.

**Explanation**

There are some important principles to understand in regards to these.

**#1 and #2 - data-driven registration**

These are not hot-reloadable. JSON is read on mod load, and then content is registered normally internally. This makes data-driven registies feasible, however it means ordinary datapacks will not work. The JSON must be present the moment the game loads, meaning it must be part of a mod's internal assets, packaged as a mod when uploaded to a site like Modrinth, or as a datapack in a global data loader like Simple Resource Loader.

This does not mean it is impossible to override another project's content. Instead, all registry codecs include a "priority" field, so `"priority": 2` would beat a priority of 1 from the same namespace and file path in another project.

As a modder, whilst you will often be using the many built-in codecs like `VanillaBlockCodecs`, `VanillaItemCodecs` or `UnifiedLoadRequirementCodecs` instead of referencing classes directly like `Block::new`, many in-API methods will have duplicates that allow you to reference traditional java code and then a codec will be automatically registered for you.

**#3 - traditional registration**

For most content, this is normal multiloader deferred registration. For any content that has a data-driven equivalent, even Unified API's specific UnifiedRegistries.Items, for example, will support being overriden by JSON from another project. JSON always takes precedence over code-only content.