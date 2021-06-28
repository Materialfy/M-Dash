import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import "@mdi/font/css/materialdesignicons.css"; 
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

const vuetify = new Vuetify({
	theme: {
		dark: false,
		themes: {
			light: {
      primary: "#00bcd4",
      secondary:" #ffc107",
			tertiary: "#E0E0E0",
      accent: '#607d8b',
      error: '#f44336',
      warning: '#ff5722',
      info: '#2196f3',
      success: '#4caf50',
				general: "#2196F3",
			},
			dark: {
				primary: "##FF6D00",
				secondary: "#40C4FF",
				tertiary: "#E0E0E0",
				accent: "#82B1FF",
				error: "#f55a4e",
				info: "#00d3ee",
				success: "#5cb860",
				warning: "#ffa21a",
				general: "#2196F3",
			},
		},
	},
	icons: {
		// select from different types of icon libraries, can be moved above
		iconfont: "mdi", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
	},
});

export default vuetify;
