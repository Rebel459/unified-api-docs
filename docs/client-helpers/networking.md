# Networking

**Class: `UnifiedClientHelpers / ClientHelpersImpl.Networking`**

Used to send packets from the client to the server.

[UnifiedHelpers.NETWORKING](/helpers/networking) handles all other client-to-server & server-to-client behaviour.

There are a couple things to note with Unified API's networking payloads
- all payloads registries / handlers are combined
- all networking should be registered in common, not client (don't worry, this is server-safe!)

### Methods
```
void send(CustomPacketPayload payload);
```

### Example

```
var networking = UnifiedClientHelpers.NetworkPayloads.get()
networking.send(new ExamplePacket("string"))
```