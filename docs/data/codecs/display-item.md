### `unified:display_from_list`

```json5
{
  "type": "unified:display_from_list",
  "items": [
    <identifier>,
    {
      "id": <identifier>,
      "count": <int>, // optional, defaults to `1`, range: `1` to `99`
      "components": {<identifier>: <value>} // optional, defaults to `{}`
    },
    {
      "item": <identifier>,
      "visibility": <string> // optional, defaults to `"parent_and_search_tabs"`
    },
    {
      "item": {
        "id": <identifier>,
        "count": <int>, // optional, defaults to `1`, range: `1` to `99`
        "components": {<identifier>: <value>} // optional, defaults to `{}`
      },
      "visibility": <string> // optional, defaults to `"parent_and_search_tabs"`
    }
  ]
}
```

<details>
<summary>Values</summary>

- `items.visibility`: `parent_and_search_tabs`, `parent_tab_only`, `search_tab_only`

</details>

### `unified:display_from_mod`

```json5
{
  "type": "unified:display_from_mod",
  "mod": <string>,
  "visibility": <string> // optional, defaults to `"parent_and_search_tabs"`
}
```

<details>
<summary>Values</summary>

- `visibility`: `parent_and_search_tabs`, `parent_tab_only`, `search_tab_only`

</details>

