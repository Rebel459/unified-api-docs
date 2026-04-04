# Legacy Baby Armor

**Class: `UnifiedClientHelpers / LegacyBabyArmor`**

Can be used to add EquipmentAsset resource keys to a list within which provided resource keys fall back to pre-26.1 baby armor rendering, allowing for the use of armor sets which lack unique baby textures.

`ResourceKey<EquipmentAsset> asset` provides an Equipment Asset which should use adult textures for baby armor.
`boolean resize` (default: `false`) allows you to enable automatic texture rescaling, so that the pixel density closely matches baby mobs and normal baby armor.
`int cutoff` (default: `50`) is a percentage value. All pixels with transparency values below this will be deleted during rescaling, and all values above will become solid.

### Methods
```
default void add(ResourceKey<EquipmentAsset> asset)
default void add(ResourceKey<EquipmentAsset> asset, boolean resize)
default void add(ResourceKey<EquipmentAsset> asset, boolean resize, int cutoff)
```