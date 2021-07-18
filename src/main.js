import Vue from "vue";
import "./components"; //this is where the auto registered components import
import "./plugins";
// Sync router with store
import { sync } from "vuex-router-sync";
// Application imports
import App from "./App";
import i18n from "@/i18n";
import router from "@/router";
import store from "@/store";
import { genericApi } from './plugins/axios'
import vuetify from './plugins/vuetify'

// makes genericApi common base instance axios the default http handler
Vue.prototype.$http = genericApi;

Vue.use(vuetify);

// Sync store with router
sync(store, router);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	i18n,
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
