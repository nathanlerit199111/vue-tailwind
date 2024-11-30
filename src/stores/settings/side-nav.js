import { defineStore } from 'pinia';

export const useSideNavigation = defineStore('sideNav', { 
  state: () => ({ 
    isNavOpen: true,
    sideNav: [
      {
        id: 1,
        title: 'Home',
        link: 'home',
        isLinkOut: false,  
        icon: 'bell',
        isPermissionRequired: false,
        rolePermissions: ['Admin'],
        children: []
      },
      {
        id: 2,
        title: 'POS',
        link: 'pos',
        isLinkOut: false,  
        icon: 'bell',
        isPermissionRequired: false,
        rolePermissions: ['Admin'],
        children: []
      },
      {
        id: 3,
        title: 'Theme',
        link: 'theme',
        isLinkOut: false,  
        icon: 'bell',
        isPermissionRequired: false,
        rolePermissions: ['Admin'],
        children: []
      },
      {
        id: 3,
        title: 'Wizard',
        link: 'wizard',
        isLinkOut: false,  
        icon: 'bell',
        isPermissionRequired: false,
        rolePermissions: ['Admin'],
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