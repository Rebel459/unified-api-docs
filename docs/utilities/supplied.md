# Supplied

**Class: `public class Supplied<T> extends ResourceKey<T> implements Supplier<T>`**

A generic class which extends ResourceKey and implements Supplier, used for conveniently accessing most content registered by Unified API.

Direct usages of `Supplied` provide a full `ResourceKey`, which is always safe to access and convenient to use in many methods and checks against other registered content, whilst content can be accessed after registration through either `.get()` or `.holder()` depending on your needs.

::: info
Whilst `Supplied` works great for most content, items and blocks have their own dedicated classes - [SuppliedItem](/utilities/supplied-item) and [SuppliedBlock](/utilities/supplied-block) - which include additional methods and implement additional interfaces
:::

### Methods

```
ResourceKey... -> anything accessible in typical resource keys
Holder<T> holder() -> provides a current lookup of the registered content's holder
T get() -> implements Supplier
```