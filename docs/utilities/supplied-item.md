# Supplied Item

**Class: `SuppliedItem / SuppliedItemImpl`**

Implements `Holder<Item>`, `Supplier<Item>`, `ItemLike` and `SuppliedItemInterface`.

Used when registering items, `SuppliedItem` allows you to easily access any methods provided by the above interfaces, and have code requiring the above interface accept the item provided directly, rather than being forced to do `ModItems.EXAMPLE_ITEM.get()...` every time.

Also includes `SuppliedItemInterface`, which provides `ItemStackTemplate getTemplate()` and `ItemStack getDefaultInstance`.

### Full Interface Implementation

```
@Override
public Item value() {
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
public boolean is(ResourceKey<Item> resourceKey) {
    return holder.is(resourceKey);
}

@Override
public boolean is(Predicate<ResourceKey<Item>> predicate) {
    return holder.is(predicate);
}

@Override
public boolean is(TagKey<Item> tagKey) {
    return holder.is(tagKey);
}

@Override
public boolean is(Holder<Item> holder) {
    return this.holder == holder;
}

@Override
public Stream<TagKey<Item>> tags() {
    return holder.tags();
}

@Override
public DataComponentMap components() {
    return holder.components();
}

@Override
public Either<ResourceKey<Item>, Item> unwrap() {
    return holder.unwrap();
}

@Override
public Optional<ResourceKey<Item>> unwrapKey() {
    return holder.unwrapKey();
}

@Override
public Kind kind() {
    return holder.kind();
}

@Override
public boolean canSerializeIn(HolderOwner<Item> holderOwner) {
    return holder.canSerializeIn(holderOwner);
}

@Override
public Item asItem() {
    return holder.value().asItem();
}

@Override
public ItemStack getDefaultInstance() {
    return holder.value().getDefaultInstance();
}

@Override
public ItemStackTemplate getTemplate() {
    return new ItemStackTemplate(holder.value());
}

@Override
public Item get() {
    return holder.value();
}

@Override
public boolean test(Holder<Item> holder) {
    return this.holder.is(holder);
}
```