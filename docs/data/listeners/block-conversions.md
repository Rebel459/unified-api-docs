### Block Conversions

*Type: Data | Location: data/<namespace>/unified/block-conversions*

Block Conversions let you create block-swapping behaviour. For example, waxing copper or stripping logs.

```json5
{
    "entries": [
        {
            // format goes here
        }
    ]
}
```

**Format**

```json5
"predicate": <item predicate>

"predicate": {
    "type": <item predicate identifier>,
    <item predicate field>: <value>,
    ...
}
```

The requirement for the conversion to occur. Uses an [item predicate](/data/codecs/item-predicate)

```json5
"original_block": <block identifier>
```

The block that was interacted with

```json5
"converted_block": <block identifier>
```

The block that the original block should become. Any valid states will be preserved automatically

```json5
"use_context": <use context>

"use_context": {
    "type": <use context identifier>,
    <use context field>: <value>,
    ...
}
```

What should happen when the interaction succeeds. Uses [use context](/data/codecs/use-context)