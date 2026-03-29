# Unified Helpers

**Class: `UnifiedHelpers`**

Unified Helpers include a ton of custom helper methods to extend functionality in a loader-agnostic way - such as sending network packets, registering internal resource / data packs, injecting into loot tables or adding items to the creative inventory.

All Unified API helper methods are accessed through `UnifiedHelpers.HELPER_NAME`, with the exception of the [Unified Platform](/helpers/unified-platform) helper, which is accessed through UnifiedPlatform.get() and allows you to get the mod environment, loaded mods and more.