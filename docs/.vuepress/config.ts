import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'TIL BLOG by PDG',
  description: 'Welcome to My TIL-BLOG',
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.png',
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      '/bar/README.md',
    ],
  },
})
