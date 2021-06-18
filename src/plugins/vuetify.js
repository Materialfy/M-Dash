import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
//import theme from './plugins/theme'
import theme from './theme'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify, {
    iconfont: 'mdi',
    theme
  })

export default new Vuetify({
});
