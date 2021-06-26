<!-- <nav-bar /> in the DashboardView.vue -->
<template>
	<!-- app-bar props below customize bevaviotr and looks -->
	<v-app-bar
    id="core-toolbar"
    app
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
		
		<v-spacer />
		<v-menu
			close-on-content-click
			auto
			attach="notifbtn"
		>
			<!-- this v-menu and activator is used to control the v-list showing -->
			<template v-slot:activator="{ on, attrs }">
				<v-badge
					:content="notificationNum"
					:value="notificationNum"
					color ="blue"
					overlap
					offset-y= 23px
				>
					<v-btn
						id = "notifbtn"
						elevation ="2"
						icon
						v-bind="attrs"
						v-on="on"
					>
						<v-icon>mdi-bell</v-icon>
					</v-btn>
				</v-badge>
				<v-list>
					<template 
						v-for="(value, index) in notifications"
					>
						<v-list-item
							:key="index"
						>
						<v-list-item-title> {{ index + 1 + ". "+ "Value: " + value.title }}</v-list-item-title>
						</v-list-item>
					</template>
					<v-list-item>
						<router-link to="notifications">
							<v-btn>
								View all notifications
							</v-btn>
						</router-link>
					</v-list-item>
				</v-list>
			</template>
		</v-menu>
		<router-link to="user-profile">
		<v-btn 
			elevation ="2"
			icon
		>
			<v-icon>mdi-account</v-icon>
		</v-btn>
		</router-link>
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
		data () {
			return {

			notifications: [],
			title: "Vuetify Admin Dash by ClintOxx",
			group: null,
			notificationNum: null,
			notificationLimit: 5,
			message: null
			}
		},

		computed: {
			...mapGetters(["authorized",'getNotifications']),

		},

		watch: {
		},

		created() {
			// sets the notification prop used in the v-badge
			this.notifications = this.getNotifications
			// gets the noticiation amount based on the length of the notificaitons array
			this.notificationNum = this.notifications.length
			console.log("this.notifcation:  " , this.notifications)
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