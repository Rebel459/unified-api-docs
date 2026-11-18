# Items

**Class: `UnifiedEvents.Items`**

Various item events. These fire for every item stack, including vanilla items and items that override `use` or `useOn` themselves.

`onUse` and `onUseOn` run before the item's own behaviour and must return an `InteractionResult`. Returning `InteractionResult.PASS` lets the next listener, and then the item itself, handle the interaction. The first listener to return anything else cancels the item's own behaviour, and its result is used as the result of the interaction.

`afterUse` runs once the interaction has finished and receives its result, whether that came from a listener or from the item itself.

### Methods

```
UnifiedEvents.Items.onUse((level, player, hand) -> {
    // your custom behaviour here
    return InteractionResult.PASS;
});
UnifiedEvents.Items.afterUse((level, player, hand, result) -> {
    // your custom behaviour here
});
UnifiedEvents.Items.onUseOn(context -> {
    // your custom behaviour here
    return InteractionResult.PASS;
});
```

### Example

```
UnifiedEvents.Items.onUseOn(context -> {
    if (!context.getItemInHand().is(Items.STICK)) return InteractionResult.PASS;
    if (!context.getLevel().getBlockState(context.getClickedPos()).is(Blocks.BELL)) return InteractionResult.PASS;
    // custom behaviour for using a stick on a bell
    return InteractionResult.SUCCESS;
});
```