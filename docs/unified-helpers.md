# Unified Helpers

**Class: `UnifiedHelpers`**

Unified Helpers include a ton of custom helper methods to extend functionality in a loader-agnostic way - such as sending network packets, registering internal resource / data packs, injecting into loot tables or adding items to the creative inventory.

All Unified API helper methods are accessed through `UnifiedHelpers.HELPER_NAME`.

A helper method of notice is [UnifiedHelpers.Platform](/helpers/platform), which allows you to get the current mod loader, as well as check for specific mods in a cross-loader manner.