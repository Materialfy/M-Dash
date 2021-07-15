import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: "mdi",
	},
	theme: {
		dark: false,
		themes: {
			light: {
				primary: "#607D8B",
				secondary: "#90A4AE",
				tertiary: "#ffc107",
				accent: "#26C6DA",
				error: "#f44336",
				warning: "#ff5722",
				danger: "#CE93D8",
				info: "#ff9800",
				success: "#8bc34a",
				general: "#2196F3",
				anchor: "#ffc107",
				background: "#78909C",
			},
			dark: {
				primary: "#424242",
				secondary: "#90A4AE",
				tertiary: "#82B1FF",
				accent: "#26C6DA",
				error: "#f55a4e",
				info: "#00d3ee",
				success: "#5cb860",
				warning: "#ffa21a",
				danger: "#CE93D8",
				general: "#2196F3",
				anchor: "#E0E0E0",
				background: "#757575",
			},
		},
	},
});
