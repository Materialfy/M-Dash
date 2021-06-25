<!-- <nav-bar /> in the DashboardView.vue -->
<template>
  <!-- app-bar props below customize bevaviotr and looks -->
  <v-app-bar
    id="core-toolbar"
    app
    absolute
    dense
    elevate-on-scroll
  >
	<!-- controls the sidebar colapssing-->
    <v-app-bar-nav-icon 
      @click="drawerButton" 
    /> 
    <v-app-bar-title 
      shrink-on-scroll 
    >
      {{ title }}
    </v-app-bar-title>
    <!-- When placing a single v-spacer before or after the child components, 
    the components will push to the right and left of its container -->
 
    <v-spacer /> 
    <v-btn
      elevation="2"
      icon
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
	<CoreSidedrawer />
  </v-app-bar>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	export default {
		data: () => ({
			notifications: [
				"Mike, Thanos is coming",
				"5 new avengers joined the team",
				"You're now friends with Capt",
				"Another Notification",
				"Another One - Dj Khalid voice",
			],
			title: "Vuetify Admin Dash by ClintOxx",
			group: null,
			//drawerButton: false
		}),

		computed: {
			...mapGetters(["authorized"]),
		},

		watch: {
		},

		mounted() {
		},
		beforeDestroy() {
		},

		methods: {
			...mapActions(
				"drawertoggle",// chooses which namespaced state module to get the mutations from
				["drawerOn"]
        ), 
			drawerButton() { // this calls the action drawerOn which then commits the toggle mutation
				this.drawerOn();
			},
			logout: function () {
				this.$store.dispatch("logout").then(() => {
					this.$router.push("/");
				});
			},
		},
	};
</script>

<style>
	#core-toolbar a {
		text-decoration: none;
	}
</style>