# Packs

**Class: `UnifiedHelpers.Packs`**

Allows you to register multiloader resource or data packs.

Note that all packs must be located in common/.../resources/resourcepacks, as Fabric hardcodes the required directory.

Uses [PackInfo](/utilities/pack-info).

### Methods
```
void add(Identifier id, PackInfo info);
```

### Example

```
var packs = UnifiedHelpers.Packs.get()
packs.add(Identifier.fromNamespaceAndPath(ModName.MOD_ID, "example_datapack"), PackInfo.REQUIRED_DATA)
packs.add(Identifier.fromNamespaceAndPath(ModName.MOD_ID, "example_resourcepack"), PackInfo.OPTIONAL_RESOURCES)
```