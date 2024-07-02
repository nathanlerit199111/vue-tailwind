const pages = [
  {
    id: 1,
    page: 'Home Page',
    slug: 'home-page',
    isWithPermission: true,
    role_permission: [
      { id: 1, name: 'Super Admin', slug: 'super-admin' },
      { id: 2, name: 'Admin', slug: 'admin' },
      { id: 3, name: 'Community Partner', slug: 'community-partner' },
    ],
    children: [
      {
        id: 2,
        page: 'Home Page - Create',
        slug: 'home-page-create',
        isWithPermission: true,
        role_permission: [
          { id: 1, name: 'Super Admin', slug: 'super-admin' },
          { id: 2, name: 'Admin', slug: 'admin' },
        ]
      },
      {
        id: 2,
        page: 'Home Page - View',
        slug: 'home-page-create',
        isWithPermission: true,
        role_permission: [
          { id: 1, name: 'Super Admin', slug: 'super-admin' },
          { id: 2, name: 'Admin', slug: 'admin' },
          { id: 3, name: 'Community Partner', slug: 'community-partner' },
        ]
      }
    ]
  }
]