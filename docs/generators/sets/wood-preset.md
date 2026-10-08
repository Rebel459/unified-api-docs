# Wood Preset

**Class: `WoodPreset`**

**Set: [Wood Set](/generators/sets/wood-set)**

### Included Presets

`WoodPreset.DEFAULT`

Uses all default woodset settings, equivalent to a regular Overworld woodset like Oak.

`WoodPreset.NETHER`

Mimics Nether woodset behaviour, including unburnable wood, nether wood sounds, no boats and different log + wood names.

`WoodPreset.BAMBOO`

Mimics Bamboo woodset behaviour, including bamboo sounds, Bamboo + Stripped Bamboo blocks and mosaic.

`WoodPreset.CHERRY`

Same as the DEFAULT preset, with cherry sounds.

`WoodPreset.PALE_OAK`

Same as the DEFAULT preset, with pale oak sounds.

`WoodPreset.MANGROVE`

Same as the DEFAULT preset, with mangrove sounds and "propagule" as the default sapling name.

`WoodPreset.POPLAR`

Same as the DEFAULT preset, with poplar leaf sounds.

### Creation Methods

`.create()`

Allows you to build a WoodPreset from default settings.

`.createFrom(WoodPreset preset)`

Allows you to build a WoodPreset based off of an existing preset.

`.createFrom(WoodType woodType)`

Allows you to build a WoodPreset based off of a vanilla `WoodType`.