# Key Mappings

**Class: `UnifiedClientRegistries.KeyMappings`**

Allows you to register custom keybinds and keybind categories.

In order to give your keybinds actual functionality, you should look at client-side events such as the `accessEnd` method in the [Tick](/client-events/tick) event.

### Methods

```
Supplier<KeyMapping> registerKeybind(String path, InputConstants.Type type, Integer key, KeyMapping.Category category);

KeyMapping.Category registerCategory(String path);
```

### Example

```
public static UnifiedClientRegistries.KeyMappings KEY_MAPPINGS = UnifiedClientRegistries.KeyMappings.create(ModName.MOD_ID);

public static final Supplier<KeyMapping> EXAMPLE_BINDING = KEY_MAPPINGS.registerKeybind(
                "example_binding",
                InputConstants.Type.KEYSYM,
                GLFW.GLFW_KEY_G,
                KeyMapping.Category.GAMEPLAY
);
```