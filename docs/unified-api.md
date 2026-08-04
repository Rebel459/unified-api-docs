# Unified API

### About

Unified API is a simple, general purpose API to aid in multiloader development. The API achieves this through:
- unified, cross-loader [registries](unified-registries)
- various [helpers](unified-helpers) to allow access to features such as loot table or creative inventory injection
- platform-agnostic [events](unified-events), so that mods can implement custom behaviour in common code
- useful utilities such as new [components](/utilities/unified-data-components) or [tags](/utilities/unified-item-tags)
- convenient [registry builders](/registries/builders/registry-builders) to automate the creation of woodsets, armor, tools and more
- all registered content goes through the convenient [supplied](/utilities/supplied) class

The [Getting Started](/about/getting-started) page will guide you through creating a multiloader project with Unified API.

### API Stability

Unified API is split into `api.` and `impl.` packages. Unified API avoids making breaking changes to the api unless between breaking Minecraft releases, to ensure that all mods made for a specific version will always work on that version (similarly to Fabric API). If a method or class is marked as deprecated, it will only be removed in the next vanilla version port.

When breaking changes are made (such as from 26.1.x -> 26.2) those changes will be covered in the [migration guide](/about/migration-guide).

### Versions

Unified API is designed for both Fabric & NeoForge.

The following Minecraft versions are currently supported:
- 26.2
- 26.1.2
- 26.1.1
- 26.1

You may also want check out the [changelog](/about/changelog).