### Simple Baby Armor

*Type: Asset | Location: `assets/<namespace>/unified/simple-baby-armor`*

If you're adding custom armor but don't want to make separate baby armor textures, you can use this to automatically rescale your adult armor textures for baby mobs.

```json5
{
    // format code goes here
}
```

**Format**

```json5
"equipment_asset": <equipment asset identifier>
```

The name of the equipment asset to apply Simple Baby Armor to

```json5
"downscale": <boolean> // optional, defaults to true
```

Whether the texture should be downscaled to be closer to the per-pixel size of actual baby armor. If set to false, Simple Baby Armor instead looks like pre-26.1 baby mob armor

```json5
"cutoff": <int> // optional, defaults to 50, must be at least 0
```

A percentage value. All pixels with transparency values below this will be deleted during rescaling, and all values above will become solid.

Only has an effect when `downscale` is set to `true`.