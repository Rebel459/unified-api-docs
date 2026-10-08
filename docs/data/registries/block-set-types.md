### Block Set Types

*Type: Registry | Location: data/<namespace>/unified/registry/block-set-types*

Used to register custom Block Set Types, which are required by certain blocks.

All fields are optional, meaning that a basic block set type can literally just be `{}`.

**Format**

```json5
{
    "can_open_by_hand": <boolean>, // defaults to true
    "can_open_by_wind_charge": <boolean>, // defaults to true
    "can_button_be_activated_by_arrows": <boolean>, // defaults to true
    "pressure_plate_sensitivity": <string>, // can be "everything" or "mobs", defaults to "everything"
    "sound_type": {
        "volume": <float>, // optional, defaults to 1.0
        "pitch": <float>, // optional, defaults to 1.0
        "break_sound": <sound identifier>, // required
        "step_sound": <sound identifier>, // required
        "place_sound": <sound identifier>, // required
        "hit_sound": <sound identifier>, // required
        "fall_sound": <sound identifier>, // required
    },
    "door_close": <sound identifier>, // defaults to corresponding wooden sound
    "door_open": <sound identifier>, // defaults to corresponding wooden sound
    "trapdoor_close": <sound identifier>, // defaults to corresponding wooden sound
    "trapdoor_open": <sound identifier>, // defaults to corresponding wooden sound
    "pressure_plate_click_off": <sound identifier>, // defaults to corresponding wooden sound
    "pressure_plate_click_on": <sound identifier>, // defaults to corresponding wooden sound
    "button_click_off": <sound identifier>, // defaults to corresponding wooden sound
    "button_click_on": <sound identifier> // defaults to corresponding wooden sound
}
```