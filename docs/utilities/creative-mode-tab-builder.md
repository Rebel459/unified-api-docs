# Creative Mode Tab Builder

**Class: `CreativeModeTabBuilder`**

Used to build a custom `CreativeModeTab` which can then be registered.

### Builder
```
public CreativeModeTabBuilder title(final Component displayName) {
    this.displayName = displayName;
    return this;
}

public CreativeModeTabBuilder icon(final Supplier<ItemStack> iconGenerator) {
    this.iconGenerator = iconGenerator;
    return this;
}

public CreativeModeTabBuilder displayItems(final CreativeModeTab.DisplayItemsGenerator displayItemsGenerator) {
    this.displayItemsGenerator = displayItemsGenerator;
    return this;
}

public CreativeModeTabBuilder alignedRight() {
    this.alignedRight = true;
    return this;
}

public CreativeModeTabBuilder hideTitle() {
    this.showTitle = false;
    return this;
}

public CreativeModeTabBuilder noScrollBar() {
    this.canScroll = false;
    return this;
}

public CreativeModeTabBuilder backgroundTexture(final Identifier backgroundTexture) {
    this.backgroundTexture = backgroundTexture;
    return this;
}

public CreativeModeTabBuilder row(final CreativeModeTab.Row row) {
    this.row = row;
    return this;
}

public CreativeModeTabBuilder column(final int column) {
    this.column = column;
    return this;
}
```

### Example Usage

```
static UnifiedRegistries.DeferredRegistry<CreativeModeTab> CREATIVE_MODE_TABS = UnifiedRegistries.DeferredRegistry.create(ModConstants.MOD_ID, BuiltInRegistries.CREATIVE_MODE_TAB);

ResourceKey<CreativeModeTab> CUSTOM_TAB = CREATIVE_MODE_TABS.register(
    "tab_name", 
    () -> new CreativeModeTabBuilder()
        .title(Component.literal("Custom Tab"))
        .icon(() -> ModItems.CUSTOM_ITEM.defaultItemStack())
        .displayItems((parameters, output) -> {
            output.accept(ModItems.CUSTOM_ITEM)
            output.accept(ModItems.OTHER_CUSTOM_ITEM)
        })
        .build()
);
```