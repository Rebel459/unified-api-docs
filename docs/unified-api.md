# Unified API

::: info
Unified API is currently in Beta. Breaking changes may be made where necessary, and bugs may arise. Nonetheless, the API is feature-complete, I'm just not comfortable marking it as stable *quite* yet.
:::

### About

Unified API is a comprehensive all-in-one multiloader api made for modders and packers.

If you're a datapack dev, resourcepack dev or modpack dev refer to the [data overview](/data/overview).

If you're a mod developer, begin at [getting started](/about/getting-started), which will guide you through creating a multiloader project with Unified API.

### API Stability

Unified API is split into `api.` and `impl.` packages. Unified API avoids making breaking changes to the api unless between breaking Minecraft releases, to ensure that all mods made for a specific version will always work on that version (similarly to Fabric API). If a method or class is marked as deprecated, it will only be removed in the next vanilla version port.

Only builds marked as Beta are prone to same-version breaking changes. When breaking changes are made (such as from 26.1.x -> 26.2) those changes will be covered in the [migration guide](/about/migration-guide).

### Versions

Unified API is designed for both Fabric & NeoForge.

The following Minecraft versions are currently supported:
- 26.3
- 26.2
- 26.1.2
- 26.1.1
- 26.1

You may also want check out the [changelog](/about/changelog).