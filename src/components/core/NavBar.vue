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
    <v-app-bar-nav-icon @click="drawer = true" /> <!-- controls the sidebar colapssing-->
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
			drawerbutton() {
				this.drawerOn();
			},
			onClick() {
        //this.toggleDrawer(this.)
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