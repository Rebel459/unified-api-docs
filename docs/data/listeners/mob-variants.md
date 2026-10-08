### Mob Variants

*Type: Data | Location: `data/<namespace>/unified/mob-variants`*

A powerful mob variant system that lets you create variants of almost any vanilla or modded mob. For example, creating a new fox or zombie variant.

There are a couple minor limitations compared to vanilla mob-specific variants
- no custom models, only textures
- custom sounds work on most mobs, but some modded ones require manual in-code support
- no support for custom particles

However, there are a ton of additional features that vanilla mob variants do not possess. Many of the features documented here are also present in the [entity registry](/data/registries/entities)

```json5
{
    // format code goes here
}
```

**Format**

```json5
"target": <entity identifier>
```

The target entity the variant should be created from.

```json5
"texture": <texture identifier> // optional

"texture": { // optional
    "original": <texture identifier>, // optional
    "replacement": <texture identifier>
}
```

The texture location to be used by the mob variant. 

You can optionally write this in long form so that the new texture is only applied on a mob instance that used a specified texture. This is useful, for example, if you want to add a variant for mobs which have multiple models - such as cows - so that you don't try and make apply a normal cow texture to what would've originally been a horned cow, for example.

```json5
"baby_texture": <texture identifier> // optional

"baby_texture": { // optional
    "original": <texture identifier>, // optional
    "replacement": <texture identifier>
}
```

Same as the adult texture setter, but for the baby texture.

```json5
"sounds": { // optional
    "ambient_sound": <sound identifier>, // optional
    "hurt_sound": <sound identifier>, // optional
    "eat_sound": <sound identifier>, // optional
    "death_sound": <sound identifier>, // optional
    "step_sound": <sound identifier> // optional
}
```

Used to change mob sounds.

```json5
"spawn_conditions": [<spawn conditions>] // optional, https://minecraft.wiki/w/Mob_variant_definitions#Spawn_condition
```

Under which conditions the mob variant should spawn instead of the original mob. Uses the [vanilla mob variant spawn conditions](https://minecraft.wiki/w/Mob_variant_definitions#Spawn_condition)

```json5
"spawn_chance": <float> // optional, defaults to 1.0, must not be negative
```

The chance of the mob variant replacing the base mob if spawn conditions are met. 1.0 = 100%. Set a lower decimal value if you want to have rare mob variants that only sometimes replace their base mob.

```json5
"attributes": [ // optional
    {
        "attribute": <attribute identifier>,
        "id": <attribute modifier identifier>,
        "amount": <double>,
        "operation": <string> // https://minecraft.wiki/w/Attribute#Operations
    }
]
```

Attributes to add to the entity. You specify a target attribute and then an [attribute modifier](https://minecraft.wiki/w/Attribute#Modifiers).

The identifier of an attribute modifier can be any base vanilla one documented on the wiki, any modded one, or any unique one you make up yourself.

```json5
"attack_effects": [ // optional
    {
        "id": <effect identifier>, // https://minecraft.wiki/w/Effect#List_of_effects
        "amplifier": <int>, // optional, defaults to 0
        "duration": <int>, // optional, defaults to 0
        "ambient": <boolean>, // optional, defaults to false
        "show_particles": <boolean>, // optional, defaults to true
        "show_icon": <boolean>, // optional, defaults to true
        "hidden_effect": <boolean> // optional
    }
]
```

A list of effects that the mob should apply to entities it damages.

```json5
"burn_in_daylight": <boolean> // optional
```

Overrides whether the mob should burn in sunlight.

```json5
"loot_table": <loot table identifier> // optional
```

Overrides the loot table used by the variant.