# Platform

**Class: `UnifiedPlatform`**

Loader-agnostic way to check the current mod loader, loaded mods and the mod environment.

### Methods
```
PlatformInfo getPlatform();

EnvInfo getEnvironment();

boolean isModLoaded(String modId);

boolean isDevelopmentInstance();
```

### Example

```
if (UnifiedPlatform.get().getPlatform() == PlatformInfo.FABRIC && UnifiedPlatform.get().getEnvironment() == EnvInfo.SERVER && UnifiedPlatform.get().isModLoaded("mod_name")) {
    // run your code here
}
```