### Biome Modifiers

*Type: Data | Location: data/<namespace>/unified/biome-modifiers*

Biome modifiers allow you to modify any existing biome, whether it's worldgen, effects, climate, attributes or spawns.

```json5
{
    // format code goes here
}
```

**Format**

```json5
"targets": <biome tag> or [<biome identifier>]
```

What biomes the modifiers should be applied to. Can be a biome tag or list of biomes.

```json5
"worldgen": {
    "add_features": [
        {
            "feature": <feature identifier>,
            "step": <string> // https://minecraft.wiki/w/World_generation#Decoration_steps
        }
    ],
    "remove_features": [<feature identifier>],
    "add_carvers": [<carver identifier>],
    "remove_carvers": [<carver identifier>]
}
```

Used to add and remove features and carvers.

```json5
"effects": {
    "water_color": <int>,
    "foliage_color": <int>,
    "dry_foliage_color": <int>,
    "grass_color": <int>
}
```

Used to change biome colors.

```json5
"climate": {
    "temperature": <float>,
    "downfall": <float>,
    "has_precipitation": <boolean>
}
```

Used to change biome climate.

```json5
"attributes": {
    "set": {<environment attribute>: <value>, ...}, // https://minecraft.wiki/w/Environment_attribute,
    "modify": {<environment attribute>: <value>, ...}, // https://minecraft.wiki/w/Environment_attribute
}
```

Set replaces an environment attribute with a new value, whilst Modify modifies the existing one. The [environment attribute format](https://minecraft.wiki/w/Environment_attribute) is documented on the vanilla wiki.

```json5
"spawns": {
    "add_spawns": [
        {
            "type": <entity identifier>,
            "minCount": <int>, // must be 1 or above
            "maxCount": <int>, // must be 1 or above, must be greater than minCount
            "weight": <int> // optional, defaults to 1, must be 1 or above
        }
    ],
    "remove_spawns": [<entity identifier>],
    "add_charges": [
        {
            "type": <entity identifier>,
            "charge": <double>,
            "energy_budget": <double>
        }
    ],    
    "remove_charges": [<entity identifier>]
}
```

::: info
In 26.3 and above, `spawns` were removed as vanilla made them an environment attribute instead.
:::