# Supplied Block

**Class: `SuppliedBlock`**

Extends `Supplied<Block>` and implements `BlockLike` and `ItemLike`.

Registered blocks provide `SuppliedBlock`, which works much like [Supplied](/registries/supplied), with additional implementations for [BlockLike](/utilities/block-like) and ItemLike.

### Methods

```
public BlockState defaultBlockState() {
    return this.get().defaultBlockState();
}

public ItemStackTemplate defaultTemplate() {
    return new ItemStackTemplate(this.asItem());
}

public BlockItemId blockItemId() {
    return this.blockItemId;
}

@Override
public Block asBlock() {
    return this.get();
}

@Override
public @NonNull Item asItem() {
    return Item.BY_BLOCK.getOrDefault(get(), Items.AIR);
}
```