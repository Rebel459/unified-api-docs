# Platform

**Class: `UnifiedHelpers / HelpersImpl.Platform`**

Loader-agnostic way to check the current mod loader and loaded mods.

### Methods
```
PlatformInfo getPlatform();

EnvInfo getEnvironment();

boolean isModLoaded(String modId);
```

### Example

```
if (UnifiedHelpers.PLATFORM.getPlatform() == PlatformInfo.FABRIC && UnifiedHelpers.getEnvironment() == EnvInfo.SERVER && UnifiedHelpers.PLATFORM.isModLoaded("mod_name")) {
    // run your code here
}
```