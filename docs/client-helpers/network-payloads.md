# Network Payloads

**Class: `UnifiedClientHelpers.NetworkPayloads`**

Used to send packets from the client to the server.

[UnifiedHelpers.NetworkPayloads](/helpers/network-payloads) handles all other client-to-server & server-to-client behaviour.

There are a couple things to note with Unified API's networking payloads
- all payloads registries / handlers are combined
- all networking from this class should be registered in common, not client (don't worry, this is server-safe!)
- payloads / serverplayers have to be manually cast on the objects in the handler due to the multiloader setup, see the below example for details

### Methods
```
void send(CustomPacketPayload payload);
```

### Example

```
var networking = UnifiedClientHelpers.NetworkPayloads.get()
networking.send(new ExamplePacket("string"))
```