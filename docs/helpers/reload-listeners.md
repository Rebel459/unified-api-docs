# Reload Listeners

**Class: `UnifiedHelpers / RELOAD_LISTENERS`**

Used to add and order listeners for server-side resources (custom data-driven content)

::: warning
`UnifiedHelpers.RELOAD_LISTENERS` must be used in your registries init, not your common init.
:::

### Methods
```
void addListener(Identifier id, PreparableReloadListener listener);
void addOrdering(Identifier first, Identifier second);
```

### Example

```
UnifiedHelpers.RELOAD_LISTENERS.addListener(CustomDataLister.ID, new CustomDataListener())
```