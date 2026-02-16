# Platform

**Class: `UnifiedHelpers / HelpersImpl.Platform`**

Loader-agnostic way to check the current mod loader and loaded mods.

### Methods
```
Platform getPlatform();

boolean isModLoaded(String modId);
```

### Example

```
if (UnifiedHelpers.PLATFORM.getPlatform() == Platform.FABRIC && UnifiedHelpers.PLATFORM.isModLoaded("mod_name")) {
    // run your code here
}
```