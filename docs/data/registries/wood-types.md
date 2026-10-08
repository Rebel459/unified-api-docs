### Wood Types

*Type: Registry | Location: `data/<namespace>/unified/registry/wood-types`*

Used to register custom Wood Types, which are required by certain blocks.

**Format**

```json5
{
    "block_set_type": <block set type identifier or definition>, // required
    "sound_type": { // optional, defaults to wood
        "volume": <float>, // optional, defaults to 1.0
        "pitch": <float>, // optional, defaults to 1.0
        "break_sound": <sound identifier>, // required
        "step_sound": <sound identifier>, // required
        "place_sound": <sound identifier>, // required
        "hit_sound": <sound identifier>, // required
        "fall_sound": <sound identifier>, // required
    },
    "hanging_sign_sound_type": { // optional, defaults to hanging sign
        "volume": <float>, // optional, defaults to 1.0
        "pitch": <float>, // optional, defaults to 1.0
        "break_sound": <sound identifier>, // required
        "step_sound": <sound identifier>, // required
        "place_sound": <sound identifier>, // required
        "hit_sound": <sound identifier>, // required
        "fall_sound": <sound identifier>, // required
    },
    "fence_gate_close": <sound identifier>, // optional, defaults to "minecraft:block.fence_gate.close"
    "fence_gate_open": <sound identifier>, // optional, defaults to "minecraft:block.fence_gate.open"
}
```