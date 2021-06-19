import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
//import theme from './plugins/theme'
import theme from './theme'
//import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify, {
      theme
  })

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});
