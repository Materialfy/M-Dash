import Vue from 'vue'
import Vuetify from 'vuetify'
import theme from './theme'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

// This is here just in case you prefer to have all your plugins in a folder like this, otherwise its currently unused

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme
})
