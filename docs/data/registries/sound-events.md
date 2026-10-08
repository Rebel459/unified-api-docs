### Sound Events

*Type: Registry | Location: data/<namespace>/unified/registry/sound-events*

Allows the registering of custom sound events. Whilst sounds.json is client-side, you will need to actually register custom events here to reference them in other content, such as registered blocks.

The two possible JSON formats are listed below. Yes, most sound events are literally just an almost-empty file.

```json5
{} // creates a normal sound event
```

```json5
{
    "fixed_range": <float> // creates a sound event with a fixed range
}
```