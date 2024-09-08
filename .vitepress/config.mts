import { defineConfig } from 'vitepress'

const color = process.env.VITE_COLOR

export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  vite: {
    define: {
      'process.env.VITE_COLOR': JSON.stringify(color),
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
