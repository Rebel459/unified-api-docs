### `minecraft:bed`

```json5
{
  "type": "minecraft:bed",
  "dye_color": <string>
}
```

<details>
<summary>Values</summary>

- `dye_color`: `black`, `blue`, `brown`, `cyan`, `gray`, `green`, `light_blue`, `light_gray`, `lime`, `magenta`, `orange`, `pink`, `purple`, `red`, `white`, `yellow`

</details>

### `minecraft:block_rotation`

```json5
{
  "type": "minecraft:block_rotation",
  "top_color": <string>,
  "side_color": <string>
}
```

### `minecraft:crop_age`

```json5
{
  "type": "minecraft:crop_age",
  "age": <int>, // range: `0` or greater
  "color": <string>
}
```

<details>
<summary>Values</summary>

- `color`: `clay`, `color_black`, `color_blue`, `color_brown`, `color_cyan`, `color_gray`, `color_green`, `color_light_blue`, `color_light_gray`, `color_light_green`, `color_magenta`, `color_orange`, `color_pink`, `color_purple`, `color_red`, `color_yellow`, `crimson_hyphae`, `crimson_nylium`, `crimson_stem`, `deepslate`, `diamond`, `dirt`, `emerald`, `fire`, `glow_lichen`, `gold`, `grass`, `ice`, `lapis`, `metal`, `nether`, `none`, `plant`, `podzol`, `quartz`, `raw_iron`, `sand`, `snow`, `stone`, `terracotta_black`, `terracotta_blue`, `terracotta_brown`, `terracotta_cyan`, `terracotta_gray`, `terracotta_green`, `terracotta_light_blue`, `terracotta_light_gray`, `terracotta_light_green`, `terracotta_magenta`, `terracotta_orange`, `terracotta_pink`, `terracotta_purple`, `terracotta_red`, `terracotta_white`, `terracotta_yellow`, `warped_hyphae`, `warped_nylium`, `warped_stem`, `warped_wart_block`, `water`, `wood`, `wool`

</details>

### `minecraft:simple`

```json5
{
  "type": "minecraft:simple",
  "color": <string>
}
```

<details>
<summary>Values</summary>

- `color`: `clay`, `color_black`, `color_blue`, `color_brown`, `color_cyan`, `color_gray`, `color_green`, `color_light_blue`, `color_light_gray`, `color_light_green`, `color_magenta`, `color_orange`, `color_pink`, `color_purple`, `color_red`, `color_yellow`, `crimson_hyphae`, `crimson_nylium`, `crimson_stem`, `deepslate`, `diamond`, `dirt`, `emerald`, `fire`, `glow_lichen`, `gold`, `grass`, `ice`, `lapis`, `metal`, `nether`, `none`, `plant`, `podzol`, `quartz`, `raw_iron`, `sand`, `snow`, `stone`, `terracotta_black`, `terracotta_blue`, `terracotta_brown`, `terracotta_cyan`, `terracotta_gray`, `terracotta_green`, `terracotta_light_blue`, `terracotta_light_gray`, `terracotta_light_green`, `terracotta_magenta`, `terracotta_orange`, `terracotta_pink`, `terracotta_purple`, `terracotta_red`, `terracotta_white`, `terracotta_yellow`, `warped_hyphae`, `warped_nylium`, `warped_stem`, `warped_wart_block`, `water`, `wood`, `wool`

</details>

### `minecraft:waterlogged`

```json5
{
  "type": "minecraft:waterlogged"
}
```

### `unified:conditional`

```json5
{
  "type": "unified:conditional",
  "predicate": <block predicate codec>,
  "if_true": <map color codec>,
  "if_false": <map color codec>
}
```

