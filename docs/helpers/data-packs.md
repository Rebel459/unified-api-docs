# Data Packs

**Class: `UnifiedHelpers / DATA_PACKS`**

Allows you to register multiloader data packs.

::: warning
All packs must be located in common/.../resources/resourcepacks, as Fabric hardcodes the required directory.
:::

::: warning
Must be called in your registries init in order to be loaded by NeoForge.
:::

### Methods
```
void addRequired(Identifier id);
void addOptional(Identifier id);
```

### Example

```
UnifiedHelpers.DATA_PACKS.addRequired(Identifier.fromNamespaceAndPath(ModName.MOD_ID, "example_datapack"))
```