# Networking

**Class: `UnifiedHelpers / HelpersImpl.Networking`**

Allows for simple multiloader networking, wherein you can register payloads and handle what should happen when they arrive at their target (server/client).

There's also [UnifiedClientHelpers.NETWORKING](/client-helpers/networking), which allows clients to send packets to the server.

There are a couple things to note with Unified API's networking payloads
- all payloads registries / handlers are combined
- all networking from this class should be registered in common, not client (don't worry, this is server-safe!)
- you can chose between registering you packets as configuration or play packets

### Methods
```
<T extends CustomPacketPayload> void registerPlayC2S(CustomPacketPayload.Type<T> type, StreamCodec<? super RegistryFriendlyByteBuf, T> codec);
<T extends CustomPacketPayload> void registerPlayS2C(CustomPacketPayload.Type<T> type, StreamCodec<? super RegistryFriendlyByteBuf, T> codec);
<T extends CustomPacketPayload> void registerConfigC2S(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> codec);
<T extends CustomPacketPayload> void registerConfigS2C(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> codec);

<T extends CustomPacketPayload> void registerPlayC2S(CustomPacketPayload.Type<T> type, StreamCodec<? super RegistryFriendlyByteBuf, T> codec, BiConsumer<T, ServerPlayer> handler);
<T extends CustomPacketPayload> void registerPlayS2C(CustomPacketPayload.Type<T> type, StreamCodec<? super RegistryFriendlyByteBuf, T> codec, Consumer<T> handler);
<T extends CustomPacketPayload> void registerConfigC2S(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> codec, BiConsumer<T, ServerPlayer> handler);
<T extends CustomPacketPayload> void registerConfigS2C(CustomPacketPayload.Type<T> type, StreamCodec<? super FriendlyByteBuf, T> codec, Consumer<T> handler);
```

### Example

```
UnifiedHelpers.NETWORKING.registerPlayS2C(ExamplePacket.Sync.TYPE, ExamplePacket.Sync.CODEC, (packet) -> {
    Player player = Minecraft.getInstance().player;
    if (player instanceof ExampleInterface interface) {
        interface.setPercentageDamage(packet.percentageDamage()); // here, we've manually cast the payload to ExamplePacket.Sync
    }
});
UnifiedHelpers.NETWORKING.registerPlayC2S(ExamplePacket.Request.TYPE, ExamplePacket.Request.CODEC, (packet, player) -> {
    if (player instanceof ExampleInterface interface) {
        int current = interface.getPercentageDamage();
        networking.send(new ExamplePacket.Sync(current), player);
    }
});
```