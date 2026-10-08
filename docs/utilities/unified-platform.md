# Unified Platform

**Class: `UnifiedPlatform`**

Loader-agnostic way to check the mod environment and other common information.

### Methods
```
ModLoader getModLoader(); // gets the current ModLoader, which is either FABRIC or NEOFORGE

Path getGameDirectory();

boolean isClientSide();
boolean isServerSide();

boolean isModLoaded(String modId);

boolean isDevelopmentEnvironment();

void executeAfter(ResourceKey<? extends Registry<?>> registry, Runnable runnable); // runs code after a specific Unified staged registry has completed
```

### Example

```
if (UnifiedPlatform.getModLoader() == ModLoader.FABRIC && UnifiedPlatform.isServerSide() && UnifiedPlatform.isModLoaded("mod_name")) {
    // run your code here
}
```