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
				primary: "#4caf50",
				secondary: "#4caf50",
				tertiary: "#495057",
				accent: "#82B1FF",
				error: "#f55a4e",
				info: "#00d3ee",
				success: "#5cb860",
				warning: "#ffa21a",
				general: "#2196F3",
			},
			dark: {
				primary: "#40C4FF",
				secondary: "#E0E0E0",
				tertiary: "#495057",
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
