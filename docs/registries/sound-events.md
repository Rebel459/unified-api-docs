# Sound Events

**Class: `UnifiedRegistries.SoundEvents`**

Allows you to register custom sounds, with the option to use either a Supplier or Holder.

### Methods

```
Supplied<SoundEvent> register(String path);

Holder<SoundEvent> registerForHolder(String path);
```

### Example

```
public static UnifiedRegistries.SoundEvents SOUNDS = UnifiedRegistries.SoundEvents.create(ModName.MOD_ID);

public static final Supplied<SoundEvent> EXAMPLE_SOUND = SOUNDS.register("item.example_item.example_sound");
```