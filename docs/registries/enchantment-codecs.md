# Enchantment Codecs

**Class: `UnifiedRegistries.EnchantmentCodecs`**

Allows you to register enchantment codecs.

### Methods

```
void registerProvider(String path, final MapCodec<? extends EnchantmentProvider> codec);
void registerLevelBasedValue(String path, MapCodec<? extends LevelBasedValue> codec);
void registerEntityEffect(String path, final MapCodec<? extends EnchantmentEntityEffect> codec);
void registerValueEffect(String path, final MapCodec<? extends EnchantmentValueEffect> codec);
void registerLocationBasedEffect(String path, final MapCodec<? extends EnchantmentLocationBasedEffect> codec);
```