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
        text: 'Introduction',
        items: [
          { text: 'Unified API', link: '/unified-api' },
          { text: 'Getting Started', link: '/introduction/getting-started' }
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
              { text: 'Creative Entries', link: '/helpers/creative-entries' },
              { text: 'Loot Tables', link: '/helpers/loot-tables' },
              { text: 'Networking', link: '/helpers/networking' },
              { text: 'Strippable Blocks', link: '/helpers/strippable-blocks' },
              { text: 'Furnace Fuels', link: '/helpers/furnace-fuels' }
            ]
          },
          {
            text: 'Client',
            collapsed: true,
            items: [
              { text: 'Unified Client Helpers', link: '/unified-client-helpers' },
              { text: 'Networking', link: '/client-helpers/networking' },
              { text: 'Block Layers', link: '/client-helpers/block-layers' },
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
              { text: 'Item Components', link: '/events/item-components' },
              { text: 'Commands', link: '/events/commands' },
              { text: 'Players', link: '/events/players' }
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
          {
            text: 'Common',
            collapsed: true,
            items: [
              { text: 'Unified Item Components', link: '/unified-item-components' },
              { text: 'Pack Info', link: '/utilities/pack-info' },
              { text: 'Platform', link: '/utilities/platform' }
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
