# Command Registration

**Class: `UnifiedEvents.CommandRegistration`**

An event used to register custom commands and command behaviour.

### Example

```
CommandRegistrationCallback.EVENT.register((dispatcher, context, selection) -> {
    dispatcher.register(Commands.literal("example_command")
        .requires(Commands.hasPermission(Commands.LEVEL_GAMEMASTERS))
        .executes(ctx -> commandBehaviourMethod(ctx, ctx.getSource().getPlayerOrException()))
    );
});
```