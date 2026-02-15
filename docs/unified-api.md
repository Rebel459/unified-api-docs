# Unified API

### About

Unified API is a simple, general purpose API to aid in multiloader development. The API achieves this through:
- unified, cross-loader [registries](unified-registries)
- various [helper methods](unified-helpers) to allow access to features such as loot table or creative inventory injection
- platform-agnostic [events](unified-events), so that mods can implement custom behaviour in common code
- useful utilities such as new [item components](unified-item-components)

::: warning
Unified API is currently in beta. Whilst there's a ton of content in the API already, bugs may arise, and features may change as development progresses. You can report issues [here](http://github.com/rebel459/unified-api/issues).
:::

### Setup

Unified API is built on [Unimined](https://github.com/unimined/Unimined), and it is recommended that you setup (or migrate) your workspace using something similar. The [Getting Started](/introduction/getting-started) page will guide you through creating a Unimined project with Unified API.

### Supported Versions

Unified API fully supports both Fabric & NeoForge.

The following Minecraft versions are supported:
- 1.21.11
- 26.1 (planned)