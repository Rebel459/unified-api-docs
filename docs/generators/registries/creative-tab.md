### CreativeTabGenerator

Used to create custom creative tabs.

This, and the corresponding JSON, is the only way creative tabs can be added through Unified API.

**Methods**

`Supplied<CreativeModeTab> register`
- used to register a creative tab through a `Consumer<CreativeTabGenerator.Builder>`

**Builder**

`.title(final Component displayName)`

Sets the tab's name.

`icon(final Supplier<ItemStack> iconGenerator)`

Sets the tab's icon.

`displayItems(final CreativeModeTab.DisplayItemsGenerator generator)`

`displayItems(final ExtensibleCodec.Entry<CreativeModeTab.DisplayItemsGenerator> generator)`

Sets the items to be listed in the tab. If you do not provide an extensible codec a simple one will be registered for you, though it is nicer for your users if you do as then they'll be able to see and edit individual entities in datapack json more conveniently.

`displayAllFrom(String modId)`

Adds all items from a given mod id to your creative tab.

`alignedRight()`

Aligns the tab to the right.

`hideTitle()`

Hides the tab's title.

`noScrollBar()`

Removes the tab's scroll bar.

`backgroundTexture(final Identifier backgroundTexture)`

Sets a custom texture to be used by the tab.

`row(final CreativeModeTab.Row row)`

Sets the row of the tab.

`column(final int column)`

Sets the column of the tab.