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
              { text: 'Items', link: '/registries/items' },
              { text: 'Blocks', link: '/registries/blocks' },
              { text: 'Entity Types', link: '/registries/entity-types' },
              { text: 'Block Entity Types', link: '/registries/block-entity-types' },
              { text: 'Creative Tabs', link: '/registries/creative-tabs' },
              { text: 'Mob Effects', link: '/registries/mob-effects' },
              { text: 'Data Component Types', link: '/registries/data-component-types' },
              { text: 'Particle Types', link: '/registries/particle-types' },
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
              { text: 'Platform', link: '/helpers/platform' },
              { text: 'Packs', link: '/helpers/packs' },
              { text: 'Biome Modifications', link: '/helpers/biome-modifications' },
              { text: 'Creative Entries', link: '/helpers/creative-entries' },
              { text: 'Networking', link: '/helpers/networking' },
              { text: 'Block Conversions', link: '/helpers/block-conversions' },
              { text: 'Data Components', link: '/helpers/data-components' }
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
              { text: 'Tooltips', link: '/client-helpers/tooltips' }
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
              { text: 'Item Components', link: '/events/item-components' },
              { text: 'Commands', link: '/events/commands' },
              { text: 'Players', link: '/events/players' },
              { text: 'Servers', link: '/events/servers' }
            ]
          },
          {
            text: 'Client',
            collapsed: true,
            items: [
              { text: 'Unified Client Events', link: '/unified-client-events' },
              { text: 'Ticks', link: '/client-events/ticks' },
              { text: 'Guis', link: '/client-events/guis' },
              { text: 'Screens', link: '/client-events/screens' }
            ]
          }
        ]
      },
      {
        text: 'Utilities',
        items: [
          { text: 'Unified Data Components', link: '/unified-data-components' },
          {
            text: 'Enums',
            collapsed: true,
            items: [
              { text: 'Pack Info', link: '/utilities/pack-info' },
              { text: 'Platform Info', link: '/utilities/platform-info' },
              { text: 'Environment Info', link: '/utilities/env-info' }
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
