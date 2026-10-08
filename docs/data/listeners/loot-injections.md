### Loot Injections

*Type: Data | Location: `data/<namespace>/unified/loot-injections`*

Used to both add new loot table pools and modify existing ones.

```json5
{
    // format code goes here
}
```

**Format**

```json5
"target": <loot table identifier>
```

The loot table to change.

```json5
"pools": [<loot table>] // https://minecraft.wiki/w/Loot_table
```

A list of [vanilla-formatted loot tables](https://minecraft.wiki/w/Loot_table) to append

```json5
"modifiers": [
    {
        "items": <item tag identifier>,
        "type": <string>, // accepts "insert", "replace" or "remove"
        "loot": {<loot table entry>} // required by "insert" and "replace", ignored by "remove", https://minecraft.wiki/w/Loot_table#Entry
    },
    {
        "items": [<item identifier>],
        "type": <string>, // accepts "insert", "replace" or "remove"
        "loot": {<loot table entry>} // required by "insert" and "replace", ignored by "remove", https://minecraft.wiki/w/Loot_table#Entry
    }
]
```

A list of loot modifiers to apply whenever a relevant item is found in a pool.

"items" specifies the list of items to be targeted.

"type" determines whether to add a new loot entry, replace the target item's entry or remove it.

"loot" is a singular [vanilla loot table entry](https://minecraft.wiki/w/Loot_table#Entry)