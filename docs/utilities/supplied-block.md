# Supplied Block

**Class: `SuppliedBlock`**

Extends `Supplied<Block>` and implements `BlockLike` and `ItemLike`.

Registered blocks provide `SuppliedBlock`, which works much like [Supplied](/utilities/supplied), with additional implementations for [BlockLike](utilities/block-like) and ItemLike.

### Methods

```
public BlockState defaultBlockState() {
    return this.get().defaultBlockState();
}

public ItemStackTemplate defaultTemplate() {
    return new ItemStackTemplate(this.asItem());
}

@Override
public Holder<Block> holder() {
    return super.holder();
}

@Override
public Block asBlock() {
    return this.get();
}

@Override
public Item asItem() {
    return this.item != null ? this.item.get() : this.get().asItem();
}

@Override
public Block get() {
    return super.get();
}
```