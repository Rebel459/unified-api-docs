# Simple Baby Armor

**Class: `UnifiedClientHelpers / SIMPLE_BABY_ARMOR`**

::: info
Formerly `LEGACY_BABY_ARMOR` on 26.1
:::

Can be used to add EquipmentAsset resource keys to a list within which provided resource keys fall back to pre-26.1 baby armor rendering, allowing for the use of armor sets which lack unique baby textures.

- `ResourceKey<EquipmentAsset> asset` provides an Equipment Asset which should use adult textures for baby armor.
- `int cutoff` (default: `50`) is a percentage value. All pixels with transparency values below this will be deleted during rescaling, and all values above will become solid.

The `addWithoutDownscale` method (`add(ResourceKey<EquipmentAsset> asset, boolean resize)` on 26.1) allows you to register baby armor without rescaling the pixels (keeping it identical to pre-26.1 baby mob armor).

### Methods
```
default void add(ResourceKey<EquipmentAsset> asset)
default void add(ResourceKey<EquipmentAsset> asset, int cutoff)

default void addWithoutDownscale(ResourceKey<EquipmentAsset> asset)
```