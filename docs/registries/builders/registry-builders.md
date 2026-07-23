# Registry Builders

**Classes: `UnifiedRegistries.Items.Builders, UnifiedRegistries.Blocks.Builders`**

To avoid the busywork of registering mass amounts of common registry content individually, you can use Unified API builders to easily create groups of content, such as an entire, fully-functional [Wood Set](/registries/builders/wood-set), with a single static object. First, you access a specific builder using `static Object YOUR_BUILDER = YOUR_REGISTRY.builders()`. Then, accessing `YOUR_BUILDER` will allow you to do various methods, such as `BLOCK_BUILDERS.createWoodSet([method params here])`.

All builder set creation methods will return a specific Set class, which allows you to access all content registered by the builder, as well as many relevant other settings you've previously set that may be of use.

Importantly, creating any Set will require the use of the Set's corresponding Preset (such as WoodPreset for WoodSet). Presets are created from an identical builder and establish defaults that you build upon when creating a new Set. You can even create your own, as every Preset class contains a simple `create` method to expose the Preset builder, which is otherwise identical to the typical regular builder. Built-in Preset classes contain equivalents for all relevant vanilla content. 

This combination of Sets and Presets ensures flexible creation of builder content, with consistent naming schemes and builder methods across each Set type.

### Example Set

The below example shows all the code required to make a fully-functional woodset, including logs, planks, leaves, saplings and more, with correct components, stripping functionality and everything else you'd otherwise have to do manually and per-block.

```
public static UnifiedRegistries.Blocks BLOCKS = UnifiedRegistries.Blocks.create(ModName.MOD_ID);
public static UnifiedRegistries.Blocks.Builders BLOCK_BUILDERS = BLOCKS.builders();

public static final WoodSet PITH = BLOCK_BUILDERS.woodSet("pith", WoodPreset.DEFAULT, MapColor.COLOR_BROWN, MapColor.COLOR_BROWN)
        .logName("strand")
        .woodName("sheath")
        .createLeaves(properties -> new UntintedParticleLeavesBlock(
                0.01F,
                LacunaParticleTypes.PITH_LEAVES.get(),
                properties
        ), MapColor.COLOR_BROWN)
        .createSapling(properties -> new SaplingBlock(
                new TreeGrower(
                        "pith",
                        Optional.of(LacunaConfiguredFeatures.PITH_TREE),
                        Optional.empty(),
                        Optional.empty()
                ),
                properties), MapColor.COLOR_BROWN)
        .creativeInventoryPlacement(() -> Blocks.WARPED_BUTTON, () -> Blocks.WARPED_FUNGUS, () -> Blocks.WARPED_SHELF, () -> Blocks.WARPED_HANGING_SIGN, () -> Items.SPRUCE_BOAT)
        .build();
```

### Example Preset

```
public static final WoodPreset BAMBOO = create()
        .logName("block")
        .hasWood(false)
        .hasMosaic(true)
        .setBoats(WoodSet.Boats.RAFTS)
        .buttonSounds(() -> SoundEvents.BAMBOO_WOOD_BUTTON_CLICK_ON, () -> SoundEvents.BAMBOO_WOOD_BUTTON_CLICK_OFF)
        .pressurePlateSounds(() -> SoundEvents.BAMBOO_WOOD_PRESSURE_PLATE_CLICK_ON, () -> SoundEvents.BAMBOO_WOOD_PRESSURE_PLATE_CLICK_OFF)
        .trapdoorSounds(() -> SoundEvents.BAMBOO_WOOD_TRAPDOOR_OPEN, () -> SoundEvents.BAMBOO_WOOD_TRAPDOOR_CLOSE)
        .doorSounds(() -> SoundEvents.BAMBOO_WOOD_DOOR_OPEN, () -> SoundEvents.BAMBOO_WOOD_DOOR_CLOSE)
        .fenceGateSounds(() -> SoundEvents.BAMBOO_WOOD_FENCE_GATE_OPEN, () -> SoundEvents.BAMBOO_WOOD_FENCE_GATE_CLOSE)
        .hangingSignSoundType(() -> SoundType.BAMBOO_WOOD_HANGING_SIGN)
        .woodSoundType(() -> SoundType.BAMBOO_WOOD)
        .build();
```