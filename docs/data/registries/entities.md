### Entities

*Type: Registry | Location: `data/<namespace>/unified/registry/entities`*

Used to register custom entities. 

There are two ways to register entities. The first one is the traditional "type" method.

```json5
"type": <entity codec identifier>,
<entity type field>: <value>
...
```

Check the [entity type list](/data/codecs/entity).

You'll notice there are very few of them - just boats and rafts! This is because entities are incredibly hardcoded, and thus there was not much point in creating type codecs for each one. Instead, this brings us to the second way you can create an entity.

```json5
"base": <entity identifier>
```

This lets you reference any vanilla or modded entity ID, and your new entity will be created as a 1:1 copy, upon which you can then set custom entity properties below (and do anything else you'd expect like adding it to biomes with [biome modifiers](/data/listeners/biome-modifiers) or creating [mob variants](/data/listeners/mob-variants) for it).

With this out of the way, we of course have the familiar properties field.

```json5
{
    "base": "minecraft:zombie",
    "properties" {
        // entity properties go here
    }
}
```

**Properties**

All properties are optional.

```json5
"spawn_placement": {
    "placement_type": <placement type identifier>,
    "heightmap": <string>, // https://minecraft.wiki/w/Heightmap,
    "spawn_predicate": <spawn predicate identifier>
}

"spawn_placement": {
    "placement_type": {
        "type": <placement type identifier>,
        <placement type field>: <value>,
        ...
    },
    "heightmap": <string>, // https://minecraft.wiki/w/Heightmap,
    "spawn_predicate": {
        "type": <spawn predicate identifier>,
        <spawn predicate field>: <value>,
        ...
    }
}
```

Used to set the spawning behaviour of an entity. Uses [placement types](/data/codecs/spawn-placement) and [spawn predicates](/data/codecs/spawn-predicate).

In order for your entity to spawn naturally, you'll still need to use [biome modifiers](/data/listeners/biome-modifiers).

```json5
"default_attributes": {
    "copy_from": <entity identifier>, // optional
    "attributes": [ // optional
        {
            "attribute": <attribute identifier>,
            "value": <double> // optional
        }
    ]
}
```

Sets the attributes used by the mob, and their default values. You are also able to specify an existing mob to copy attributes from.

**Variant Properties**

Entities re-use many properties from [mob variants](/data/listeners/mob-variants). You should refer there for the following properties, which work identically here, but for the registered entity:
- `texture`
- `baby_texture`
- `sounds`
- `attack_effects`
- `burn_in_daylight`