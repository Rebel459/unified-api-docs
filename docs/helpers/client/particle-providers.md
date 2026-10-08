# Particle Providers

**Class: `UnifiedClientHelpers / PARTICLE_PROVIDERS`**

Used to provide a registered Particle Type, registerable via [Deferred Registry](/registries/unified-registries) with a sprite sheet / particle provider.

### Methods
```
<T extends ParticleOptions> void add(Supplier<? extends ParticleType<T> type, ParticleResources.SpriteParticleRegistration<T> sprite);
```

### Example

```
UnifiedClientHelpers.PARTICLE_PROVIDERS.add(EXAMPLE_PARTICLE.get(), FallingLeavesParticle.CherryProvider::new);
```
