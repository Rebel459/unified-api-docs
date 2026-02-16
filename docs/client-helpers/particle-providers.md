# Particle Providers

**Class: `UnifiedClientHelpers / ClientHelpersImpl.ParticleProviders`**

Used to provide a registered [Particle Type](/registries/particle-types) with a sprite sheet / particle provider.

### Methods
```
<T extends ParticleOptions> void add(Supplier<T> type, ParticleResources.SpriteParticleRegistration<T> sprite);
```

### Example

```
var particleProviders = UnifiedClientHelpers.ParticleProviders.get();
particleProviders.add(EXAMPLE_PARTICLE.get(), FallingLeavesParticle.CherryProvider::new);
```