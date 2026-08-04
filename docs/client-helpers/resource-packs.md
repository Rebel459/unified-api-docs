# Resource Packs

**Class: `UnifiedClientHelpers / RESOURCE_PACKS`**

Allows you to register multiloader resource packs.

::: warning
All packs must be located in common/.../resources/resourcepacks, as Fabric hardcodes the required directory.
:::

::: warning
Must be called in your client registries init in order to be loaded by NeoForge.
:::

### Methods
```
void addRequired(Identifier id);
void addOptional(Identifier id);
```

### Example

```
UnifiedClientHelpers.RESOURCE_PACKS.addOptional(Identifier.fromNamespaceAndPath(ModName.MOD_ID, "example_resourcepack"))
```