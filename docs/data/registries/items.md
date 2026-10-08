### Items

*Type: Registry | Location: data/<namespace>/unified/registry/items*

Used to register new items. There are two types of items - items and block items.

**Items**

```json5
{
    "type": <item type identifier>, // must not be a block item type
    <item type field>: <value>,
    "properties" {
        // item properties go here, see https://minecraft.wiki/w/Data_component_format
    }
}
```

View the list of [supported item types](/data/codecs/item). Properties are the same as [vanilla item properties](https://minecraft.wiki/w/Data_component_format).

**Block Items**

```json5
{
    "type": <item type identifier>, // must be a block item type
    "block": <block identifier>,
    <item type field>: <value>,
    "properties" {
        // item properties go here, see https://minecraft.wiki/w/Data_component_format
    }
}
```

Some [item types](/data/codecs/item) may specifically be block items. These have an additional block field, and must be used for item counterparts to blocks.