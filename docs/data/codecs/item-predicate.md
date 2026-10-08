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

### `unified:components`

```json5
{
  "type": "unified:components",
  "components": {<identifier>: <value>}
}
```

### `unified:items`

```json5
{
  "type": "unified:items",
  "items": "#<identifier>"
}
```

```json5
{
  "type": "unified:items",
  "items": <identifier>
}
```

```json5
{
  "type": "unified:items",
  "items": [<identifier>]
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

