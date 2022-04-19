const { readdirSync } = require('fs')
const blogPath = `${__dirname}/..`

function getFolderNames(parent: String): Object[] {
  let path = blogPath
  if (parent) {
    path = `${blogPath}/${parent}`
  }
  return readdirSync(path, { withFileTypes: true }).filter(
    (dirent) => dirent.isDirectory() && dirent.name.indexOf('.') < 0,
  )
}

export function setLnbMenus(): Object {
  // @ts-ignore
  const navList = getFolderNames().map((dirent: { name: String }) => dirent.name)
  const lnbMenus = navList.reduce((lnb, nav) => {
    lnb[`/${nav}/`] = [
      {
        text: 'VuePress Reference',
        collapsible: true,
        children: [],
      },
    ]
    return lnb
  }, {})
  console.log(lnbMenus)
  return lnbMenus
}

export function setNavBar(): Object[] {
  // @ts-ignore
  const navList = getFolderNames().map((dirent: { name: String }) => {
    return {
      text: dirent.name,
      link: `/${dirent.name}/`,
    }
  })
  return [{ text: 'home', link: '/' }, ...navList]
}
