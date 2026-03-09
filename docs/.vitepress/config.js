import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "佛吉虾养成记",
  description: "VirginiaClaw Growth - 从零开始的 OpenClaw 成长之路 🦐",
  base: '/teclaw-growth/',
  
  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '最新文章',
          items: [
            { text: '欢迎', link: '/posts/welcome' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/techeditor/teclaw-growth' }
    ],

    footer: {
      message: '行胜于言，虾定乾坤 🦐',
      copyright: 'Copyright © 2026 佛吉虾 (VirginiaClaw)'
    },

    search: {
      provider: 'local'
    }
  }
})
