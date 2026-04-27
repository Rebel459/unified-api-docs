# Platform

**Class: `UnifiedPlatform`**

Loader-agnostic way to check the current mod loader, loaded mods and the mod environment.

### Methods
```
LoaderType getLoader();

boolean isClientSide();
boolean isServerSide();

boolean isModLoaded(String modId);

boolean isDevelopmentEnvironment();
```

### Example

```
if (UnifiedPlatform.getLoader() == LoaderType.FABRIC && UnifiedPlatform.isServerSide() && UnifiedPlatform.isModLoaded("mod_name")) {
    // run your code here
}
```