# Unified Attachments

**Class: `UnifiedAttachments`**

A fully-fledged multiloader-friendly data attachment api. Call the static `.builder(Identifier id, Supplier<T> defaultValue)` on one of the below interfaces to create a new builder.

Attachment Types
- `UnifiedAttachments.BlockEntity`
- `UnifiedAttachments.Chunk`
- `UnifiedAttachments.Entity`
- `UnifiedAttachments.Level`

### Object Methods
```
T get(H holder);
boolean has(H holder);
@Nullable T set(H holder, T value);
@Nullable T remove(H holder);
@Nullable T modify(H holder, UnaryOperator<T> modifier);
```

### Builder Methods

```
B persistent(MapCodec<T> codec)

B synced(StreamCodec<? super RegistryFriendlyByteBuf, T> codec)
B synced(StreamCodec<? super RegistryFriendlyByteBuf, T> codec, BiPredicate<H, ServerPlayer> predicate)

Builder<T> copyOnDeath() // UnifiedAttachments.Entity
```