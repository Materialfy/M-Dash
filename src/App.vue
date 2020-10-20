<template>
  <transition mode="out-in">
    <router-view />
  </transition>
</template>

<style lang="scss">
/* * {
    --nprogress-color: red !important;
    --nprogress-height: 3px !important;
  } */

// First override all the scss variables you want and then import the files
// $nprogress-color: #29d !default;
// $nprogress-height: 2px !default;
// $nprogress-spinner-opacity: 1 !default;
// $nprogress-spinner-size: 18px !default;
// $nprogress-spinner-stroke-width: 2px !default;
$nprogress-color: #389df1;
$nprogress-height: 4px;

@import "nprogress/css/nprogress.scss";
@import "@/styles/index.scss";

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
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
