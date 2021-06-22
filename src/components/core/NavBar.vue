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
    <v-app-bar-nav-icon @click="drawer = true" />
    <v-app-bar-title 
      shrink-on-scroll 
    >
      Vuetify Admin Dash by ClintOxx
    </v-app-bar-title>
    <!-- When placing a single v-spacer before or after the child components, 
    the components will push to the right and left of its container -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
	import { mapMutations, mapGetters } from "vuex";

	export default {
		data: () => ({
			notifications: [
				"Mike, Thanos is coming",
				"5 new avengers joined the team",
				"You're now friends with Capt",
				"Another Notification",
				"Another One - Dj Khalid voice",
			],
			title: "digital dash ",
			responsive: false, //default values for responsiveness
			responsiveInput: false,
      drawer: false,
      group: null,
		}),

		computed: {
			...mapGetters(["authorized"]),
		},

		watch: {
			$route(val) {
				this.title = val.meta.name;
			},
		},

		mounted() {
			this.onResponsiveInverted();
			window.addEventListener("resize", this.onResponsiveInverted);
		},
		beforeDestroy() {
			window.removeEventListener("resize", this.onResponsiveInverted);
		},

		methods: {
			...mapMutations("app", ["setDrawer", "toggleDrawer"]), // chooses which namespaced state to get the mutations from
			onClickBtn() {
				this.setDrawer(!this.$store.state.app.drawer);
			},
			onClick() {
				//
			},
			//setting breakpoints to change page layout depending on screen resolution
			onResponsiveInverted() {
				if (window.innerWidth < 991) {
					this.responsive = true;
					this.responsiveInput = false;
				} else {
					this.responsive = false;
					this.responsiveInput = true;
				}
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