import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Unified API",
  description: "Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/unified-api' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Unified API', link: '/docs/unified-api' },
          { text: 'Getting Started', link: '/docs/introduction/getting-started' }
        ]
      },
      {
        text: 'Registries',
        items: [
          {
            text: 'Common',
            collapsed: true,
            items: [
              { text: 'Unified Registries', link: '/docs/unified-registries' },
              { text: 'Items', link: '/docs/registries/items' },
              { text: 'Blocks', link: '/docs/registries/blocks' },
              { text: 'Entity Types', link: '/docs/registries/entity-types' },
              { text: 'Creative Tabs', link: '/docs/registries/creative-tabs' },
              { text: 'Mob Effects', link: '/docs/registries/mob-effects' },
              { text: 'Data Component Types', link: '/docs/registries/data-component-types' },
              { text: 'Particle Types', link: '/docs/registries/particle-types' },
              { text: 'Sound Events', link: '/docs/registries/sound-events' }
            ]
          },
          {
            text: 'Client',
            collapsed: true,
            items: [
              { text: 'Unified Client Registries', link: '/docs/unified-client-registries' },
              { text: 'Key Mappings', link: '/docs/client-registries/key-mappings' }
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
              { text: 'Unified Helpers', link: '/docs/unified-helpers' },
              { text: 'Platform', link: '/docs/helpers/platform' },
              { text: 'Packs', link: '/docs/helpers/packs' },
              { text: 'Creative Entries', link: '/docs/helpers/creative-entries' },
              { text: 'Loot Tables', link: '/docs/helpers/loot-tables' },
              { text: 'Network Payloads', link: '/docs/helpers/network-payloads' },
              { text: 'Strippable Blocks', link: '/docs/helpers/strippable-blocks' },
              { text: 'Furnace Fuels', link: '/docs/helpers/furnace-fuels' }
            ]
          },
          {
            text: 'Client',
            collapsed: true,
            items: [
              { text: 'Unified Client Helpers', link: '/docs/unified-client-helpers' },
              { text: 'Network Payloads', link: '/docs/client-helpers/network-payloads' },
              { text: 'Block Layers', link: '/docs/client-helpers/block-layers' },
              { text: 'Particle Providers', link: '/docs/client-helpers/particle-providers' },
              { text: 'Entity Renderers', link: '/docs/client-helpers/entity-renderers' },
              { text: 'Tooltips', link: '/docs/client-helpers/tooltips' }
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
              { text: 'Unified Events', link: '/docs/unified-events' },
              { text: 'Modify Item Components', link: '/docs/events/modify-item-components' },
              { text: 'Command Registration', link: '/docs/events/command-registration' },
              { text: 'Player Join', link: '/docs/events/player-join' },
              { text: 'Player Leave', link: '/docs/events/player-leave' },
              { text: 'Player Respawn', link: '/docs/events/player-respawn' }
            ]
          },
          {
            text: 'Client',
            collapsed: true,
            items: [
              { text: 'Unified Client Events', link: '/docs/unified-client-events' },
              { text: 'Start Tick', link: '/docs/client-events/start-tick' },
              { text: 'End Tick', link: '/docs/client-events/end-tick' },
              { text: 'Hotbar Gui', link: '/docs/client-events/hotbar-gui' },
              { text: 'Abstract Screen', link: '/docs/client-events/abstract-screen' }
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
              { text: 'Unified Item Components', link: '/docs/unified-item-components' },
              { text: 'Pack Info', link: '/docs/utilities/pack-info' },
              { text: 'Platform', link: '/docs/utilities/platform' }
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
