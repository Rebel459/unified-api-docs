# Reload Listeners

**Class: `UnifiedClientHelpers / RELOAD_LISTENERS`**

Used to add and order listeners for client-side resources (custom resource-driven content)

::: warning
`UnifiedClientHelpers.RELOAD_LISTENERS` must be used in your client's registries init, not your client's common init.
:::

### Methods
```
void addListener(Identifier id, PreparableReloadListener listener);
void addOrdering(Identifier first, Identifier second);
```

### Example

```
UnifiedClientHelpers.RELOAD_LISTENERS.addListener(CustomResourceLister.ID, new CustomResourceListener())
```