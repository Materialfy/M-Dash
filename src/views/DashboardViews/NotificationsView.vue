<template>
	<v-container  fill-height>
		<v-row justify-center align-center>
			<v-col xs12>
				<materialfy-header-card 
					color="general"
					cardMaxWidth="100%"
					:cardShowDivider="false" 
					:cardShowActions="false"
				>
					<template v-slot:crdHeader>
						<v-row class="ma-1">
							<v-col >
							<div class="text-h5 font-weight-light mb-2">
								Notifications
							</div>

							</v-col>
						</v-row>
					</template>
					<template v-slot:crdInnerList>
					<v-card-text>
						<v-row wrap>
							<v-col md6 sm12>
								<h2 class="text-h6 font-weight-light mb-3">
									Notifications Style
								</h2>

								<materialfy-toasts class="mb-3" color="tertiary">
									This is a plain notification
								</materialfy-toasts>
								<materialfy-toasts class="mb-3" color="tertiary" dismissible>
									This is a notification with close button.
								</materialfy-toasts>
								<materialfy-toasts
									class="mb-3"
									color="tertiary"
									dismissible
									icon="mdi-bell-plus"
								>
									This is a notification with close button and icon.
								</materialfy-toasts>
								<materialfy-toasts
									class="mb-3"
									color="tertiary"
									dismissible
									icon="mdi-bell-plus"
								>
									This is a notification with close button and icon and have
									many lines. You can see that the icon and the close button are
									always vertically aligned. This is a beautiful notification.
									So you don't have to worry about the style.
								</materialfy-toasts>
							</v-col>

							<v-col md6 sm12>
								<h2 class="text-h6 font-weight-light">Notifcation States</h2>

								<materialfy-toasts class="mb-3" color="info" dismissible>
									<strong>INFO</strong> - This is a regular notification made
									with `color="info"`
								</materialfy-toasts>

								<materialfy-toasts class="mb-3" color="success" dismissible>
									<strong>SUCCESS</strong> - This is a regular notification made
									with `color="success"`
								</materialfy-toasts>

								<materialfy-toasts class="mb-3" color="warning" dismissible>
									<strong>WARNING</strong> - This is a regular notification made
									with `color="warning"`
								</materialfy-toasts>

								<materialfy-toasts class="mb-3" color="error" dismissible>
									<strong>DANGER</strong> - This is a regular notification made
									with `color="error"`
								</materialfy-toasts>

								<materialfy-toasts class="mb-3" color="purple" dismissible>
									<strong>PRIMARY</strong> - This is a regular notification made
									with `color="purple"`
								</materialfy-toasts>
								<materialfy-toasts class="mb-3" color="general" dismissible>
									<strong>GENERAL</strong> - This is a regular notification made
									with `color="general"`
								</materialfy-toasts>
							</v-col>
						</v-row>
						<div class="text-center">
							<h2 class="text-h6 font-weight-light mb-2">
								Notification Places
							</h2>
							<span class="text-subtitle-1 font-weight-light grey--text"
								>Click to view notifications</span
							>
						</div>

						<v-container grid-list-lg>
							<v-row justify-center wrap>
								<v-col xs12 sm4>
									<v-btn block color="general" @click="snack('top', 'left')">
										Top Left
									</v-btn>
								</v-col>
								<v-col xs12 sm4>
									<v-btn block color="general" @click="snack('top')">
										Top Center
									</v-btn>
								</v-col>
							</v-row>
							<v-row justify-center wrap>
								<v-col xs12 sm4>
									<v-btn block color="general" @click="snack('top', 'right')">
										Top Right
									</v-btn>
								</v-col>
								<v-col xs12 sm4>
									<v-btn block color="general" @click="snack('bottom', 'left')">
										Bottom Left
									</v-btn>
								</v-col>
							</v-row>
							<v-row justify-center wrap>
								<v-col xs12 sm4>
									<v-btn block color="general" @click="snack('bottom')">
										Bottom Center
									</v-btn>
								</v-col>
								<v-col xs12 sm4>
									<v-btn
										block
										color="general"
										@click="snack('bottom', 'right')"
									>
										Bottom Right
									</v-btn>
								</v-col>
							</v-row>
						</v-container>

						<v-snackbar
							v-model="snackbar"
							:color="color"
							:bottom="bottom"
							:top="top"
							:float-left="left"
							:float-right="right"
						>
							<v-icon color="white" class="mr-3"> mdi-bell-plus </v-icon>
							<div>
								Welcome to <b>Vue Material Dashboard</b> - a beautiful freebie
								for every web developer.
							</div>
							<v-icon size="16" @click="snackbar = false">
								mdi-close-circle
							</v-icon>
						</v-snackbar>
					</v-card-text>
					</template>
				</materialfy-header-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data: () => ({
			color: null,
			colors: ["purple", "info", "success", "warning", "error"],
			top: true,
			bottom: false,
			left: false,
			right: false,
			snackbar: false,
		}),

		methods: {
			snack(...args) {
				this.top = false;
				this.bottom = false;
				this.left = false;
				this.right = false;

				for (const loc of args) {
					this[loc] = true;
				}

				this.color =
					this.colors[Math.floor(Math.random() * this.colors.length)];

				this.snackbar = true;
			},
		},
	};
</script>
