# Tooltips

**Class: `UnifiedClientHelpers / ClientHelpersImpl.Tooltips`**

Used to bind a common tooltip class to its respective client tooltip.

### Methods
```
<T extends TooltipComponent> void bind(Class<T> type, Function<T, ClientTooltipComponent> factory);
```

### Example

```
UnifiedClientHelpers.Tooltips.get().bind(ExampleTooltip.class, tooltip -> new ClientExampleTooltip(tooltip.getInt()));
```