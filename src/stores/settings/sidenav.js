import { defineStore } from 'pinia';

export const useSideNavigation = defineStore('sideNav', { 
  state: () => ({ 
    isNavOpen: true,
    side_nav: [
      {
        id: 1,
        title: 'Home',
        link: 'home',
        isLinkOut: false,  
        icon: 'Bell',
        isWithPermission: false,
        role_permissions: [],
        children: []
      },
      {
        id: 2,
        title: 'POS',
        link: 'pos',
        isLinkOut: false,  
        icon: 'Bell',
        isWithPermission: false,
        role_permissions: [],
        children: []
      },
      {
        id: 3,
        title: 'Theme',
        link: 'theme',
        isLinkOut: false,  
        icon: 'Bell',
        isWithPermission: false,
        role_permissions: [],
        children: []
      },
    ]
  }),
  actions: {
    toggleSideNav() { 
      this.isNavOpen ^= true
    }
  }
});