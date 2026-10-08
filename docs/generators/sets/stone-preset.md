# Block Preset

**Class: `StonePreset`**

**Set: [Stone Set](/generators/sets/stone-set)**

### Included Presets

`StonePreset.DEFAULT`

Uses all default blockset settings, which includes the base block, stairs, slab and wall. Destroy time is set to 1.5F and explosion resistance to 6F.

`StonePreset.BASIC`

Just includes the base block, stairs and slab. Uses default destroy time and explosion resistance.

`StonePreset.LEGACY`

Includes the base block, stairs, slab (legacy) and wall. The destroy time is set to 2F.

**Vanilla**

The following presets are accurate recreations of their corresponding vanilla block sets, and thus will not be individually explained.

`StonePreset.STONE`

`StonePreset.STONE_BRICKS`

`StonePreset.COBBLED_DEEPSLATE`

`StonePreset.POLISHED_DEEPSLATE`

`StonePreset.DEEPSLATE_BRICKS`

`StonePreset.DEEPSLATE_TILES`

`StonePreset.TUFF`

`StonePreset.POLISHED_TUFF`

`StonePreset.TUFF_BRICKS`

`StonePreset.MUD_BRICKS`

`StonePreset.RESIN_BRICKS`

`StonePreset.SANDSTONE`

`StonePreset.NETHER_BRICKS`

`StonePreset.POLISHED_BLACKSTONE`

`StonePreset.END_STONE_BRICKS`

`StonePreset.PURPUR`

`StonePreset.SULFUR`

`StonePreset.POLISHED_SULFUR`

`StonePreset.CINNABAR`

`StonePreset.POLISHED_CINNABAR`

### Creation Methods

`.create()`

Allows you to build a StonePreset from default settings.

`.createFrom(StonePreset preset)`

Allows you to build a StonePreset based off of an existing preset.

`.createFrom(BlockSetType blockSetType)`

Allows you to build a StonePreset based off of a vanilla `BlockSetType`.