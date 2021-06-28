<!-- <nav-bar /> in the DashboardView.vue -->
<template>
	<!-- app-bar props below customize bevaviotr and looks -->
	<v-app-bar id="core-toolbar" app color="primary" :clipped-left="true" >
		<!-- controls the sidebar colapsing-->
		<v-app-bar-nav-icon @click="drawerButton" />
		<router-link to="/">
			<v-app-bar-title  class="text-no-wrap" style="">
				{{ title }}
			</v-app-bar-title>
		</router-link>
		<!-- When placing a single v-spacer before or after the child components, 
		the components will push to the right and left of its container -->

		<v-spacer />
		<MaterialfyNotifications 
			buttonColor="tertiary" class ="ml3"
		/>
		<router-link to="user-profile">
			<v-btn  icon :color="buttonColor" class ="ml3">
				<v-icon>mdi-account</v-icon>
			</v-btn>
		</router-link>
		<MaterialfySettings 
			buttonColor="tertiary"  
		/>
		<v-btn  icon :color="buttonColor">
			<v-icon @click="logout">mdi-power</v-icon>
		</v-btn>

		<v-text-field
			v-model="message"
			label="Search.."
			prepend-inner-icon="mdi-magnify"
			outlined
			clearable
			dense
			hide-details
			color = "tertiary"
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
				title: "V.Dashboard by Materialfy.",
				group: null,
				message: null,
				buttonColor: "tertiary",
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
			logout: function () {
				this.$store.dispatch("logout").then(() => {
					this.$router.push("/");
				});
			},
		},
	};
</script>

<style>

</style>
