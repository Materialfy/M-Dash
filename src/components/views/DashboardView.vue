<!-- This renders any components inside the dashboard with the elements you expect
core-toolbar is core/toolbar.vue etc -->
<template>
	<v-app :style="{ background: $vuetify.theme.themes[theme].background }">
		<CoreNavBar />
		<CoreSideDrawer />
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
			//controls the background color
			theme() {
				return this.$vuetify.theme.dark ? "dark" : "light";
			},
		},
	};
</script>

<style></style>
