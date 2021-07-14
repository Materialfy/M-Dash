
/**
 * Vue Router
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
//import VueAnalytics from 'vue-analytics'
import Router from 'vue-router'
import store from '../store'
import Meta from 'vue-meta'
import NProgress from "nprogress";

// Routes
import paths from './paths'

Vue.use(Router)

// Create a new router
const router = new Router({
  base: '/',
  mode: 'history',
  routes: paths,

  // this allows your SPA to act more like a traditional webpage allowing the user to use back and forward buttons
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

/* Route guard checks to see if you are logged in(has valid auth token), if not reroutes to login, 
"matched.some" looks for any matching props in 'record', its used to find which routes(aka records) have requiresAuth meta data
if they have requireAuth(dashboard routes) you use the "to" objects name prop to direct you to where you were already going
https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
 */
router.beforeEach((to, from, next) => {
  if (
		to.matched.some((record) => record.meta.requiresAuth) &&
		!store.getters.authorized
  ) {
		console.log('authorize for route: ' + store.getters.authorized)
		console.log('next() value: ' + next())
		next('/login') // if the authorized getter returns true, you can continue on to the current route. to.name
  } else if (to.name == 'login' && store.getters.authorized) {
		next('/') //sends to login if auth token isnt true
  } else {
		next() // you called `next('/')` which redirected to the homepage over and over again.
  }
  } 
);

//N progress bar
router.beforeResolve((to, from, next) => {
   if (to.path) {
     NProgress.start();
   }
   next();
 });

 router.afterEach(() => {
   NProgress.done();
 });

Vue.use(Meta)

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
// if (process.env.GOOGLE_ANALYTICS) {
//   Vue.use(VueAnalytics, {
//     id: process.env.GOOGLE_ANALYTICS,
//     router,
//     autoTracking: {
//       page: process.env.NODE_ENV !== 'development'
//     }
//   })
// }

export default router
