
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

// Route guard checks to see if you are logged in, if not reroutes to login
//"to" is where you are going, "matched.some" looks for any matching props, it uses it 
//to find which routes(records) have requiresAuth meta data
//this just checks to see if it should check for a auth token or just send you to your route
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.authorized) {
      next() // if you are authorized you can continue on
      next()
    }
    else{
    next('/') //sends to login if auth token isnt true
    }
  } else {
    next()// external routes only: this forwards you to continue to your route outside the dash layout
  }
});

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
