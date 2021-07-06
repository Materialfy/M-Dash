<template>
	<v-menu
		:close-on-content-click="false"
		bottom
		float-left
		min-width="300"
		max-width="300"
		nudge-left="130"
		nudge-bottom="60"
		offset-x
		transition="slide-y-transition"
	>
		<template #activator="{ on }">
			<v-btn
				v-on="on"
                icon
				:color="buttonColor"
			>
				<v-icon > mdi-cog </v-icon>
			</v-btn>
		</template>
		<v-card color="primary">
			<v-container grid-list-xl>
				<v-layout wrap>
					<v-flex xs12>
						<div class="text-center text-body-2 text-uppercase">
							Theme Accent Color Picker
						</div>

						<v-layout justify-center>
							<v-avatar
								v-for="themecolor in colors"
								:key="themecolor"
								:color="themecolor"
								active-class="deep-purple--text text--accent-4"
								:class="{'ma-1': true, 'highlighted': activeColor}"
								size="23"
								@click="setColor(themecolor)"
							/>
						</v-layout>
						<v-divider class="mt-3" />
					</v-flex>
					<v-flex xs12>
						<div class="text-center text-body-2 text-uppercase">
							Theme Secondary Color Picker
						</div>

						<v-layout justify-center>
							<v-avatar
								v-for="themecolor in colors"
								:key="themecolor"
								:color="themecolor"
								class="ma-1"
								size="23"
								@click="setColor2(themecolor)"
							/>
						</v-layout>
						<v-divider class="mt-3" />
						<v-toolbar-title class="text-center">Dark Mode Toggle</v-toolbar-title>
						<v-layout justify-center>
							<!--!<v-btn v-on:click="$emit('persistant-drawer')" label="persistant-drawer" />-->
							<v-switch v-model="$vuetify.theme.dark" :label="toggleText()" color="accent"  />
						</v-layout>
						<v-divider class="mt-3" />
					</v-flex>
					<v-flex xs12>
						<div class="text-center text-body-2 text-uppercase">Sidebar Background Images</div>
					</v-flex>
					<v-flex v-for="img in images" :key="img" xs3>
						<v-img
							:class="[image === img ? 'image-active' : '']"
							:src="img"
							height="120"
							@click.native="setImage(img)"
						/>
					</v-flex>
					<v-flex xs12>
						<v-btn
							href="https://github.com/ClintOxx/vuetify-admin-dashboard"
							target="_blank"
							color="success"
							block
						>
							Github
						</v-btn>
					</v-flex>
					<v-flex xs12>
						<v-btn
							href="https://github.com/ClintOxx/vuetify-admin-dashboard"
							target="_blank"
							class="white--text"
							color="accent"
							block
						>
							Documentation
						</v-btn>
					</v-flex>
					<v-flex xs12>
						<div class="text-center text-body-2 text-uppercase">
							<div class="">Thank You for Sharing!</div>

							<div>
								<v-btn
									href="https://twitter.com/"
									target="_blank"
									color="cyan"
									class="v-btn-twitter"
									fab
									icon
									small
									rounded
								>
									<v-icon>mdi-twitter</v-icon>
								</v-btn>
							</div>
						</div>
					</v-flex>
				</v-layout>
			</v-container>
		</v-card>
	</v-menu>
</template>

<script>
	// Utilities
	import { mapMutations, mapState } from "vuex";
	import { mdiAccount, mdiCog } from "@mdi/js";
	export default {
		data: () => ({
			colors: ["#F44336", "#AB47BC", "#3949AB", "#1E88E5", "#26C6DA", "#43A047", "#FF9100"],
			iconSelect: [mdiAccount, mdiCog], // lets you import just the icons you need and switch by changing index
			activeColor: null,
			images: [
				// eslint-disable-next-line no-undef
				require("@/assets/img/first.png"),
				// eslint-disable-next-line no-undef
				require("@/assets/img/second.png"),
				// eslint-disable-next-line no-undef
				require("@/assets/img/third.png"),
				"",
			],
		}),
		props: ['buttonColor'],

		computed: {
			...mapState("drawertoggle", ["image", "color"]),
			colorPicker() {
				return this.color;
			},
		},

		methods: {
		...mapMutations("drawertoggle", ["setImage"]),
		setColor(color) {
			this.$store.state.drawertoggle.color = color;
			this.$vuetify.theme.themes.light.tertiary = color
			this.$vuetify.theme.themes.dark.tertiary = color
			this.$vuetify.theme.themes.light.anchor = color
			this.$vuetify.theme.themes.dark.anchor = color
			if (this.$vuetify.theme.themes.light.tertiary == color)
				return this.activeColor = true
		},
		setColor2(color) {
			this.$store.state.drawertoggle.color = color;
			this.$vuetify.theme.themes.light.secondary = color
			this.$vuetify.theme.themes.dark.secondary = color
		},
		toggleTheme() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;      
		},
		toggleText() {
			if(this.$vuetify.theme.dark) {
				return "Dark Mode On"
			}
			else return "Light Mode On"
		}
		},
	};
</script>

<style lang="scss">
	.v-avatar,
	.v-responsive {
		cursor: pointer;
	}
	.highlighted {
		border: 2px;
		border-color: blue;
	}
</style>
