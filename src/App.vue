<!--  This is set up to have two completely different website layouts 
depending on if you are logged in or not , 
so that is what ExternalView and DashboardView are for. LoginForm renders in Externalview-->
<template>
  <v-app id="app">
    <transition mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>


<script>
// checks to see if auth jwt token is valid or has expired, if it gets back 401 error log out
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

$nprogress-color: #389df1;
$nprogress-height: 4px;
//@import "nprogress/css/nprogress.scss";
// this imports the global styles used in components

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>

