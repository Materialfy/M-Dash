<!-- This is the file that will render any external pages you do not want inside the dash, like login form-->
<template>
  <v-main>
    <v-app id="ExternalView">
      <transition mode="out-in">
        <router-view />
      </transition>
    </v-app>
  </v-main>
</template>

<script>
	export default {
		name: "ExternalView",
		metaInfo() {
			return {
				title: "Vuetify Admin Dashboard by ClintOxx",
			};
		},
	};
</script>

<style></style>
