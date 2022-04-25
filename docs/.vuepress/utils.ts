const { readdirSync } = require('fs')
const blogPath = `${__dirname}/..`

function getFileNames({ parent, type = 'all' }: { parent: String; type: String }): Object[] {
  let path = blogPath
  if (parent) {
    path = `${blogPath}/${parent}`
  }

  return readdirSync(path, { withFileTypes: true }).filter((dirent) => {
    if (type === 'file') {
      return dirent.isFile() && dirent.name.indexOf('.') !== 0
    } else if (type === 'folder') {
      return dirent.isDirectory() && dirent.name.indexOf('.') !== 0
    } else {
      return dirent.name.indexOf('.') !== 0
    }
  })
}

export function setLnbMenus(): Object {
  // @ts-ignore
  const navList = getFileNames({ type: 'folder' }).map((dirent: { name: String }) => dirent.name)
  const lnbMenus = navList.reduce((lnb, nav) => {
    lnb[`/${nav}/`] = getFileNames({ parent: nav, type: 'folder' }).map((sub: { name: String }) => {
      return {
        text: sub.name,
        collapsible: true,
        children: getFileNames({ parent: `${nav}/${sub.name}`, type: 'file' })
          .map((file: { name: String }) => `/${nav}/${sub.name}/${file.name}`)
          .sort((a, b) => {
            return a > b ? -1 : 1
          }),
        // children: getFileNames({ parent: `${nav}/${sub.name}`, type: 'file' }).map(
        //   (file: { name: String }) => {
        //     return {
        //       text: `${file.name.split('.md')[0]}`,
        //       link: `/${nav}/${sub.name}/${file.name}`,
        //     }
        //   },
        // ),
      }
    })
    return lnb
  }, {})
  return lnbMenus
}

export function setNavBar(): Object[] {
  // @ts-ignore
  return getFileNames({ type: 'folder' }).map((dirent: { name: String }) => {
    return {
      text: dirent.name.toUpperCase(),
      link: `/${dirent.name}/`,
    }
  })
}
