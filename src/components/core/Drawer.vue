<template>
	<!-- v-model calls input value method in scripts below -->
	<v-navigation-drawer
		id="app-drawer"
		v-model="inputValue"
		app
		floating
		persistent
		mobile-breakpoint
		width="260"
	>
		<!-- this section below controls the sidebar background image -->
		<v-img :src="image" height="100%">
			<v-layout class="fill-height" tag="v-list" column>
				<v-list-item>
					<!-- this section builds the avatar and info surrounding it -->
					<v-avatar color="white" size="60">
						<img :src="logo" height="35" contain />
					</v-avatar>
					<v-list-item-title class="text-h6">
						Vuetify Admin Dash
					</v-list-item-title>
				</v-list-item>
				<v-divider />
				<v-list-item v-if="responsive">
					<v-text-field
						class="purple-input search-input"
						label="Search..."
						color="purple"
					/>
				</v-list-item>
				<!-- this section builds the links by use a for loop and iterating through links section
        the v-for iterates through the links in data(), i stands for index
        we use the paths in the links array   -->
				<v-list-item
					v-for="(link, i) in links"
					:key="i"
					:to="link.to"
					:active-class="color"
					class="v-list-item"
				>
					<!-- this builds the list of links by iterating, uses it to get correct icons/text too -->
					<v-list-item-action>
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-title v-text="link.text" />
				</v-list-item>
			</v-layout>
		</v-img>
	</v-navigation-drawer>
</template>

<script>
	// Utilities
	import { mapMutations, mapState } from "vuex";

	export default {
		data: () => ({
			logo: "./img/redditicon.png",
			links: [
				{
					to: "/",
					icon: "mdi-view-dashboard",
					text: "Dashboard",
				},
				{
					to: "/user-profile",
					icon: "mdi-account",
					text: "User Profile",
				},
				{
					to: "/table-list",
					icon: "mdi-clipboard-outline",
					text: "Table List",
				},
				{
					to: "/user-tables",
					icon: "mdi-clipboard-outline",
					text: "CRUD Tables",
				},
				{
					to: "/typography",
					icon: "mdi-format-font",
					text: "Typography",
				},
				{
					to: "/icons",
					icon: "mdi-chart-bubble",
					text: "Icons",
				},
				{
					to: "/maps",
					icon: "mdi-map-marker",
					text: "Maps",
				},
				{
					to: "/notifications",
					icon: "mdi-bell",
					text: "Notifications",
				},
			],
			responsive: false,
		}),
		computed: {
			...mapState("drawertoggle", ["image", "color"]),
			inputValue: {
				get() {
					return this.$store.state.drawertoggle.drawer;
				},
				set(val) {
					this.setDrawer(val);
				},
			},
			items() {
				return this.$t("Layout.View.items");
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
			...mapMutations("drawertoggle", ["setDrawer", "toggleDrawer"]),
			onResponsiveInverted() {
				if (window.innerWidth < 991) {
					this.responsive = true;
				} else {
					this.responsive = false;
				}
			},
		},
	};
</script>

<style lang="scss">
	#app-drawer {
		.v-list__tile {
			border-radius: 4px;

			&--buy {
				margin-top: auto;
				margin-bottom: 17px;
			}
		}

		.v-image__image--contain {
			top: 9px;
			height: 60%;
		}

		.search-input {
			margin-bottom: 30px !important;
			padding-left: 15px;
			padding-right: 15px;
		}
	}
</style>
