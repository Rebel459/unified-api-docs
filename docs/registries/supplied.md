# Supplied

**Class: `public class Supplied<T> implements Supplier<T>`**

A generic class which implements Supplier and stores additional information, used for conveniently accessing most content registered by Unified API.

::: info
Whilst `Supplied` works great for most content, items and blocks have their own dedicated classes - [SuppliedItem](/utilities/supplied-item) and [SuppliedBlock](/utilities/supplied-block) - which include additional methods and implement additional interfaces
:::

### Methods

```
ResourceKey<T> key() -> always safe to access, provides the resource key bound to the object
Identifier id() -> always safe to access, gets the identifier of the object from its key
Holder<T> holder() -> always safe to access, provides the holder of the object
T get() -> should only be accessed after the registration stage, once your common inits are called. Used to access the object directly
```