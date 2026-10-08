### Blocks

*Type: Registry | Location: `data/<namespace>/unified/registry/blocks`*

Used to register custom blocks. Most blocks will need a corresponding [block item](/data/registries/items) - one is not automatically created from a block JSON.

```json5
{
    "type": <block type identifier>,
    <block type field>: <value>,
    "properties" {
        // block properties go here, fields are documented below
    },
    "block_entity": <block entity identifier> // optional
}
```

Pretty straightforward format. The only added thing versus items and entities is an optional block entity field, for example a chest would use "minecraft:chest".

View the [list of block types](/data/codecs/block).

**Properties**

All properties are optional.

```json5
"copy_from": <block identifier>
```

Copies the properties of an existing block. Properties specified in this object will override the copied properties.

```json5
"map_color": <map color identifier>

"map_color": {
    "type": <map color function identifier>,
    <map color function field>: <value>,
    ...
}
```

Sets the color used for the block on maps.

The short form uses any vanilla [map color](https://minecraft.wiki/w/Map_color). The long form uses a [map color function](/data/codecs/map-color), allowing the color to be determined from the block state.

```json5
"collision": <boolean>
```

Whether the block has collision.

```json5
"occlusion": <boolean>
```

Whether the block can occlude other blocks.

```json5
"friction": <float>
```

Sets the friction of the block.

```json5
"speed_multiplier": <float>
```

Sets the movement speed multiplier for entities moving across the block.

```json5
"jump_multiplier": <float>
```

Sets the jump velocity multiplier for entities jumping from the block.

```json5
"sound_type": {
    "volume": <float>, // defaults to 1.0
    "pitch": <float>, // defaults to 1.0
    "break_sound": <sound identifier>,
    "step_sound": <sound identifier>,
    "place_sound": <sound identifier>,
    "hit_sound": <sound identifier>,
    "fall_sound": <sound identifier>
}
```

Sets the sounds used by the block.

```json5
"light_level": <integer> // 0-15 range

"light_level": {
    "type": <light emission identifier>,
    <light emission field>: <value>,
    ...
}
```

Sets the amount of light emitted by the block.

The long form uses a [light emission](/data/codecs/light-emission), allowing the light level to depend on the block state.

```json5
"destroy_time": <float>
```

Sets how long the block takes to destroy.

```json5
"explosion_resistance": <float>
```

Sets the block's resistance to explosions.

```json5
"random_ticks": <boolean>
```

Whether the block receives random ticks.

```json5
"dynamic_shape": <boolean>
```

Whether the block has a dynamic shape.

```json5
"loot_table": <loot table identifier>
```

Overrides the loot table used by the block.

```json5
"liquid": <boolean>
```

Whether the block is treated as a liquid.

```json5
"solid": <boolean>
```

Whether the block is treated as solid.

```json5
"push_reaction": <string> // accepts "normal", "destroy", "block", "ignore" or "push_only"
```

Sets how the block reacts when pushed by a piston. See [piston push reactions](https://minecraft.wiki/w/Piston#Push_reaction).

```json5
"air": <boolean>
```

Whether the block is treated as air.

```json5
"valid_spawn": <entity predicate identifier>

"valid_spawn": {
    "type": <entity predicate identifier>,
    <entity predicate field>: <value>,
    ...
}
```

Sets the conditions under which an entity can spawn on the block. Uses [entity predicates](/data/codecs/entity-predicate).

```json5
"redstone_conductor": <state predicate identifier>

"redstone_conductor": {
    "type": <state predicate identifier>,
    <state predicate field>: <value>,
    ...
}
```

Sets the conditions under which the block is considered a redstone conductor. Uses [state predicates](/data/codecs/state-predicate).

```json5
"suffocating": <state predicate identifier>

"suffocating": {
    "type": <state predicate identifier>,
    <state predicate field>: <value>,
    ...
}
```

Sets the conditions under which entities are considered to be suffocating inside the block. Uses [state predicates](/data/codecs/state-predicate).

```json5
"view_blocking": <state predicate identifier>

"view_blocking": {
    "type": <state predicate identifier>,
    <state predicate field>: <value>,
    ...
}
```

Sets the conditions under which the block blocks an entity's view. Uses [state predicates](/data/codecs/state-predicate).

```json5
"post_process": <post-process identifier>

"post_process": {
    "type": <post-process identifier>,
    <post-process field>: <value>,
    ...
}
```

Sets the post-processing behaviour of the block. Uses [post-processes](/data/codecs/post-process).

```json5
"emissive_rendering": <state predicate identifier>

"emissive_rendering": {
    "type": <state predicate identifier>,
    <state predicate field>: <value>,
    ...
}
```

Sets the conditions under which the block uses emissive rendering. Uses [state predicates](/data/codecs/state-predicate).

```json5
"requires_correct_tool_for_drops": <boolean>
```

Whether the correct tool is required for the block to drop loot.

```json5
"offset": <string> // either "none", "x_z" or "xyz"
```

Sets the type of positional offset applied to the block.

```json5
"spawn_terrain_particles": <boolean>
```

Whether terrain particles are spawned by the block.

```json5
"instrument": <string>
```

Sets the [note block instrument](https://minecraft.wiki/w/Note_Block#Block_data) used when a note block is placed on the block.

```json5
"replaceable": <boolean>
```

Whether the block can be replaced when another block is placed on its position.

```json5
"description_override": <string>
```

Overrides the block's description identifier.

```json5
"required_features": [<feature flag identifier>]
```

Sets the feature flags required for the block. Vanilla feature flags are as follows:
- `minecraft:vanilla`
- `minecraft:trade_rebalance`
- `minecraft:redstone_experiments`
- `minecraft:minecart_improvements`

```json5
"no_loot_table": <boolean>
```

Whether the block should have no loot table.

```json5
"flammability": {
    "ignite_odds": <integer>,
    "burn_odds": <integer>
}
```

Sets the block's flammability.

`ignite_odds` controls how likely the block is to catch fire, while `burn_odds` controls how likely the block is to burn.

```json5
"oxidizes_into": <block identifier>
```

Sets the block that this block oxidizes into. Useful for making a group of oxidizing / waxable copper blocks, in conjunction with [block conversions](/data/listeners/block-conversions) and relevant block types