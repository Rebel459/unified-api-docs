# Block Preset

**Class: `BlockPreset`**

**Set: [Block Set](/registries/builders/block-set)**

### Included Presets

`BlockPreset.DEFAULT`

Uses all default blockset settings, which includes the base block, stairs, slab and wall.

`BlockPreset.BASIC`

Just includes the base block, stairs and slab.

`BlockPreset.CRACKED`

Includes the base block, stairs, slab, wall and cracked block.

`BlockPreset.CHISELED`

Includes the base block, stairs, slab, wall and chiseled block.

`BlockPreset.STONE`

Based on the vanilla Stone blocks, this preset includes the base block, stairs, slab, button and pressure plate.

`BlockPreset.POLISHED_BLACKSTONE`

Based on the vanilla Polished Blackstone blocks, this preset includes the base block, stairs, slab, wall, button, pressure plate and chiseled block.

`BlockPreset.NETHER_BRICKS`

Based on the vanilla Nether Bricks, this preset includes the base block, stairs, slab, wall, cracked block, fence and chiseled block.

### Creation Methods

`.create()`

Allows you to build a BlockPreset from default settings.

`.createFrom(BlockPreset preset)`

Allows you to build a BlockPreset based off of an existing preset.

`.createFrom(BlockSetType blockSetType)`

Allows you to build a BlockPreset based off of a vanilla `BlockSetType`.