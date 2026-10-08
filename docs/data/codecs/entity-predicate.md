### `minecraft:default`

```json5
{
  "type": "minecraft:default"
}
```

### `minecraft:not_closed_shulker`

```json5
{
  "type": "minecraft:not_closed_shulker"
}
```

### `minecraft:not_extended_piston`

```json5
{
  "type": "minecraft:not_extended_piston"
}
```

### `minecraft:ocelot_or_parrot`

```json5
{
  "type": "minecraft:ocelot_or_parrot"
}
```

### `minecraft:polar_bear`

```json5
{
  "type": "minecraft:polar_bear"
}
```

### `unified:all_of`

```json5
{
  "type": "unified:all_of",
  "predicates": [
    {
      "type": <identifier>
    }
  ]
}
```

### `unified:always`

```json5
{
  "type": "unified:always"
}
```

### `unified:any_of`

```json5
{
  "type": "unified:any_of",
  "predicates": [
    {
      "type": <identifier>
    }
  ]
}
```

### `unified:entity_matches`

```json5
{
  "type": "unified:entity_matches",
  "entities": "#<identifier>"
}
```

```json5
{
  "type": "unified:entity_matches",
  "entities": <identifier>
}
```

```json5
{
  "type": "unified:entity_matches",
  "entities": [<identifier>]
}
```

### `unified:never`

```json5
{
  "type": "unified:never"
}
```

### `unified:not`

```json5
{
  "type": "unified:not",
  "predicate": {
    "type": <identifier>
  }
}
```

