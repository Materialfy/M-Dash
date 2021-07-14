<template>
	<v-menu
		:close-on-content-click="true"
		nudge-left="60"
		nudge-bottom="57"
		transition="slide-y-transition"
		float-left
		class="ma-2"
	>
		<!-- this v-menu and activator is used to control the v-card showing -->
		<template #activator="{ on: onbtn, attrs }">
			<v-badge
				:content="getNotificationAmt"
				:value="badgeShow"
				color="tertiary"
				overlap
				offset-y="23px"
				offset-x="17px"
			>
				<v-btn
					id="notifbtn"
					icon
					:color="buttonColor"
					v-bind="attrs"
					v-on="onbtn"
				>
					<v-icon>mdi-bell</v-icon>
				</v-btn>
			</v-badge>
		</template>

		<v-card max-width="400" color="primary">
			<v-container fill-height>
				<v-row no-gutters>
					<v-col cols="7" class="mx-auto ">
						<v-subheader
							v-if="getNotifHeader"
							class="d-flex justify-center pa-2 secondary--text "
						>
							Refreshed: {{ notificationHeader }}
						</v-subheader>
					</v-col>
					<v-col cols="12">
						<template v-for="(value, index) in getNotifications">
							<v-divider v-if="value.divider" :key="index" />
							<v-list-item :key="value.title" two-line to="Notifications">
								<v-list-item-avatar :key="value.avatar">
									<img v-if="value.avatar" :src="value.avatar" />
									<v-icon v-if="value.icon" large color="secondary">{{value.icon}}</v-icon>
								</v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title v-html="value.title" />
									<v-list-item-subtitle v-html="value.subtitle" />
								</v-list-item-content>
							</v-list-item>
						</template>
					</v-col>
				</v-row>
				<v-row><v-divider class="mb-1 px-2" /></v-row>
				<v-row>
					<v-col col="3" class="text-center">
						<router-link to="notifications">
							<v-btn small :color="buttonColor"> View all notifications </v-btn>
						</router-link>
					</v-col>
					<v-col col="3" class="text-center">
						<v-btn small @click="clearNotifs" :color="buttonColor"
							>Clear Notifications</v-btn
						>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</v-menu>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
	data() {
		return {
			notificationLimit: 5, //use in for loop
			notifHeader: null,
			badgeShow: true,
		};
	},
	props: ["buttonColor"],

	computed: {
		...mapGetters(["getNotifications", "getNotifHeader", "getNotificationAmt"]),
		// getNotifAmt gets the noticiation amount based on the length of the notificaitons array
		notificationHeader: function () {
			// waits for update on state and updates header from state
			return this.getNotifHeader;
		},
		...mapMutations(["clearNotifications"]),
	},

	watch: {},

	created() {},
	beforeDestroy() {},

	methods: {
		clearNotifs: function () {
			this.clearNotifications;
			this.badgeShow = false;
		},
	},
};
</script>

<style>
</style>