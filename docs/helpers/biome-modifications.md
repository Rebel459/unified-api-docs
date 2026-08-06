# Biome Modifications

**Class: `UnifiedHelpers / BIOME_MODIFICATIONS / BiomeModificationContext`**

A complete biome modification API which allows for
- adding / removing features & carvers
- changing biome effects (colors)
- changing biome climate
- changing environment attributes
- adding / removing mob spawns

Basically, it's a multiloader equivalent of Fabric's biome modification API, so there's quite a lot here.

::: warning
`UnifiedHelpers.BIOME_MODIFICATIONS` must be used in your registries init, not your common init, in order to comply with the NeoForge loading order.
:::

### Methods
```
public final class BiomeModificationContext {
    private final Worldgen worldgen;
    private final Effects effects;
    private final Climate climate;
    private final EnvironmentAttributes environmentAttributes;
    private final MobSpawns mobSpawns;

    public BiomeModificationContext(Worldgen worldgen, Effects effects, Climate climate, EnvironmentAttributes environmentAttributes, MobSpawns mobSpawns) {
        this.worldgen = worldgen;
        this.effects = effects;
        this.climate = climate;
        this.environmentAttributes = environmentAttributes;
        this.mobSpawns = mobSpawns;
    }

    public Worldgen getFeatures() {
        return worldgen;
    }

    public Effects getEffects() {
        return effects;
    }

    public Climate getClimate() {
        return climate;
    }

    public EnvironmentAttributes getEnvironmentAttributes() {
        return environmentAttributes;
    }

    public MobSpawns getMobSpawns() {
        return mobSpawns;
    }

    public interface Worldgen {
        void addFeature(ResourceKey<PlacedFeature> feature, GenerationStep.Decoration step);
        void removeFeature(ResourceKey<PlacedFeature> feature, GenerationStep.Decoration step);
        void addCarver(ResourceKey<ConfiguredWorldCarver<?>> carverKey);
        void removeCarver(ResourceKey<ConfiguredWorldCarver<?>> carverKey);
    }

    public interface Effects {
        void setWaterColor(int color);
        void setFoliageColor(int color);
        void setDryFoliageColor(int color);
        void setGrassColor(int color);
    }

    public interface Climate {
        void setTemperature(float temperature);
        void setDownfall(float downfall);
        void setPrecipitation(boolean hasPrecipitation);
    }

    public interface EnvironmentAttributes {
        <Value> void set(EnvironmentAttribute<Value> attribute, Value value);
    }

    public interface MobSpawns {
        void addSpawn(MobSpawnSettings.SpawnerData data, int weight);
        void removeSpawn(EntityType<?> entityType);

        void addCharge(EntityType<?> entityType, double charge, double energyBudget);
        void removeCharge(EntityType<?> entityType);
    }
}

public interface BiomeModifications {

    void register(ResourceKey<Biome> biome, Consumer<BiomeModificationContext> context);
    void register(List<ResourceKey<Biome>> biomes, Consumer<BiomeModificationContext> context);
    void register(TagKey<Biome> biome, Consumer<BiomeModificationContext> context);
}
```

### Example

```
UnifiedHelpers.BIOME_MODIFICATIONS.register(BiomeTags.IS_JUNGLE, context -> {
    context.getEffects().setWaterColor(2001635);
    context.getEnvironmentAttributes().set(EnvironmentAttributes.NETHER_PORTAL_SPAWNS_PIGLINS, false);
    context.getFeatures().addFeature(VegetationPlacements.BIRCH_TALL, GenerationStep.Decoration.VEGETAL_DECORATION);
});
```