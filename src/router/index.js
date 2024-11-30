import { createRouter, createWebHistory } from 'vue-router';
import { getCookie } from '@/helpers/get-cookie';
import { checkUserPermision, getRouteCheckPermission } from '@/helpers/permission-validation';

import { meta, setMeta } from "./meta";

/**
 * Route configuration
 * 
 * Each route object defines a path, a component, and optionally meta properties
 * for route-specific settings like authentication requirements.
 */

const routes =  [
    {
      path: '/login',
      components: {
        default: () => import('@/layout/Base.vue'),
      },
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Login/LoginPage.vue'),
          meta: {
            ...meta['login']
          }
        },
        {
          path: '/readme',
          name: 'readme',
          component: () => import('@/views/ReadMe.vue'),
          meta: {
            ...meta['login']
          }
        },
        {
          path: '/snippets',
          name: 'snippets',
          component: () => import('@/views/SnippetPage.vue'),
          meta: {
            ...meta['login']
          }
        },
      ]
    },
    {
      path: '/',
      component: () => import('@/layout/Admin.vue'),
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          title: 'Home',
          path: '/home',
          name: 'home',
          component: () => import('../views/AuthPages/HomePage.vue'),
          meta: {
            ...meta['home']
          }
        },
        {
          title: 'POS',
          path: '/pos',
          name: 'pos',
          component: () => import('../views/AuthPages/POS.vue'),
          meta: {
            ...meta['home']
          }
        },
        {
          title: 'Theme',
          path: '/theme',
          name: 'theme',
          component: () => import('../views/AuthPages/ThemePage.vue'),
          meta: {
            ...meta['home']
          }
        },
        {
          title: 'Wizard',
          path: '/wizard',
          name: 'wizard',
          component: () => import('../views/AuthPages/FormWizardPage.vue'),
          meta: {
            ...meta['home']
          }
        }
      ]
    },
    {
      path: '/:catchAll(.*)', // Catch all unmatched routes
      components: {
        default: () => import('@/layout/Base.vue'),
      },
      children: [
        {
          path: "/:catchAll(.*)",
          name: 'NotFound',
          component: () => import('@/views/ErrorPages/NotFound.vue'),
          meta: {
            ...meta['error-404']
          }
        }
      ]
    },
    {
      path: '/error-403', // Catch all unmatched routes
      components: {
        default: () => import('@/layout/Base.vue'),
      },
      children: [
        {
          path: "/error-403",
          name: 'forbidden-403',
          component: () => import('@/views/ErrorPages/Forbidden.vue'),
          meta: {
            ...meta['error-403']
          }
        }
      ]
    },
  ];

/**
 * Create the router instance
 */
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes
})

// Pages accessible without logging in
const notLogin = [
	"login",
  "readme",
  "snippets",
  "NotFound", //error-404
	// "error-400",
	// "error-401",
	// "error-403",
	// "error-429",
	// "error-42069",
	// "error-500",
	// "error-504",
];

// Pages that require user to be logged in
const isLogin = [
	"home",
  "pos",
  "theme",
];

router.beforeEach((to, from, next) => {
	document.title = meta[to.name] ? meta[to.name].title : ''; //Set page Meta

	const authToken = getCookie('authToken'); 
	const isAuthenticated = authToken ? true : false;

	setMeta(to, from);
	if (isAuthenticated) {
    const userProfile = JSON.parse(getCookie('userProfile'))

    let nav = getRouteCheckPermission(to.name)
		if(to.name == 'login'){
			next('/'); // If user try to access login routes and isAuthenticated
		} else {
      if(nav.isPermissionRequired){
        let isAllowed = checkUserPermision(nav.rolePermissions, userProfile.role, true)
        if(isAllowed){
          next()
        } else {
          next('/error-403')
        }
      } else {
        next(); // Access page required auth
      }
		}
	} else if (!isAuthenticated) {
		if (isLogin.includes(to.name)) {
			next('/login'); // if user try to access required auth page without isAuthenticated
		} else {
			next(); // Access page not required auth
		}
  }
});

export default router;
