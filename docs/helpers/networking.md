# Networking

**Class: `UnifiedHelpers / HelpersImpl.Networking`**

Allows for simple multiloader networking, wherein you can register payloads and handle what should happen when they arrive at their target (server/client).

There's also [UnifiedClientHelpers.NETWORKING](/client-helpers/networking), which allows clients to send packets to the server.

There are a couple things to note with Unified API's networking payloads
- all payloads registries / handlers are combined (though you can do register-only if you need to)
- you can chose between registering your packets as configuration or play packets

### Methods
```
<T extends CustomPacketPayload> void registerPlayToServer(CustomPacketPayload.Type<T> type, StreamCodec<? super RegistryFriendlyByteBuf, T> codec);
<T extends CustomPacketPayload> void registerPlayToClient(CustomPacketPayload.Type<T> type, StreamCodec<? super RegistryFriendlyByteBuf, T> codec);
<T extends CustomPacketPayload> void registerConfigToServer(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> codec);
<T extends CustomPacketPayload> void registerConfigToClient(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> codec);

<T extends CustomPacketPayload> void registerPlayToServer(CustomPacketPayload.Type<T> type, StreamCodec<? super RegistryFriendlyByteBuf, T> codec, BiConsumer<T, ServerPlayer> handler);
<T extends CustomPacketPayload> void registerPlayToClient(CustomPacketPayload.Type<T> type, StreamCodec<? super RegistryFriendlyByteBuf, T> codec, BiConsumer<T, Player> handler);
<T extends CustomPacketPayload> void registerConfigToServer(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> codec, BiConsumer<T, ServerPlayer> handler);
<T extends CustomPacketPayload> void registerConfigToClient(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> codec, BiConsumer<T, Player> handler);
```

### Example

```
UnifiedHelpers.NETWORKING.registerPlayToClient(ExamplePacket.Sync.TYPE, ExamplePacket.Sync.CODEC, (ExamplePacket payload, Player context) -> {
    if (context instanceof ExampleInterface interface) {
        interface.setPercentageDamage(payload.percentageDamage());
    }
});
UnifiedHelpers.NETWORKING.registerPlayToServer(ExamplePacket.Request.TYPE, ExamplePacket.Request.CODEC, (ExamplePacket payload, ServerPlayer context) -> {
    if (context instanceof ExampleInterface interface) {
        int current = interface.getPercentageDamage();
        networking.send(new ExamplePacket.Sync(current), context);
    }
});
```