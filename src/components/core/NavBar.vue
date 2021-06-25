<!-- <nav-bar /> in the DashboardView.vue -->
<template>
	<!-- app-bar props below customize bevaviotr and looks -->
	<v-app-bar
    id="core-toolbar"
    app
    absolute
	color="secondary"
    elevate-on-scroll
	scroll-target="#scrolling-techniques-7"
	>
		<!-- controls the sidebar colapsing-->
		<v-app-bar-nav-icon 
			@click="drawerButton" 
		/>
		<router-link to="/" >
			<v-app-bar-title 
				shrink-on-scroll 
			>
				{{ title }}
			</v-app-bar-title>
		</router-link>
		<!-- When placing a single v-spacer before or after the child components, 
		the components will push to the right and left of its container -->

		<v-spacer /> 
		<v-text-field 
			v-model= "message"
			label="Search here.."
			prepend-inner-icon="mdi-magnify"
			outlined
			clearable
			dense
			hide-details
		>
		</v-text-field>
		<v-badge
			:content="notificationNum"
			:value="notificationNum"
			color ="blue"
			overlap
		>
			<v-btn
				elevation ="2"
				icon
			>
				<v-icon>mdi-bell</v-icon>
			</v-btn>
		</v-badge>
		<v-btn 
			elevation ="2"
			icon
		>
			<v-icon>mdi-account</v-icon>
		</v-btn>
		<v-btn
			elevation="2"
			icon
		>
			<v-icon>mdi-cog</v-icon>
		</v-btn>
		<v-btn
			elevation ="2"
			icon
		>
			<v-icon @click="logout">mdi-power</v-icon>
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
			notificationNum: 3
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