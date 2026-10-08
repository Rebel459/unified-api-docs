# Supplied Item

**Class: `SuppliedItem`**

Extends `Supplied<Item>` and implements `ItemLike`.

Registered items provide `SuppliedItem`, which works much like [Supplied](/registries/supplied), with additional implementations for ItemLike.

### Methods

```
public ItemStack defaultItemStack() {
    return this.get().getDefaultInstance();
}

public ItemStackTemplate defaultTemplate() {
    return new ItemStackTemplate(this.get());
}

@Override
public Item asItem() {
    return this.get();
}
```