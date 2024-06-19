import { createRouter, createWebHistory } from 'vue-router';
import { getCookie } from '@/helpers/getCookie';

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
      component: () => import('@/views/AuthPages/ReadMe.vue')
    },
    {
      path: '/snippets',
      name: 'snippets',
      component: () => import('@/views/SnippetPage.vue')
    },
    {
      path: '/:catchAll(.*)', // Catch all unmatched routes
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    },
    {
      path: '/',
      component: () => import('@/views/AuthPages/AuthPagesLayout.vue'),
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          title: 'Home',
          path: '/home',
          name: 'home',
          component: () => import('../views/AuthPages/HomePage.vue')
        },
        {
          title: 'POS',
          path: '/pos',
          name: 'pos',
          component: () => import('../views/AuthPages/POS.vue')
        },
        {
          title: 'Theme',
          path: '/theme',
          name: 'theme',
          component: () => import('../views/AuthPages/ThemePage.vue')
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authToken = getCookie('authToken');
  const isAuthenticated = !!authToken;

  if (isAuthenticated && to.path === '/login') {
    next('/');
  } else if (!isAuthenticated && !['/login', '/readme'].includes(to.path)) {
    next('/login');
  } else {
    next();
  }
});

export default router;
