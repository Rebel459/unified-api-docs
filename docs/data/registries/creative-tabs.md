### Creative Tabs

*Type: Registry | Location: data/<namespace>/unified/registry/creative-tabs*

Used to add all-new Creative Tabs. All fields are optional, though your tab won't do much without any.

**Format**

```json5
"title": <text component> // https://minecraft.wiki/w/Text_component_format
```

Sets the tab's name.

```json5
"icon": <item identifier>

"icon": {
    "id": <item identifier>,
    "count": <int>, // range 1-99,
    "components": {<component identifier>: <value>, ...} // https://minecraft.wiki/w/Data_component_format
}
```

Sets the tab's icon.

```json5
"display_items": [
    <display item identifier>,
    {
        "type": <display item identifier>,
        <display item field>: <value>,
        ...
    }
]
```

Sets the items to be listed in the tab. See [display items](/data/codecs/display-item)

```json5
"alignment": <string> // accepts "left" or "right", defaults to "left"
```

Sets tab alignment.

```json5
"show_title": <boolean> // defaults to true
```

Whether to show the tab's title.

```json5
"can_scroll": <boolean> // defaults to true
```

Whether the scroll bar should appear.

```json5
"background_texture": <texture identifier> // defaults to "minecraft:textures/gui/container/creative_inventory/tab_items.png"
```

Sets a custom texture to be used by the tab.

```json5
"row": <string> // accepts "top" or "bottom", defaults to "top"
```

Sets whether the tab appears on the top or bottom row.

```json5
"column": <integer> // defaults to 0, must be at least 0
```

Sets the column of the tab.