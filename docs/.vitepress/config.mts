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
              { text: 'Unified Platform', link: '/helpers/unified-platform' },
              { text: 'Packs', link: '/helpers/packs' },
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
              { text: 'Particle Providers', link: '/client-helpers/particle-providers' },
              { text: 'Entity Renderers', link: '/client-helpers/entity-renderers' },
              { text: 'Tooltips', link: '/client-helpers/tooltips' },
              { text: 'Legacy Baby Armor', link: '/client-helpers/legacy-baby-armor' }
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
              { text: 'Guis', link: '/client-events/guis' },
              { text: 'Screens', link: '/client-events/screens' }
            ]
          }
        ]
      },
      {
        text: 'Classes',
        items: [
          {
            text: 'Utilities',
            collapsed: true,
            items: [
              { text: 'Unified Data Components', link: '/utilities/unified-data-components' },
              { text: 'Unified Item Tags', link: '/utilities/unified-item-tags' },
              { text: 'Supplied Item', link: '/utilities/supplied-item' },
              { text: 'Supplied Block', link: '/utilities/supplied-block' },
              { text: 'Loot Entry', link: '/utilities/loot-entry' }
            ]
          },
          {
            text: 'Misc',
            collapsed: true,
            items: [
              { text: 'Pack Type', link: '/misc/pack-type' },
              { text: 'Loader Type', link: '/misc/loader-type' },
              { text: 'Event Type', link: '/misc/event-type' },
              { text: 'Creative Mode Tabs', link: '/misc/creative-mode-tabs' }
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
