import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'TIL BLOG',
  description: 'Welcome to My TIL-BLOG',
  theme: '@vuepress/theme-default',
  base: '/',
  themeConfig: {
    logo: '/images/commons/logo.png',
    repoLabel: 'TIL-BLOG',
    repo: 'https://github.com/DoGeol/til-blog',
    sidebar: 'auto',
    editLink: false,
    notFound: ['Page Not Founded'],
    navbar: [
      {
        text: 'Group',
        children: [
          {
            text: 'SubGroup',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
        ],
      },
    ],
  },
})
