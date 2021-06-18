// Lib imports
import Vue from 'vue'
import axios from 'axios'
import NProgress from "nprogress";



// Sets the default global url used by all of this axios instance's requests
axios.defaults.baseURL = 'http://127.0.0.1:8001/admin/'
axios.defaults.headers.get['Accept'] = 'application/json'

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

// creates a new instance that you will call instead of axios.
export  const rest = axios.create({
  baseURL: 'http://127.0.0.1:8001/admin/',
  timeout: 3000,
});


 rest.interceptors.request.use(
   function(request) {
     // Do something before request is sent
     NProgress.start();
     return request;
   },
   function(error) {
     // Do something with request error
     console.log(error);
     NProgress.done();
     return Promise.reject(error);
  }
);

 // Add a response interceptor
 rest.interceptors.response.use(
   function(response) {
     NProgress.done();
     return response;
   },
   function(error) {
     // Do something with response error
     console.log(error);
     NProgress.done();
     return Promise.reject(error);
   }
 );
    // makes rest common base instance axios the default http handler
    Vue.prototype.$http = rest

 export default{
}

