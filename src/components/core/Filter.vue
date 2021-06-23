<template>
	<v-menu
		:close-on-content-click="false"
		bottom
		float-left
		min-width="300"
		max-width="300"
		nudge-left="12"
		offset-x
		transition="slide-y-transition"
	>
		<template #activator="{ on }">
			<v-btn
				class="elevation-0"
				color="gray"
				fab
				fixed
				style="top: 96px"
				top
				v-on="on"
			>
				<v-icon large color="blue" size="60"> mdi-cog </v-icon>
			</v-btn>
		</template>
		<v-card>
			<v-container grid-list-xl>
				<v-layout wrap>
					<v-flex xs12>
						<div class="text-center text-body-2 text-uppercase">
							Sidebar Filters
						</div>

						<v-layout justify-center>
							<v-avatar
								v-for="c in colors"
								:key="c"
								:class="[
									c === color ? 'color-active color-' + c : 'color-' + c,
								]"
								size="23"
								@click="setColor(c)"
							/>
						</v-layout>
						<v-divider class="mt-3" />
					</v-flex>
					<v-flex xs12>
						<div class="text-center text-body-2 text-uppercase">Images</div>
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
							Free Download
						</v-btn>
					</v-flex>
					<v-flex xs12>
						<v-btn
							href="https://github.com/ClintOxx/vuetify-admin-dashboard"
							target="_blank"
							class="white--text"
							color="primary"
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
			colors: ["primary", "info", "success", "warning", "danger", "general"],
			iconSelect: [mdiAccount, mdiCog], // lets you import just the icons you need and switch by changing index
			images: [
				"https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg",
				"https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg",
				"https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg",
				"https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg",
			],
		}),

		computed: {
			...mapState("drawertoggle", ["image", "color"]),
			color() {
				return this.$store.state.drawertoggle.color;
			},
		},

		methods: {
			...mapMutations("drawertoggle", ["setImage"]),
			setColor(color) {
				this.$store.state.drawertoggle.color = color;
			},
		},
	};
</script>

<style lang="scss">
	.v-avatar,
	.v-responsive {
		cursor: pointer;
	}
</style>
