import axios from 'axios'
 const token = localStorage.getItem('token') || ''
 axios.defaults.headers.common = {
   'Authorization': token ? `Bearer ${JSON.parse(token)}` : null
 }
 axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.baseURL = 'http://127.0.0.1:8001/admin/'
export default {
  install (Vue) {
    Vue.prototype.$http = axios
  }
}
