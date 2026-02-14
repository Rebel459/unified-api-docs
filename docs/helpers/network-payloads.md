# Network Payloads

**Class: `UnifiedHelpers.NetworkPayloads`**

Allows for simple multiloader networking, wherein you can register payloads and handle what should happen when they arrive at their target (server/client).

There's also [UnifiedClientHelpers.NetworkPayloads](/client-helpers/network-payloads), which allows clients to send packets to the server.

There are a couple things to note with Unified API's networking payloads
- all payloads registries / handlers are combined
- all networking from this class should be registered in common, not client (don't worry, this is server-safe!)
- payloads / serverplayers have to be manually cast on the objects in the handler due to the multiloader setup, see the below example for details

### Methods
```
<T extends CustomPacketPayload> void registerC2S(CustomPacketPayload.Type<T> type, StreamCodec<? super B, T> codec);
<T extends CustomPacketPayload> void registerS2C(CustomPacketPayload.Type<T> type, StreamCodec<? super B, T> codec);

<T extends CustomPacketPayload> void registerC2S(CustomPacketPayload.Type<T> type, StreamCodec<RegistryFriendlyByteBuf, T> codec, BiConsumer<T, ServerPlayer> handler);
<T extends CustomPacketPayload> void registerS2C(CustomPacketPayload.Type<T> type, StreamCodec<RegistryFriendlyByteBuf, T> codec, Consumer<T> handler);
```

### Example

```
var networking = UnifiedHelpers.NetworkPayloads.get()
networking.registerS2C(ExamplePacket.Sync.TYPE, ExamplePacket.Sync.CODEC, (payload) -> {
    Player player = Minecraft.getInstance().player;
    if (player instanceof ExampleInterface interface) {
        interface.setPercentageDamage(((ExamplePacket.Sync)payload).percentageDamage()); // here, we've manually cast the payload to ExamplePacket.Sync
    }
});
networking.registerC2S(ExamplePacket.Request.TYPE, ExamplePacket.Request.CODEC, (payload, context) -> {
    ServerPlayer player = (ServerPlayer) context; // as you can see, we manually cast the context to ServerPlayer
    if (player instanceof ExampleInterface interface) {
        int current = interface.getPercentageDamage();
        networking.send(new ExamplePacket.Sync(current), player);
    }
});
```