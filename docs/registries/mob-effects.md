# Mob Effects

**Class: `UnifiedRegistries.MobEffects`**

Allows you to register custom mob effects.

### Methods

```
Holder<MobEffect> register(String path, MobEffect effect);
```

### Example

```
public static UnifiedRegistries.MobEffects EFFECTS = UnifiedRegistries.MobEffects.create(MOD_ID);

public static final Supplier<SimpleParticleType> EXAMPLE_EFFECT = EFFECTS.register("example_effect", new MobEffect(MobEffectCategory.NEUTRAL, 0));
```