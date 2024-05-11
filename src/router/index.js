import { createRouter, createWebHistory } from 'vue-router'
import { getCookie } from '@/helpers/getCookie'
import LoginPage from '../views/Login/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import POS from '../views/POS.vue'
import ReadMe from '../views/ReadMe.vue'
import ThemePage from '../views/ThemePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component:LoginPage
    },
    {
      path: '/readme',
      name: 'readme',
      component: ReadMe
    },
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/pos',
      name: 'pos',
      component: POS
    },
    {
      path: '/theme',
      name: 'theme',
      component: ThemePage
    },
    // {
    //   path: '/example',
    //   name: 'example',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/Example.vue')
    // }
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
