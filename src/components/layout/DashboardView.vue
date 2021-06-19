<!-- This renders any components inside the dashboard with the elements you expect -->
<template>
  <v-main>
    <v-app
      id="dashboard-view"
      dark
    >
      <core-filter />

      <core-toolbar />

      <core-drawer />

      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
      <!-- turns off footer in the maps component -->
      <core-footer v-if="$route.meta.name !== 'Maps'" />
      <v-main />
    </v-app>
  </v-main>
</template>

<script>
//feel free to rename the title
export default {
  name: 'DashboardView',
  metaInfo () {
    return {
      title: 'Vuetify Admin Dashboard by ClintOxx'
    }
  }
}
</script>

<style>

</style>
