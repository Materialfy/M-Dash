<!-- This renders any components inside the dashboard with the elements you expect
core-toolbar is core/toolbar.vue etc -->
<template>
  <v-app id="dashboard-view">
    <CoreNavBar /> 

    <core-sidedrawer />
    <core-filter />

    <v-main>
      <v-container container--fluid>
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-main>
    <!-- turns off footer in the maps component -->
    <core-footer v-if="$route.meta.name !== 'Maps'" />
  </v-app>
</template>

<script>

	//feel free to rename the title
	export default {
		name: "DashboardView",
		metaInfo() {
			return {
				title: "Vuetify Admin Dashboard by ClintOxx",
			};
		},
	};
</script>

<style></style>
