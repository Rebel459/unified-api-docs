# Supplied Block

**Class: `SuppliedBlock / SuppliedBlockImpl`**

Implements `Holder<Block>`, `Supplier<Block>`, `ItemLike` and `SuppliedBlockInterface`.

Used when registering blocks, `SuppliedBlock` allows you to easily access any methods provided by the above interfaces, and have code requiring the above interface accept the Block provided directly, rather than being forced to do `ModBlocks.EXAMPLE_Block.get()...` every time.

Also includes `SuppliedBlockInterface`, which provides `ItemStackTemplate getTemplate()` and `BlockState defaultBlockState`.

### Full Interface Implementation

```
@Override
public Block value() {
    return holder.value();
}

@Override
public boolean isBound() {
    return holder.isBound();
}

@Override
public boolean areComponentsBound() {
    return holder.areComponentsBound();
}

@Override
public boolean is(Identifier identifier) {
    return holder.is(identifier);
}

@Override
public boolean is(ResourceKey<Block> resourceKey) {
    return holder.is(resourceKey);
}

@Override
public boolean is(Predicate<ResourceKey<Block>> predicate) {
    return holder.is(predicate);
}

@Override
public boolean is(TagKey<Block> tagKey) {
    return holder.is(tagKey);
}

@Override
public boolean is(Holder<Block> holder) {
    return this.holder == holder;
}

@Override
public Stream<TagKey<Block>> tags() {
    return holder.tags();
}

@Override
public DataComponentMap components() {
    return holder.components();
}

@Override
public Either<ResourceKey<Block>, Block> unwrap() {
    return holder.unwrap();
}

@Override
public Optional<ResourceKey<Block>> unwrapKey() {
    return holder.unwrapKey();
}

@Override
public Kind kind() {
    return holder.kind();
}

@Override
public boolean canSerializeIn(HolderOwner<Block> holderOwner) {
    return holder.canSerializeIn(holderOwner);
}

@Override
public Item asItem() {
    return item != null ? item.get() : holder.value().asItem();
}

@Override
public BlockState defaultBlockState() {
    return holder.value().defaultBlockState();
}

@Override
public ItemStackTemplate getTemplate() {
    return new ItemStackTemplate(asItem());
}

@Override
public Block get() {
    return holder.value();
}

@Override
public boolean test(Holder<Block> holder) {
    return this.holder.is(holder);
}
```