<template>

    <v-app dark id="dashboard-view">
      <core-filter />
      <v-content>
        <core-toolbar />

        <core-drawer />
      
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
        
        <core-footer v-if="$route.name !== 'Maps'" />
      </v-content>
    </v-app>
 
</template>

<script>
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
#core-view {
  padding-bottom: 100px;
}
</style>
