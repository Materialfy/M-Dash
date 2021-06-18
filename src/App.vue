<!--  This is set up this way since i wanted to have two completely different website layouts 
depending on if you are logged in or not , 
so that is what ExternalView and DashboardView are for. LoginForm renders in Externalview-->
<template>
  <main>
    <transition mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<script>
// checks to see if auth jwt token is valid or has expired, if it gets back 401 error log out
export default {
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
	@import "@/styles/index.scss";
	/* Remove in 1.2 */
	.v-datatable thead th.column.sortable i {
		vertical-align: unset;
	}
</style>



d th.column.sortable i {
  vertical-align: unset;
}
</style>