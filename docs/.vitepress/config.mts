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
      { text: 'Documentation', link: '/unified-api' }
    ],
    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'Unified API', link: '/unified-api' },
          { text: 'Getting Started', link: '/about/getting-started' },
          { text: 'Changelog', link: '/about/changelog' },
          { text: 'Migration Guide', link: '/about/migration-guide' }
        ]
      },
      {
        text: 'Registries',
        items: [
          {
            text: 'Common',
            collapsed: true,
            items: [
              { text: 'Unified Registries', link: '/unified-registries' },
              { text: 'Deferred Registry', link: '/registries/deferred-registry' },
              { text: 'Items', link: '/registries/items' },
              { text: 'Blocks', link: '/registries/blocks' },
              {
                text: 'Builders',
                collapsed: true,
                items: [
                  { text: 'Registry Builders', link: '/registries/builders/registry-builders' },
                  { text: 'Block Set', link: '/registries/builders/block-set' },
                  { text: 'Block Preset', link: '/registries/builders/block-preset' },
                  { text: 'Wood Set', link: '/registries/builders/wood-set' },
                  { text: 'Wood Preset', link: '/registries/builders/wood-preset' },
                  { text: 'Equipment Set', link: '/registries/builders/equipment-set' },
                  { text: 'Equipment Preset', link: '/registries/builders/equipment-preset' }
                ]
              },
              { text: 'Entity Types', link: '/registries/entity-types' },
              { text: 'Block Entity Types', link: '/registries/block-entity-types' },
              { text: 'Creative Tabs', link: '/registries/creative-tabs' },
              { text: 'Data Component Types', link: '/registries/data-component-types' },
              { text: 'Sound Events', link: '/registries/sound-events' }
            ]
          },
          {
            text: 'Client',
            collapsed: true,
            items: [
              { text: 'Unified Client Registries', link: '/unified-client-registries' },
              { text: 'Key Mappings', link: '/client-registries/key-mappings' }
            ]
          }
        ]
      },
      {
        text: 'Helpers',
        items: [
          {
            text: 'Common',
            collapsed: true,
            items: [
              { text: 'Unified Helpers', link: '/unified-helpers' },
              { text: 'Unified Instance', link: '/helpers/unified-instance' },
              { text: 'Data Packs', link: '/helpers/data-packs' },
              { text: 'Biome Modifications', link: '/helpers/biome-modifications' },
              { text: 'Creative Entries', link: '/helpers/creative-entries' },
              { text: 'Networking', link: '/helpers/networking' },
              { text: 'Block Conversions', link: '/helpers/block-conversions' },
              { text: 'Data Components', link: '/helpers/data-components' },
              { text: 'Structure Music', link: '/helpers/structure-music' }
            ]
          },
          {
            text: 'Client',
            collapsed: true,
            items: [
              { text: 'Unified Client Helpers', link: '/unified-client-helpers' },
              { text: 'Networking', link: '/client-helpers/networking' },
              { text: 'Resource Packs', link: '/client-helpers/resource-packs' },
              { text: 'Particle Providers', link: '/client-helpers/particle-providers' },
              { text: 'Entity Renderers', link: '/client-helpers/entity-renderers' },
              { text: 'Tooltips', link: '/client-helpers/tooltips' },
              { text: 'Simple Baby Armor', link: '/client-helpers/simple-baby-armor' }
            ]
          }
        ]
      },
      {
        text: 'Events',
        items: [
          {
            text: 'Common',
            collapsed: true,
            items: [
              { text: 'Unified Events', link: '/unified-events' },
              { text: 'Loot Tables', link: '/events/loot-tables' },
              { text: 'Default Data Components', link: '/events/default-data-components' },
              { text: 'Commands', link: '/events/commands' },
              { text: 'Players', link: '/events/players' },
              { text: 'Entities', link: '/events/entities' },
              { text: 'Server', link: '/events/server' },
              { text: 'Levels', link: '/events/levels' },
              { text: 'Items', link: '/events/items' },
              { text: 'Blocks', link: '/events/blocks' }
            ]
          },
          {
            text: 'Client',
            collapsed: true,
            items: [
              { text: 'Unified Client Events', link: '/unified-client-events' },
              { text: 'Instance', link: '/client-events/instance' },
              { text: 'Item Tooltips', link: '/client-events/item-tooltips' },
              { text: 'Hud', link: '/client-events/hud' },
              { text: 'Screens', link: '/client-events/screens' }
            ]
          }
        ]
      },
      {
        text: 'Misc',
        items: [
          {
            text: 'Utilities',
            collapsed: true,
            items: [
              { text: 'Supplied', link: '/utilities/supplied' },
              { text: 'Supplied Item', link: '/utilities/supplied-item' },
              { text: 'Supplied Block', link: '/utilities/supplied-block' },
              { text: 'Unified Data Components', link: '/utilities/unified-data-components' },
              { text: 'Unified Item Tags', link: '/utilities/unified-item-tags' },
              { text: 'Loot Entry', link: '/utilities/loot-entry' },
              { text: 'Block Like', link: '/utilities/block-like' },
              { text: 'Creative Mode Tab Ids', link: '/utilities/creative-mode-tab-ids' },
              { text: 'Vanilla Version', link: '/utilities/vanilla-version' },
              { text: 'Mod Loader', link: '/utilities/mod-loader' },
              { text: 'Event Timing', link: '/utilities/event-timing' }
            ]
          },
          {
            text: 'Older Versions',
            collapsed: true,
            items: [
              {
                text: '26.1',
                collapsed: true,
                items: [
                  { text: 'Packs', link: '/older-versions/26.1/packs' },
                  { text: 'Pack Type', link: '/older-versions/26.1/pack-type' }
                ]
              }            
            ]
          }
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
