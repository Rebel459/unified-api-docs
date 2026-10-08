# Biomes

**Class: `UnifiedEvents.Biomes / BiomeModificationContext`**

A complete biome modification API which allows for
- adding / removing features & carvers
- changing biome effects (colors)
- changing biome climate
- changing environment attributes
- adding / removing mob spawns

Basically, it's a multiloader equivalent of Fabric's biome modification API, so there's quite a lot here.

### Methods

```
UnifiedEvents.Biomes.modify((biome, context) -> {
    // your custom behaviour here
});

UnifiedEvents.Biomes.modifyWithPriority(10, (biome, context) -> {
    // your custom behaviour here
});
```

### Context
```
public abstract class BiomeModificationContext {

    public abstract BiomeModificationContext.Worldgen getFeatures();
    public abstract BiomeModificationContext.Effects getEffects();
    public abstract BiomeModificationContext.Climate getClimate();
    public abstract Attributes getAttributes();
    public abstract Spawns getSpawns();

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

    public interface Attributes {
        <Value> void set(EnvironmentAttribute<Value> attribute, Value value);
        <Value> void modify(EnvironmentAttribute<Value> attribute, UnaryOperator<Value> modifier);
    }

    public interface Spawns {
        void addSpawn(MobSpawnSettings.SpawnerData data, int weight);
        void removeSpawn(EntityType<?> entityType);
        void addCharge(EntityType<?> entityType, double charge, double energyBudget);
        void removeCharge(EntityType<?> entityType);
    }
}
```

### Example

```
UnifiedEvents.Biomes.modify((biome, context) -> {
    if (biome.is(BiomeTags.JUNGLE)) {
        context.getEffects().setWaterColor(2001635);
        context.getAttributes().set(EnvironmentAttributes.NETHER_PORTAL_SPAWNS_PIGLINS, false);
        context.getFeatures().addFeature(VegetationPlacements.BIRCH_TALL, GenerationStep.Decoration.VEGETAL_DECORATION);
    }
});
```