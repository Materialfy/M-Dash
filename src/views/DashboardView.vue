<!-- This renders any components inside the dashboard with the elements you expect
core-Side-Drawer is core/toolbar.vue etc -->
<template>
<!-- this sets the background color to the background color property of the themes/theme object in plugins/vuetify -->
	<v-app :style="{ background: $vuetify.theme.themes[theme].background }">
		<CoreSidedrawer />
		<CoreNavBar />
		<v-main>
			<v-container fluid>
				<v-fade-transition mode="out-in">
					<router-view />
				</v-fade-transition>
			</v-container>
		</v-main>
		<!-- turns off footer in the maps component -->
		<CoreFooter v-if="$route.meta.name !== 'Maps'" />
	</v-app>
</template>

<script>
	//feel free to rename the title
	export default {
		name: "DashboardView",
		metaInfo() {
			return {
				title: "M-Dashboard by Materialfy.",
			};
		},
		computed: {
			//controls the background color depending on mode
			theme() {
				return this.$vuetify.theme.dark ? "dark" : "light";
			},
		},
	};
</script>

<style></style>
