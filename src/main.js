import Vue from 'vue'
import './components' //this is where the auto registered components import
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import rest from './plugins/axios'
//import NProgress from "nprogress";
import vuetify from './plugins/vuetify'

Vue.use(rest)


// // makes axios the default http handler
// Vue.prototype.$http = axios
// // Sets the default global url used by all of this axios instance's requests


// axios.defaults.baseURL = 'http://127.0.0.1:8001/admin/'
// axios.defaults.headers.get['Accept'] = 'application/json'

// const token = localStorage.getItem('token')
// if (token) {
//   axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
// }

// // research if this is used anywhere
//  axios.interceptors.request.use(
//    function(request) {
//      // Do something before request is sent
//      NProgress.start();
//      return request;
//    },
//    function(error) {
//      // Do something with request error
//      console.log(error);
//      NProgress.done();
//      return Promise.reject(error);
//   }
// );

//  // Add a response interceptor
//  axios.interceptors.response.use(
//    function(response) {
//      NProgress.done();
//      return response;
//    },
//    function(error) {
//      // Do something with response error
//      console.log(error);
//      NProgress.done();
//      return Promise.reject(error);
//    }
//  );

// Sync store with router
sync(store, router)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
