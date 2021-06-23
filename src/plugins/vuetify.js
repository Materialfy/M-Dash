import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import "@mdi/font/css/materialdesignicons.css"; 
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
  // change theme properties, dark mode is on by default
  // Will dynamically change when toggling $vuetify.theme.dark
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#4caf50',
        secondary: '#4caf50',
        tertiary: '#495057',
        accent: '#82B1FF',
        error: '#f55a4e',
        info: '#00d3ee',
        success: '#5cb860',
        warning: '#ffa21a',
        general: '#2196F3'
      },
      dark: {
        primary: '#4caf50',
        secondary: '#4caf50',
        tertiary: '#495057',
        accent: '#82B1FF',
        error: '#f55a4e',
        info: '#00d3ee',
        success: '#5cb860',
        warning: '#ffa21a',
        general: '#2196F3'
      }
    }
  } 
  })

export default new Vuetify({
  icons: { // select from different types of icon libraries, can be moved above 
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});
