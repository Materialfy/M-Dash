<template>
  <v-content>
    <v-app dark id="dashboard-view">
      <core-filter />

      <core-toolbar />

      <core-drawer />

      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-app>
    <core-footer v-if="$route.name !== 'Maps'" />
  </v-content>
</template>

<script>
export default {
  name: 'Dashboard View',
  metaInfo () {
    return {
      title: 'Vuetify Admin Dashboard by ClintOxx'
    }
  }
}
</script>

<style>
#core-view {
  padding-bottom: 100px;
}
</style>
