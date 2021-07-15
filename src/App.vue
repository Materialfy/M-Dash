<!--  This is set up to have two completely different website layouts 
depending on if you are logged in or not , 
so that is what ExternalView and DashboardView are for. LoginView renders in Externalview-->
<template>

    <transition mode="out-in">
      <router-view />
    </transition>

</template>


<script>
// checks to see if auth jwt token is valid or has expired, if it gets back 401 error log out
import Vue from "vue";
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'

Sentry.init({
	Vue,
	logErrors: true,
	dsn: 'https://6c05050f794343c286b87c6ea643df31@o920341.ingest.sentry.io/5865924',
	integrations: [new Integrations.BrowserTracing()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
})

export default {
  name: 'App',
  created: function () {
    this.$http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          if (this.$store.getters.authorized) {
            this.$store.dispatch("refreshtoken");
          } else {
            return Promise.reject(error);
          }
        } else {
          return Promise.reject(error);
        }
      }
    );
  },

};
</script>

<style lang="scss">
/* *
This is a slightly different form of CSS called SCSS
https://vueschool.io/articles/vuejs-tutorials/globally-load-sass-into-your-vue-js-applications/
None of this stuff is in use but it can be if you want
 {
    --nprogress-color: red !important;
    --nprogress-height: 3px !important;
  } 
// First override all the scss variables you want and then import the files
// $nprogress-color: #29d !default;
// $nprogress-height: 2px !default;
// $nprogress-spinner-opacity: 1 !default;
// $nprogress-spinner-size: 18px !default;
// $nprogress-spinner-stroke-width: 2px !default;
*/
$nprogress-color: #389df1;
$nprogress-height: 4px;
//@import "nprogress/css/nprogress.scss";
// this imports the global styles used in components
//@import "@/styles/index.scss";
/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>

