# Particle Types

**Class: `UnifiedRegistries.ParticleTypes`**

Allows you to register custom particles.

Note that in order for the particles to appear on the client, you'll still need to provide a sprite sheet using the client-side [Particle Providers](/docs/helpers/client/particle-providers) Helper.

### Methods

```
<T extends ParticleType> Supplier<T> register(String path, ParticleType type);
```

### Example

```
public static UnifiedRegistries.ParticleTypes PARTICLES = UnifiedRegistries.ParticleTypes.create(MOD_ID);

public static final Supplier<SimpleParticleType> EXAMPLE_PARTICLE = PARTICLES.register("example_particle", new SimpleParticleType(false));
```