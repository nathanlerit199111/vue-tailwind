import { createRouter, createWebHistory } from 'vue-router'
import { getCookie } from '@/helpers/getCookie'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/LoginPage.vue')
    },
    {
      path: '/readme',
      name: 'readme',
      component: () => import('@/views/ReadMe.vue')
    },
    {
      path: '/layout',
      component:() => import('@/views/LoggedInLayout.vue'),
      children: [
        {
          title: 'Home',
          path: '/',
          name: 'home',
          component: () => import('../views/HomePage.vue')
        },
        {
          title: 'POS',
          path: '/pos',
          name: 'pos',
          component: () => import('../views/POS.vue')
        },
        {
          title: 'Theme',
          path: '/theme',
          name: 'theme',
          component: () => import('../views/ThemePage.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authToken = getCookie('authToken');
  const isAuthenticated = authToken ? true : false;


  if (isAuthenticated && to.path === '/login') {
    next('/');
  } else if (!isAuthenticated && to.path !== '/login' && to.path !== '/readme') {
    next('/login');
  } else {
    next();
  }
});

export default router
