### `minecraft:process_above`

```json5
{
  "type": "minecraft:process_above"
}
```

### `minecraft:process_self`

```json5
{
  "type": "minecraft:process_self"
}
```

### `unified:conditional`

```json5
{
  "type": "unified:conditional",
  "predicate": <state predicate codec>,
  "if_true": <post process codec>,
  "if_false": <post process codec>
}
```

### `unified:offset`

```json5
{
  "type": "unified:offset",
  "direction": <string>,
  "distance": <int> // optional, defaults to `1`, range: `1` or greater
}
```

<details>
<summary>Values</summary>

- `direction`: `down`, `east`, `north`, `south`, `up`, `west`

</details>

