### Template Pool Feature

`unified:template_pool` is a [configured feature](https://minecraft.wiki/w/Configured_feature) which allows you to create features by saving structures in-game, with a variety of intutive tools.

::: info
On 26.3 and above, configured features are stored in `data/[namespace]/worldgen/feature/`. In older versions, they are stored in `data/[namespace]/worldgen/configured_feature/` and values are stored inside a `config` object
:::

You may need to understand the following vanilla topics, which will be familiar if you've ever worked with structures
- [structure blocks](https://minecraft.wiki/w/Structure_Block)
- [jigsaws](https://minecraft.wiki/w/Jigsaw_Block)
- [template pools](https://minecraft.wiki/w/Template_pool)
- [processor lists](https://minecraft.wiki/w/Processor_list)

**Format**

```json5
"start_pool": <template pool identifier>

"start_pool": {
    <template pool>
}
```

The [template pool](https://minecraft.wiki/w/Template_pool) to pick the first piece from. Can be an identifier or defined inline.

```json5
"start_jigsaw_name": <identifier> // optional
```

The name of a jigsaw block in the first piece. When set, that jigsaw is placed at the feature's origin. Otherwise, the piece is centred horizontally on the origin with its bottom layer at the origin's height.

```json5
"size": <int> // optional, defaults to 0, range 0-20
```

How many levels of jigsaws to generate out from the first piece. The default of 0 only places the first piece, so this must be set for structures that use jigsaws.

```json5
"max_distance_from_center": <int> // optional, range 1-128

"max_distance_from_center": {
    "horizontal": <int>, // range 1-128
    "vertical": <int> // optional
}
```

How far jigsaw pieces can extend from the origin. Defaults to 16 horizontally with no vertical limit.

::: warning
Features can only place blocks in the chunk they generate in and the chunks directly surrounding it. Anything further than that is cut off, so structures should stay within 16 blocks of the origin horizontally.
:::

```json5
"rotation": <string> // optional, can be "none", "clockwise_90", "180" or "counterclockwise_90"
```

The rotation to place the structure with. A random rotation is used if not specified.

```json5
"liquid_settings": <string> // optional, can be "apply_waterlogging" or "ignore_waterlogging", defaults to "apply_waterlogging"
```

Whether waterloggable blocks become waterlogged when placed in water.

```json5
"ignore_air": <boolean> // optional, defaults to false
```

Whether air saved in the structure should be skipped rather than replacing existing blocks, which serves as an alternative to placing structure voids. 

```json5
"natural_leaves": <boolean> // optional, defaults to false
```

Whether leaves should behave like those of a naturally generated tree. Leaves placed by hand are persistent, so when `false` they are placed exactly as saved and never decay. When `true`, all leaves in the structure are made non-persistent and given their correct distance from the structure's logs, across every jigsaw piece, so they decay once the logs are removed.

Leaves further than 6 blocks from a log will decay naturally after generating, as they would on any tree.

```json5
"marked_processors": [<processor list identifier>] // optional

"marked_processors": [
    {
        "processors": [<processor>, ...]
    }
]
```

A list of [processor lists](https://minecraft.wiki/w/Processor_list) to only apply to blocks marked with the Processor Stick. Each entry can be an identifier or defined inline.

**Processor Stick**

The Processor Stick lets you choose which blocks of a structure `marked_processors` applies to. For example, marking some of a tree's leaves and using a `minecraft:block_rot` processor makes only those leaves able to go missing, keeping the rest of the tree intact.

It is found after the Debug Stick in the Operator Utilities creative tab. As it is a vanilla stick with custom data, it can also be obtained on servers without Unified API installed on the client.

```
/give @s minecraft:stick[minecraft:custom_data={"unified:processor_stick":1b}]
```

Using the stick on a block marks or unmarks it. This requires creative mode and operator permissions. Marked blocks are outlined while the stick is held, and are saved into the structure when it is saved with a structure block.

Processors applied to pool elements as normal still apply to every block, and run before marked processors.

**Structure Voids**

If any processor within the template pool configured feature, marked or otherwise, turns a block into `minecraft:structure_void`, that block is skipped and whatever was already in the world is kept. This allows processors to remove parts of a structure without leaving air behind, such as when generating underwater.

**Example**

```json5
{
    "type": "unified:template_pool",
    "start_pool": "example_mod:trees/pine/trunks",
    "start_jigsaw_name": "example_mod:base",
    "size": 3,
    "natural_leaves": true,
    "marked_processors": [
        {
            "processors": [
                {
                    "processor_type": "minecraft:block_rot",
                    "integrity": 0.8
                }
            ]
        }
    ]
}
```