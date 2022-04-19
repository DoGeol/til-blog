import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { setNavBar, setLnbMenus } from './utils'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'TIL BLOG',
  description: 'Welcome to My TIL-BLOG',
  theme: '@vuepress/theme-default',
  base: '/til-blog/',
  themeConfig: {
    logo: '/images/commons/logo.png',
    repoLabel: 'TIL-BLOG',
    repo: 'https://github.com/DoGeol/til-blog',
    editLink: false,
    notFound: ['Page Not Founded'],
    navbar: setNavBar(),
    sidebar: setLnbMenus(),
  },
})
