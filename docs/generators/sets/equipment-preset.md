# Equipment Preset

**Class: `EquipmentPreset`**

**Set: [Equipment Set](/generators/sets/equipment-set)**

### Included Presets

`EquipmentPreset.DEFAULT`

Similar to Netherite-tier equipment, with no fire resistance, knockback resistance and the generic equip sound.

`EquipmentPreset.WOOD`

Based on the wooden tier of tools.

`EquipmentPreset.LEATHER`

Based on the leather tier of armor.

`EquipmentPreset.STONE`

Based on the stone tier of tools.

`EquipmentPreset.COPPER`

Based on the copper tier of tools and armor.

`EquipmentPreset.CHAINMAIL`

Based on the chainmail tier of armor.

`EquipmentPreset.IRON`

Based on the iron tier of tools and armor.

`EquipmentPreset.GOLD`

Based on the gold tier of tools and armor.

`EquipmentPreset.DIAMOND`

Based on the diamond tier of tools and armor.

`EquipmentPreset.NETHERITE`

Based on the netherite tier of tools and armor.

### Creation Methods

`.create()`

Allows you to build an EquipmentPreset from default settings.

`.createFrom(EquipmentPreset preset)`

Allows you to build an EquipmentPreset based off of an existing preset.

`.createFrom(ToolMaterial material)`

Allows you to build a EquipmentPreset based off of a `ToolMaterial`.

`.createFrom(ArmorMaterial material)`

Allows you to build a EquipmentPreset based off of an `ArmorMaterial`.

`.createFrom(ToolMaterial toolMaterial, ArmorMaterial armorMaterial)`

Allows you to build a EquipmentPreset based off of a combined `ToolMaterial` and `ArmorMaterial`.