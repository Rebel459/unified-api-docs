import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Unified API",
  description: "Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/about/unified-api' }
    ],
    sidebar: [
      {
        text: 'About',
        collapsed: true,
        items: [
          { text: 'Unified API', link: '/about/unified-api' },
          { text: 'Getting Started', link: '/about/getting-started' },
          { text: 'Migration Guide', link: '/about/migration-guide' },
          { text: 'Changelog', link: '/about/changelog' }
        ]
      },
      {
        text: 'Data',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/data/overview' },
          {
            text: 'Listeners',
            collapsed: true,
            items: [
              { text: 'Biome Modifiers', link: '/data/listeners/biome-modifiers' },
              { text: 'Block Conversions', link: '/data/listeners/block-conversions' },
              { text: 'Component Modifiers', link: '/data/listeners/component-modifiers' },
              { text: 'Creative Entries', link: '/data/listeners/creative-entries' },
              { text: 'Loot Injections', link: '/data/listeners/loot-injections' },
              { text: 'Mob Variants', link: '/data/listeners/mob-variants' },
              { text: 'Simple Baby Armor', link: '/data/listeners/simple-baby-armor' }
            ]
          },
          {
            text: 'Registries',
            collapsed: true,
            items: [
              { text: 'Block Set Types', link: '/data/registries/block-set-types' },
              { text: 'Blocks', link: '/data/registries/blocks' },
              { text: 'Creative Tabs', link: '/data/registries/creative-tabs' },
              { text: 'Entities', link: '/data/registries/entities' },
              { text: 'Items', link: '/data/registries/items' },
              { text: 'Sound Events', link: '/data/registries/sound-events' },
              { text: 'Wood Types', link: '/data/registries/wood-types' }
            ]
          },
          {
            text: 'Codecs',
            collapsed: true,
            items: [
              { text: 'Block', link: '/data/codecs/block' },
              { text: 'Block Predicate', link: '/data/codecs/block-predicate' },
              { text: 'Collision Predicate', link: '/data/codecs/collision-predicate' },
              { text: 'Display Item', link: '/data/codecs/display-item' },
              { text: 'Entity', link: '/data/codecs/entity' },
              { text: 'Entity Predicate', link: '/data/codecs/entity-predicate' },
              { text: 'Item', link: '/data/codecs/item' },
              { text: 'Item Predicate', link: '/data/codecs/item-predicate' },
              { text: 'Light Emission', link: '/data/codecs/light-emission' },
              { text: 'Load Requirement', link: '/data/codecs/load-requirement' },
              { text: 'Map Color', link: '/data/codecs/map-color' },
              { text: 'Post Process', link: '/data/codecs/post-process' },
              { text: 'Spawn Placement', link: '/data/codecs/spawn-placement' },
              { text: 'Spawn Predicate', link: '/data/codecs/spawn-predicate' },
              { text: 'State Predicate', link: '/data/codecs/state-predicate' },
              { text: 'Use Context', link: '/data/codecs/use-context' }
            ]
          },
          {
            text: 'Other',
            collapsed: true,
            items: [
              { text: 'Unified Data Components', link: '/data/other/unified-data-components' },
              { text: 'Unified Item Tags', link: '/data/other/unified-item-tags' },
            ]
          }
        ]
      },
      {
        text: 'Generators',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/generators/overview' },
          {
            text: 'Registries',
            collapsed: true,
            items: [
              { text: 'Block', link: '/generators/registries/block' },
              { text: 'Creative Tab', link: '/generators/registries/creative-tab' },
              { text: 'Entity', link: '/generators/registries/entity' },
              { text: 'Item', link: '/generators/registries/item' }
            ]
          },
          {
            text: 'Sets',
            collapsed: true,
            items: [
              { text: 'Colored Block Preset', link: '/generators/sets/colored-block-preset' },
              { text: 'Colored Block Set', link: '/generators/sets/colored-block-set' },
              { text: 'Colored Item Preset', link: '/generators/sets/colored-item-preset' },
              { text: 'Colored Item Set', link: '/generators/sets/colored-item-set' },
              { text: 'Equipment Preset', link: '/generators/sets/equipment-preset' },
              { text: 'Equipment Set', link: '/generators/sets/equipment-set' },
              { text: 'Stone Preset', link: '/generators/sets/stone-preset' },
              { text: 'Stone Set', link: '/generators/sets/stone-set' },
              { text: 'Wood Preset', link: '/generators/sets/wood-preset' },
              { text: 'Wood Set', link: '/generators/sets/wood-set' }
            ]
          }
        ]
      },
      {
        text: 'Registries',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/registries/overview' },
          { text: 'Unified Registries', link: '/registries/unified-registries' },
          { text: 'Extensible Codecs', link: '/registries/extensible-codecs' },
          { text: 'Supplied', link: '/registries/supplied' },
          { text: 'Supplied Block', link: '/registries/supplied-block' },
          { text: 'Supplied Item', link: '/registries/supplied-item' }
        ]
      },
      {
        text: 'Helpers',
        collapsed: true,
        items: [
          {
            text: 'Common',
            collapsed: true,
            items: [
              { text: 'Block Conversions', link: '/helpers/common/block-conversions' },
              { text: 'Data Packs', link: '/helpers/common/data-packs' },
              { text: 'Data Registries', link: '/helpers/common/data-registries' },
              { text: 'Entity Data Serializers', link: '/helpers/common/entity-data-serializers' },
              { text: 'Networking', link: '/helpers/common/networking' },
              { text: 'Reload Listeners', link: '/helpers/common/reload-listeners' },
              { text: 'Spawn Placements', link: '/helpers/common/spawn-placements' }
            ]
          },
          {
            text: 'Client',
            collapsed: true,
            items: [
              { text: 'Entity Renderers', link: '/helpers/client/entity-renderers' },
              { text: 'Key Mappings', link: '/helpers/client/key-mappings' },
              { text: 'Networking', link: '/helpers/client/networking' },
              { text: 'Particle Providers', link: '/helpers/client/particle-providers' },
              { text: 'Reload Listeners', link: '/helpers/client/reload-listeners' },
              { text: 'Resource Packs', link: '/helpers/client/resource-packs' },
              { text: 'Simple Baby Armor', link: '/helpers/client/simple-baby-armor' },
              { text: 'Structure Music', link: '/helpers/client/structure-music' },
              { text: 'Tooltips', link: '/helpers/client/tooltips' }
            ]
          }
        ]
      },
      {
        text: 'Events',
        collapsed: true,
        items: [
          {
            text: 'Common',
            collapsed: true,
            items: [
              { text: 'Biomes', link: '/events/common/biomes' },
              { text: 'Blocks', link: '/events/common/blocks' },
              { text: 'Commands', link: '/events/common/commands' },
              { text: 'Creative Entries', link: '/events/common/creative-entries' },
              { text: 'Default Data Components', link: '/events/common/default-data-components' },
              { text: 'Entities', link: '/events/common/entities' },
              { text: 'Items', link: '/events/common/items' },
              { text: 'Levels', link: '/events/common/levels' },
              { text: 'Loot Tables', link: '/events/common/loot-tables' },
              { text: 'Players', link: '/events/common/players' },
              { text: 'Server', link: '/events/common/server' }
            ]
          },
          {
            text: 'Client',
            collapsed: true,
            items: [
              { text: 'Hud', link: '/events/client/hud' },
              { text: 'Instance', link: '/events/client/instance' },
              { text: 'Item Tooltips', link: '/events/client/item-tooltips' },
              { text: 'Screens', link: '/events/client/screens' }
            ]
          }
        ]
      },
      {
        text: 'Utilities',
        collapsed: true,
        items: [
          { text: 'Unified Platform', link: '/utilities/unified-platform' },
          { text: 'Block Like', link: '/utilities/block-like' },
          { text: 'Creative Mode Tab Ids', link: '/utilities/creative-mode-tab-ids' },
          { text: 'Event Timing', link: '/utilities/event-timing' },
          { text: 'Loot Entry', link: '/utilities/loot-entry' },
          { text: 'Vanilla Version', link: '/utilities/vanilla-version' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'modrinth', link: 'http://modrinth.com/mod/unified-api' },
      { icon: 'curseforge', link: 'https://www.curseforge.com/minecraft/mc-mods/unified-api' },
      { icon: 'discord', link: 'https://discord.com/invite/TGbBb47Gr5' },
      { icon: 'kofi', link: 'https://ko-fi.com/rebel459' },
      { icon: 'github', link: 'https://github.com/Rebel459/unified-api' }
    ]
  }
})
