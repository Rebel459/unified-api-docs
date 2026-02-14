# Unified Client Events

**Class: `UnifiedClientEvents`**

Unified Client Events work similarly to common [Unified Events](/docs/unified-events), with the obvious exception of having to run only on the client.

The general syntax for Unified API client events is pretty simple:

```
UnifiedClientEvents.EndTick.access(minecraft -> {
    // your custom behaviour here
});
```

::: warning
Make sure to use client events only on the client-side, otherwise your mod will crash on servers.
:::