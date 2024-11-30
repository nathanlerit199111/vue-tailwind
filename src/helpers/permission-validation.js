import { useSideNavigation } from '@/stores/settings/side-nav'
export function checkUserPermision( permissions, userInfo, isRequired = false ) {
  let isAllowed = false
  if(isRequired){
    isAllowed = permissions.some( permission => userInfo.role.includes( permission ) )
    return isAllowed
  }
  return true;
}

export function getRouteCheckPermission(route) {
  const nav = useSideNavigation()
  let content = ''

  nav.sideNav.forEach((data, key) => {
    if (data.link == route) { 
      content = data
    }
  })
  return content;
}