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
if (UnifiedPlatform.get().getLoader() == LoaderType.FABRIC && UnifiedPlatform.get().isServerSide() && UnifiedPlatform.get().isModLoaded("mod_name")) {
    // run your code here
}
```