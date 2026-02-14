# Platform

**Class: `UnifiedHelpers.Platform`**

Loader-agnostic way to check the current mod loader and loaded mods.

### Methods
```
Platform getPlatform();

boolean isModLoaded(String modId);
```

### Example

```
var platform = UnifiedHelpers.Platform.get()
if (platform.getPlatform() == Platform.FABRIC && platform.isModLoaded("mod_name")) {
    // run your code here
}
```