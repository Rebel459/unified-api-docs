# Equipment Set

**Classes: `EquipmentSet / UnifiedRegistries.Items.Builders`**

**Builder Method: `equipmentSet(String name, EquipmentPreset preset)`**

**Preset: [Equipment Preset](/registries/builders/equipment-preset)**

The Equipment Set builder allows you to create an entire set of equipment, including weapons, tools, humanoid armor and animal armor. Everything other than datagen is handled simply by registering the set.

Unlike other sets, there is a somewhat higher level of separation between tools and armor - you can easily have just tools, just armor or both, and method names reflect this.

::: warning
This builder does not create anything by default. You must make sure to use `.createTools` and/or `.createArmor` in order for tools and armor respectively to actually be created.
:::

### Builder Methods

Methods used when building the Set.

`creativeArmorPlacement(Supplier<ItemLike> precedingCombatArmor)`

`creativeArmorPlacement(Supplier<ItemLike> precedingCombatArmor, Supplier<ItemLike> precedingCombatHorseArmor, Supplier<ItemLike> precedingCombatNautilusArmor)`

Used to add armor to the creative inventory. Specifying horse and nautilus preceding items will also ensure that horse and nautilus armor is added to the creative inventory (though you'll have to make sure you've actually chosen to register animal armor!).

`creativeToolPlacement(Supplier<ItemLike> precedingUtilitiesItem, Supplier<ItemLike> precedingCombatSword, Supplier<ItemLike> precedingCombatSpear, Supplier<ItemLike> precedingCombatAxe)`

Used to add tools to the creative inventory.

`setDamageBonus(float damageBonus)`

Sets the damage bonus received by tools (excluding hoes) in the set.

`setMiningSpeed(float miningSpeed)`

Sets the mining speed for tools (excluding swords) in the set.

`setAxeSwingSpeed(float axeSwingSpeed)`

Sets the swing speed of the set's axe.

`setToolDurability(int durability)`

Sets the durability of all tools.

`setIncorrectBlocksForDrops(TagKey<Block> incorrectBlocksForDrops)`

Sets the tag used for the mining tier of tools.

`setSpearProperties(float attackDuration, float damageMultiplier, float delay, float dismountTime, float dismountThreshold, float knockbackTime, float knockbackThreshold, float damageTime, float damageThreshold)`

Sets spear-specific properties. Yep, there's a lot of them.

`setArmorDurabilityFactor(int durabilityFactor)`

Sets the durability factor / multiplier of armor, which is used to calculate each piece's individual durability. This doesn't apply to animal armor.

`setArmorDefense(int helmet, int chestplate, int leggings, int boots)`

`setArmorDefense(int helmet, int chestplate, int leggings, int boots, int animal)`

Sets the defense provided by armor. Animal armor defense can optionally be specified.

`setArmorToughness(float toughness)`

Sets the toughness provided by each piece of armor.

`setKnockbackResistance(float knockbackResistance)`

Sets the knockback resistance provided by each piece of armor.

`setArmorEquipSound(Holder<SoundEvent> equipSound)`

Sets the equip sound of armor.

`setEnchantingPower(int enchantingPower)`

`setEnchantingPower(int tools, int armor)`

Sets the enchanting power of all equipment. You can opt to split tools and armor into separate values if you wish to do so.

`setRepairMaterials(@Nullable TagKey<Item> repairMaterials)`

Sets the repair material tag used by all equipment.

`build()`

Must be used when finishing the set, to return either an EquipmentSet or EquipmentPreset.

**Targets & Groups**

It is important to understand the Target / Group system, which allows you to easily apply any component or attribute (without altering untouched ones) on any item or group of items in the EquipmentSet. All `setComponent` and `setAttribute` methods require the use of one of these classes.

`EquipmentSet.Target` (enum)

```
SWORD,
SPEAR,
AXE,
PICKAXE,
SHOVEL,
HOE,
HELMET,
CHESTPLATE,
LEGGINGS,
BOOTS,
HORSE_ARMOR,
NAUTILUS_ARMOR
```

`EquipmentSet.Group` (class)

```
ALL
TOOLS
TOOLS_NO_SPEAR
ARMOR
HUMANOID_ARMOR
ANIMAL_ARMOR
```

You can also easily create your own Group:

`public static EquipmentSet.Group WEAPONS = new EquipmentSet.Group(Target.SWORD, Target.SPEAR, Target.AXE);`

**EquipmentSet Builder Only**

`createTools()`

Creates tools within the EquipmentSet. This must be done in order to ensure it can also be ommitted in the case of creating an armor-only set.

`createArmor(ResourceKey<EquipmentAsset> armorAsset, boolean hasAnimalArmor)`

Creates armor within the EquipmentSet. Requires you to provide the resource key for the armor's textures, and a boolean to determine whether or not you'd like animal armor.

### Object Methods

Methods which can be called after creating the set. Note that for brevity, methods for retrieving individual supplied objects, such as `getSword`, will not be listed here.

`List<SuppliedItem> getRegisteredItems()`

Returns a list of all registered items.

`boolean hasTools()`

Checks whether tools have been created.

`boolean hasArmor()`

Checks whether armor has been created.

`boolean hasAnimalArmor()`

Checks whether armor has been created with `hasAnimalArmor` set to `true`.

`ToolMaterial getToolMaterial()`

Returns a vanilla `ToolMaterial` created from the set's settings.

`ToolMaterial getArmorMaterial()`

Returns a vanilla `ArmorMaterial` created from the set's settings.

`Settings getSettings()`

Allows access to the woodset's non-static `WoodSet.Settings`. This provides access to more methods which allow you to check any relevant property set during the builder stage.

### Example

```
public static UnifiedRegistries.Items ITEMS = UnifiedRegistries.Items.create(ModName.MOD_ID);
public static UnifiedRegistries.Items.Builders ITEM_BUILDERS = ITEMS.builders();

public static final EquipmentSet IVORY = ITEM_BUILDERS.equipmentSet("ivory", EquipmentPreset.DEFAULT)
        .createTools()
        .createArmor(LacunaEquipmentAssets.IVORY, true)
        .setComponent(EquipmentSet.Group.ALL, LacunaDataComponents.NO_DESPAWN, Unit.INSTANCE)
        .creativeArmorPlacement(() -> Items.NETHERITE_BOOTS, () -> Items.NETHERITE_HORSE_ARMOR, () -> Items.NETHERITE_NAUTILUS_ARMOR)
        .creativeToolPlacement(() -> Items.NETHERITE_HOE, () -> Items.NETHERITE_SWORD, () -> Items.NETHERITE_SPEAR, () -> Items.NETHERITE_AXE)
        .setRepairMaterials(LacunaItemTags.IVORY_REPAIR_MATERIALS)
        .build();
```