import Vue from 'vue'

// Lib imports
import axios from 'axios'

Vue.prototype.$http = axios

// Sets the default url used by all of this axios instance's requests
axios.defaults.baseURL = 'https://vue-update.firebaseio.com'
axios.defaults.headers.get['Accepts'] = 'application/json'

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
