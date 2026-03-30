# Packs

**Class: `UnifiedHelpers / HelpersImpl.Packs`**

Allows you to register multiloader resource or data packs.

Note that all packs must be located in common/.../resources/resourcepacks, as Fabric hardcodes the required directory.

Uses [PackType](/misc/pack-type).

### Methods
```
void add(Identifier id, PackType type);
```

### Example

```
UnifiedHelpers.PACKS.add(Identifier.fromNamespaceAndPath(ModName.MOD_ID, "example_datapack"), PackType.REQUIRED_DATA)
UnifiedHelpers.PACKS.add(Identifier.fromNamespaceAndPath(ModName.MOD_ID, "example_resourcepack"), PackType.OPTIONAL_RESOURCES)
```