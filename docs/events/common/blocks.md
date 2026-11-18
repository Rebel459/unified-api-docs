# Blocks

**Class: `UnifiedEvents.Blocks`**

Various block item events. These only fire for block items; see [Items](/events/common/items) for events covering every item.

`onPlace` and `onUseOn` run before the block item's own behaviour and must return an `InteractionResult`. Returning `InteractionResult.PASS` lets the next listener, and then the block item itself, handle the interaction. The first listener to return anything else cancels placement, and its result is used as the result of the interaction.

`afterPlace` runs once placement has finished and receives its result, including when the placement failed or was cancelled by a listener.

### Methods

```
UnifiedEvents.Blocks.onPlace(context -> {
    // your custom behaviour here
    return InteractionResult.PASS;
});
UnifiedEvents.Blocks.afterPlace((context, result) -> {
    // your custom behaviour here
});
UnifiedEvents.Blocks.onUseOn(context -> {
    // your custom behaviour here
    return InteractionResult.PASS;
});
```

### Example

```
UnifiedEvents.Blocks.onPlace(context -> {
    if (context.getLevel().dimension() == Level.NETHER && context.getItemInHand().is(ItemTags.BEDS)) {
        return InteractionResult.FAIL;
    }
    return InteractionResult.PASS;
});
```