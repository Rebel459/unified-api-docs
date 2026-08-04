# Unified Instance

**Class: `UnifiedInstance`**

::: info
Formerly `UnifiedPlatform` on 26.1
:::

Loader-agnostic way to check the current mod loader, loaded mods and the mod environment.

### Methods
```
ModLoader getModLoader();

boolean isClientSide();
boolean isServerSide();

boolean isModLoaded(String modId);

boolean isDevelopmentEnvironment();
```

### Example

```
if (UnifiedInstance.getModLoader() == ModLoader.FABRIC && UnifiedInstance.isServerSide() && UnifiedInstance.isModLoaded("mod_name")) {
    // run your code here
}
```