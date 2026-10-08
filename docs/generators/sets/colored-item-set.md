# Colored Item Set

**Classes: `ColoredItemSet / UnifiedRegistries.Items.Builders`**

**Builder Method: `coloredItemSet(String name, ColoredItemPreset preset)`**

**Preset: [Colored Item Preset](/generators/sets/colored-item-preset)**

The Colored Item Set builder registers a set of items in all 16 colors. This set is basic, but extremely flexible.

It can additionally be bound to a `ColoredBlockSet` that was originally registered without any items.

### Builder Methods

Methods used when building the Set.

`creativeInventoryPlacement(ResourceKey<CreativeModeTab> firstTab, Supplier<? extends ItemLike> precedingFirstTabItem)`

`creativeInventoryPlacement(ResourceKey<CreativeModeTab> firstTab, Supplier<? extends ItemLike> precedingFirstTabItem, ResourceKey<CreativeModeTab> secondTab, Supplier<? extends ItemLike> precedingSecondTabItem)`

Used to add items to the creative inventory. You can specify either one tab + preceding item, or two.

`type(Function<DyeColor, ExtensibleCodec.Entry<Function<Item.Properties, Item>>> type)`

Sets the item type (eg `VanillaItemCodecs.ITEM.create()`).

`builder(BiConsumer<DyeColor, ItemGenerator.Builder> builder)`

Sets the full builder to be used - including properties, assets, data etc.

`dyeRecipe(QuadConsumer<Item, List<SuppliedBlock>, Item, RecipeProvider> recipe)`

Lets you add recipes for each item, with the `QuadConsumer` providing everything you need to make all dye-related recipes.

`build()`

Must be used when finishing the set, to return either a ColoredItemSet or ColoredItemPreset.

### Object Methods

Methods which can be called after creating the set. Note that for brevity, methods for retrieving individual supplied objects, such as `getWhite`, will not be listed here.

`List<SuppliedItem> getRegisteredItems()`

Returns a list of all registered items.

`DyeColor getDyeFromItem(SuppliedItem item)`

Gets the dye color corresponding to the specified item. Make sure you only test against a item from the same `ColoredItemSet`.

`DyeColor getItemFromDye(DyeColor color)`

Gets the item corresponding to the dye color.

`Settings getSettings()`

Allows access to the colored item set's non-static `ColoredItemSet.Settings`. This provides access to more methods which allow you to check any relevant property set during the builder stage.

### Example

```
public static UnifiedRegistries.Items ITEMS = UnifiedRegistries.Items.create(ModName.MOD_ID);
public static UnifiedRegistries.Items.Builders ITEM_BUILDERS = ITEMS.builders();

public static final ColoredItemSet BEDS = ITEM_BUILDERS.coloredItemSet("bed", ColoredItemPreset.WOOL)
        .creativeInventoryPlacement(() -> Blocks.WOOL_CARPET.pink())
        .function(BedItem::new)
        .createForBlocks(ModBlocks.BEDS)
        .build();
```