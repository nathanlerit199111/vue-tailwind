import { useSideNavigation } from '@/stores/settings/sideNav';
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
  let content = 'titiw'

  nav.side_nav.forEach((data, key) => {
    if (data.link == route) { 
      content = data
    }
  })
  return content;
}