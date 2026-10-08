### Creative Entries

*Type: Asset | Location: assets/<namespace>/unified/creative-entries*

Allows you to add items to any creative tab.

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
"tab": <creative tab identifier>
```

The creative tab to target. The vanilla ones are [found here](https://minecraft.wiki/w/Creative_inventory#Data_values)

```json5
"insertion": <string>, // can be "insert", "insert_before" or "insert_after"
"target": <item identifier> // required for insert_before or insert_after, ignored by insert
```

The type of insertion

```json5
"items": <item identifier>

"items": {
    "id": <item identifier>,
    "count": <int>, // range 1-99,
    "components": {<component identifier>: <value>, ...} // https://minecraft.wiki/w/Data_component_format
}

"items": [
    <item identifier>,
    {
        "id": <item identifier>,
        "count": <int>, // range 1-99,
        "components": {<component identifier>: <value>, ...} // optional, https://minecraft.wiki/w/Data_component_format
    }
]
```

The items to be added to the tab (after the target if applicable), in order of appearance.