### `minecraft:glow_lichen`

```json5
{
  "type": "minecraft:glow_lichen",
  "value": <int> // range: `0` or greater
}
```

### `minecraft:light_block`

```json5
{
  "type": "minecraft:light_block"
}
```

### `minecraft:respawn_anchor`

```json5
{
  "type": "minecraft:respawn_anchor",
  "value": <int> // range: `0` or greater
}
```

### `minecraft:sea_pickle`

```json5
{
  "type": "minecraft:sea_pickle"
}
```

### `minecraft:simple`

```json5
{
  "type": "minecraft:simple",
  "value": <int> // range: `0` or greater
}
```

### `minecraft:when_lit`

```json5
{
  "type": "minecraft:when_lit",
  "value": <int> // range: `0` or greater
}
```

### `unified:conditional`

```json5
{
  "type": "unified:conditional",
  "predicate": <block predicate codec>,
  "if_true": <light emission codec>,
  "if_false": <light emission codec>
}
```

