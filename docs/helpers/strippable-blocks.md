# Strippable Blocks

**Class: `UnifiedHelpers.StrippableBlocks`**

Provides a way to setup block stripping behaviour.

### Methods
```
void add(Block original, Block stripped);
```

### Example

```
var strippables = UnifiedHelpers.StrippableBlocks.get()
strippables.add(ModBlocks.LOG, ModBlocks.STRIPPED_LOG)
```