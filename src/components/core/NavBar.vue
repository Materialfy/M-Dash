<!-- <nav-bar /> in the DashboardView.vue -->
<template>
	<!-- app-bar props below customize bevaviotr and looks -->
	<v-app-bar app color="primary" :clipped-left="true">
		<!-- controls the sidebar colapsing-->
		<v-app-bar-nav-icon @click="drawerButton" />
		<router-link to="/">
			<v-app-bar-title class="ml-2">
				{{ title }}
			</v-app-bar-title>
		</router-link>
		<!-- When placing a single v-spacer before or after the child components, 
		the components will push to the right and left of its container -->

		<v-spacer />
		<MaterialfyNotifications :buttonColor="btnColor" />
		<v-menu nudge-bottom="57">
			<template v-slot:activator="{ on }">
				<v-btn v-on="on" icon :color="btnColor" class="ml3">
					<v-icon>mdi-account</v-icon>
				</v-btn>
			</template>
			<MaterialfyUserSnippet :buttonColor="btnColor" :cardBottom="crdBottom" />
		</v-menu>
		<MaterialfySettings :buttonColor="btnColor" />

		<v-text-field
			v-model="message"
			label="Search.."
			prepend-inner-icon="mdi-magnify"
			outlined
			clearable
			dense
			hide-details
			color="tertiary"
			class="shrink mx-4"
		>
		</v-text-field>
	</v-app-bar>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	export default {
		data() {
			return {
				title: "M-Dashboard by Materialfy.",
				group: null,
				message: null,
				btnColor: "tertiary",
				crdBottom: true,
			};
		},
		computed: {
			...mapGetters(["authorized"]),
		},
		watch: {},
		created() {},
		beforeDestroy() {},
		methods: {
			...mapActions(
				"drawertoggle", // chooses which namespaced state module to get the mutations from
				["drawerOn"]
			),
			drawerButton() {
				// this calls the action drawerOn which then commits the toggle mutation
				this.drawerOn();
			},
		},
	};
</script>

<style>
	.v-app-bar-title__content {
		width: 280px;
	}
</style>
