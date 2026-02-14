# Unified Registries

**Class: `UnifiedClientRegistries`**

Unified Client Registries work much like the common [Unified Registries](/docs/unified-registries), except for content that is specifically client-side.

Whilst these still use Suppliers for NeoForge safety, you do not need to do any extra work when calling these from NeoForge - simply using the regular NeoForge client initialiser will do.

As such, you still need to use `.get()`, but you don't have to worry about separating client registries and behaviour.

```
public static UnifiedClientRegistries.KeyMappings KEY_MAPPINGS = UnifiedClientRegistries.KeyMappings.create(ModName.MOD_ID);

```

::: warning
Make sure to use client registries only on the client-side, otherwise your mod will crash on servers.
:::