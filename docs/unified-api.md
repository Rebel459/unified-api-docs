# Unified API

### About

Unified API is a simple, general purpose API to aid in multiloader development. The API achieves this through:
- unified, cross-loader [registries](unified-registries)
- various [helpers](unified-helpers) to allow access to features such as loot table or creative inventory injection
- platform-agnostic [events](unified-events), so that mods can implement custom behaviour in common code
- useful utilities such as new [components](/utilities/unified-data-components) or [tags](/utilities/unified-item-tags)
- custom supplier interfaces for [items](/utilities/supplied-item) and [blocks](/utilities/supplied-block)

::: warning
Unified API is currently in beta. Whilst there's a ton of content in the API already, bugs may arise, and features may change as development progresses. You can report issues [here](http://github.com/rebel459/unified-api/issues).
:::

### Setup

The [Getting Started](/about/getting-started) page will guide you through creating a multiloader project with Unified API.

### Versions

Unified API fully supports both Fabric & NeoForge.

The following Minecraft versions are currently supported:
- 26.1
- 1.21.11

You may also want check out the [changelog](/about/changelog) or the [migration guide](/about/migration-guide)