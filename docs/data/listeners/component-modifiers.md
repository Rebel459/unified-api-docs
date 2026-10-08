### Component Modifiers

*Type: Data | Location: `data/<namespace>/unified/component-modifiers`*

Used to change the default components on the specified items.

```json5
{
    // format code goes here
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

The items to receive component modifications. Uses an [item predicate](/data/codecs/item-predicate)

```json5
"components": {<component identifier>: <value>, ...} // https://minecraft.wiki/w/Data_component_format
```

The component values to be applied. Uses the vanilla [data component format](https://minecraft.wiki/w/Data_component_format)