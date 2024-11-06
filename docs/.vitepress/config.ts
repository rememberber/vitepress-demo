// https://vitepress.dev/reference/site-config
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/default-theme-config
export default defineConfig({
  title: "我的文档",
  description: "使用 VitePress 构建的文档站点",
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '什么是 VitePress?', link: '/guide/' },
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    logo: '/logo.svg'
  }
})