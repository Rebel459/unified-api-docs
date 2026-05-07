# Block Like

**Class: `BlockLike`**

An interface implemented by [SuppliedBlock](/utilities/supplied-block) and injected into the vanilla `Block` class.

Works just like `ItemLike`, except for blocks. This allows for methods to accept both vanilla, modded and deferred blocks directly, without the need for converting to a block using methods such as `.get()`.

`default Block asBlock()`