import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
//import theme from './plugins/theme'
import theme from './theme'
import "@mdi/font/css/materialdesignicons.css"; 
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify, {
      theme // select theme like icons below
  })

export default new Vuetify({
  icons: { // select from different types of icon libraries 
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});
