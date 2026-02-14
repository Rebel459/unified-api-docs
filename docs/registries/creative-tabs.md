# Creative Tabs

**Class: `UnifiedRegistries.CreativeTabs`**

This class allows you to register custom Creative Tabs. Note that your items are added to the Creative Inventory at a later stage, using the [Creative Entries](/docs/helpers/creative-entries) method.

The tab icon uses a supplier (eg `() -> Items.COAL` for a vanilla item) in order to ensure safe access of modded items during the registry stage.

### Methods

```
ResourceKey<CreativeModeTab> registerTab(String path, Supplier<? extends ItemLike> icon);
```

### Example

```
public static UnifiedRegistries.CreativeTabs CREATIVE_TABS = UnifiedRegistries.CreativeTabs.create(MOD_ID);

public static final ResourceKey<CreativeModeTab> EXAMPLE_TAB = CREATIVE_TABS.register("example_tab", EXAMPLE_BLOCK); // note that the icon uses a Supplier for safe registering
```