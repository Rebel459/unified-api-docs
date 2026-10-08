### Overview

For mod developers, Unified API uses an extensive code-based JSON-generator system to allow you to create both registry content like blocks, items and entities, alongside behavioural content like biome modifiers, mob variants, creative entries and more far easily than what other libraries would allow.

All generator features are accessed through creating your own `UnifiedData` object through `UnifiedData.create(String modId)`. This allows you to build a data instance (you may have as many as you want!) with custom properties such as changing the default language, enabling auto-naming, adding a load requirement and much more.

Once created, simply reference your data object to access any generator - for example, `ModName.DATA.sets().woodSet(...)`

### Setting up Datagen

All `UnifiedData` content requires you to first bind it to Fabric-side datagen.

```
public final class UnifiedTestModDatagen implements DataGeneratorEntrypoint {
    @Override
    public void onInitializeDataGenerator(FabricDataGenerator generator) {
        FabricUnifiedDatagen.Pack pack = FabricUnifiedDatagen.register(generator);
        `pack.addProvider(...)`
    }
}
```

Once this is done, you've correctly linked Unified API datagen to your mod and are ready to enjoy the convenience of `UnifiedData`.

::: warn
Make sure you use FabricUnifiedDatagen.Pack when calling `addProvider`, and not the one provided by Fabric itself. Furthermore, you should use `TagGenerator` instead of extending Fabric's tag classes to avoid duplication.
:::

### Data Builder

`.namespace(String namespace)`

Allows you to generate content under a different namespace to your mod's id.

`.priority(int value)`

Allows you to set a higher priority for registry content.

For more information, check out the [data overview](/data/overview)

`.requirement(ExtensibleCodec.Entry<Boolean> requirement)`

`.requirement(String path, Supplier<Boolean> value)`

Used to set a load requirement for all content registered under the data instance.

For more information, check out the [data overview](/data/overview)

`.autoName()`

`.autoName(String injectedTranslations)`

Whether registered content should have names automatically generated when not provided.

You can optionally specify a language file which should be appended to it for non-generated translations.

`.language(String language)`

The language to be used by generated names. Defaults to en_us

`.build()`

Finishes the creation of the data object.

### Registry Generators

Block, Item, Entity and Creative Tab generators are explicitly documented in the side panel. However, there are many additional registry generators you can use, which are available when using the API and are behaviourally documented under the [data overview](/data/overview).

::: info
Unlike normal data-driven content, registry content is not reloadable and must be present at runtime. For more information, check out the [registry overview](/registries/overview)
:::

The full list
- `ItemGenerator`
- `BlockGenerator`
- `EntitykGenerator`
- `CreativeTabGenerator`
- `SoundEventGenerator`
- `BlockSetTypeGenerator`
- `WoodTypeGenerator`

### Helper Generators

Helper Generators are not documented under the generator section. This is because they are all self-explanatory code-driven json builders, and their behaviours are already documented under the [data overview](/data/overview)

The full list
- `BiomeModifierGenerator`
- `BlockConversionGenerator`
- `ComponentModifierGenerator`
- `CreativeEntryGenerator`
- `EquipmentAssetGenerator`
- `LootInjectionGenerator`
- `MobVariantGenerator`
- `RecipeGenerator`
- `SimpleBabyArmorGenerator`
- `TagGenerator`

### Set Generators

Set generators allow you to generate a large amount of content json - including all relevent registry and behavioural json, in an instant, and store it as a single referencable object. For example, you could create an entire woodset, with all its functionality, in just a line of code.

All sets are documented here as they are automation builders and not 1:1 code equivalents of existing json documentation.

The full list
- `ColoredBlockSet`
- `ColoredItemSet`
- `EquipmentSet`
- `StoneSet`
- `WoodSet`