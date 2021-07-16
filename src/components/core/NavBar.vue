<!-- @format -->

<!-- <nav-bar /> in the DashboardView.vue -->
<template>
	<!-- app-bar props below customize bevaviotr and looks -->
	<v-app-bar app color="primary" :clipped-left="true">
		<!-- controls the sidebar colapsing-->
		<v-app-bar-nav-icon @click="drawerButton" />
		<router-link to="/">
			<v-app-bar-title>
				{{ title }}
			</v-app-bar-title>
		</router-link>
		<v-divider class="mx-4" inset vertical></v-divider>
		<!-- When placing a single v-spacer before or after the child components, 
		the components will push to the right and left of its container -->
		<v-spacer />
		<MaterialfyNotifications :buttonColor="btnColor" />
		<!-- userSnippet.vue menu -->

		<v-menu nudge-bottom="57" :close-on-content-click="false">
			<!-- recieving the "on" event lsitener -->
			<template v-slot:activator="{ on }">
				<v-avatar size="40" v-on="on" class="mx-2">
					<img :src="getAvatar" alt="User Avatar" />
				</v-avatar>
			</template>
			<MaterialfyUserSnippet />
		</v-menu>

		<MaterialfySettings :buttonColor="btnColor" />
	</v-app-bar>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

	export default {
		name: 'AppBar',
		data() {
			return {
				//if the app is on mobile devices it changes the title
				title: this.$vuetify.breakpoint.mobile ? ' M-Dashboard' : 'M-Dashboard by Materialfy',
				group: null,
				message: null,
				btnColor: 'tertiary',
				crdBottom: true,
			}
		},
		computed: {
			...mapGetters(['authorized', 'getAvatar']),
		},
		watch: {},
		created() {},
		beforeDestroy() {},
		methods: {
			...mapActions(
				'drawertoggle', // chooses which namespaced state module to get the mutations from
				['drawerOn']
			),
			drawerButton() {
				// this calls the action drawerOn which then commits the toggle mutation
				this.drawerOn()
			},
		},
	}
</script>

<style>
	.v-app-bar-title__content {
		width: 280px;
	}
</style>
