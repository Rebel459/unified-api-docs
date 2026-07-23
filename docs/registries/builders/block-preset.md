# Block Preset

**Class: `BlockPreset`**

**Set: [Block Set](/registries/builders/block-set)**

### Included Presets

`BlockPreset.DEFAULT`

Uses all default blockset settings, which includes the base block, stairs, slab and wall. Destroy time is set to 1.5F and explosion resistance to 6F.

`BlockPreset.BASIC`

Just includes the base block, stairs and slab. Uses default destroy time and explosion resistance.

`BlockPreset.LEGACY`

Includes the base block, stairs, slab (legacy) and wall. The destroy time is set to 2F.

**Vanilla**

The following presets are accurate recreations of their corresponding vanilla block sets, and thus will not be individually explained.

`BlockPreset.STONE`

`BlockPreset.STONE_BRICKS`

`BlockPreset.COBBLED_DEEPSLATE`

`BlockPreset.POLISHED_DEEPSLATE`

`BlockPreset.DEEPSLATE_BRICKS`

`BlockPreset.DEEPSLATE_TILES`

`BlockPreset.TUFF`

`BlockPreset.POLISHED_TUFF`

`BlockPreset.TUFF_BRICKS`

`BlockPreset.MUD_BRICKS`

`BlockPreset.RESIN_BRICKS`

`BlockPreset.SANDSTONE`

`BlockPreset.NETHER_BRICKS`

`BlockPreset.POLISHED_BLACKSTONE`

`BlockPreset.END_STONE_BRICKS`

`BlockPreset.PURPUR`

### Creation Methods

`.create()`

Allows you to build a BlockPreset from default settings.

`.createFrom(BlockPreset preset)`

Allows you to build a BlockPreset based off of an existing preset.

`.createFrom(BlockSetType blockSetType)`

Allows you to build a BlockPreset based off of a vanilla `BlockSetType`.