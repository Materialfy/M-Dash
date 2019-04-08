<template>
	<v-toolbar id="core-toolbar" dark style="background: #424242;" flat prominent>
		<div class="v-toolbar-title">
			<v-toolbar-title class="font-weight-light text-general">
				<v-btn v-if="responsive" class="default v-btn--simple" icon @click.stop="onClickBtn">
					<v-icon>mdi-view-list</v-icon>
				</v-btn>
				{{ title }}
			</v-toolbar-title>
		</div>

		<v-spacer/>
		<v-toolbar-items>
			<v-flex align-center layout py-2>
				<v-text-field
					v-if="responsiveInput"
					class="mr-4 mt-2 purple-input"
					label="Search..."
					hide-details
					color="purple"
				/>
				<router-link v-ripple class="toolbar-items" to="/">
					<v-icon color>mdi-home</v-icon>
				</router-link>
				<v-menu bottom left content-class offset-y transition="slide-y-transition">
					<router-link
						v-ripple
						slot="activator"
						class="toolbar-items"
						to="/dashboard/notifications"
					>
						<v-badge color="error" overlap>
							<template slot="badge">{{ notifications.length }}</template>
							<v-icon color>mdi-bell</v-icon>
						</v-badge>
					</router-link>
					<v-card>
						<v-list dense>
							<v-list-tile v-for="notification in notifications" :key="notification" @click="onClick">
								<v-list-tile-title v-text="notification"/>
							</v-list-tile>
						</v-list>
					</v-card>
				</v-menu>
				<router-link v-ripple class="toolbar-items" to="/dashboard/user-profile">
					<v-icon color>mdi-account</v-icon>
				</router-link>

				<v-icon class="toolbar-items" color @click="logout">mdi-power</v-icon>
			</v-flex>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
	import { mapMutations, mapGetters } from "vuex";

	export default {
		data: () => ({
			notifications: [
				"Mike, Thanos is coming",
				"5 new avengers joined the team",
				"You're now friends with Capt",
				"Another Notification",
				"Another One - Dj Khalid voice"
			],
			title: "I got a digital dash -Future Hendrixx",
			responsive: false,
			responsiveInput: false
		}),

		computed: {
			...mapGetters(["authorized"])
		},

		watch: {
			$route(val) {
				this.title = val.meta.name;
			}
		},

		mounted() {
			this.onResponsiveInverted();
			window.addEventListener("resize", this.onResponsiveInverted);
		},
		beforeDestroy() {
			window.removeEventListener("resize", this.onResponsiveInverted);
		},

		methods: {
			...mapMutations("app", ["setDrawer", "toggleDrawer"]),
			onClickBtn() {
				this.setDrawer(!this.$store.state.app.drawer);
			},
			onClick() {
				//
			},
			onResponsiveInverted() {
				if (window.innerWidth < 991) {
					this.responsive = true;
					this.responsiveInput = false;
				} else {
					this.responsive = false;
					this.responsiveInput = true;
				}
			},
			logout: function() {
				this.$store.dispatch("logout").then(() => {
					this.$router.push("");
				});
			}
		}
	};
</script>

<style>
	#core-toolbar a {
		text-decoration: none;
	}
</style>
