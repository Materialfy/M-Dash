<!-- @format -->

<template>
	<v-container fill-height fluid>
		<v-row justify="center">
			<v-col class="d-flex justify-center">
				<v-card elevation="12" min-width="300" width="500" color="secondary">
					<v-toolbar color="primary">
						<v-toolbar-title>M-Dashboard</v-toolbar-title>
						<v-spacer />
					</v-toolbar>
					<v-card-text>
						<v-form>
							<v-text-field
								ref="username"
								v-model="username"
								:rules="[() => !!username || 'This field is required']"
								prepend-icon="mdi-account"
								label="Login"
								placeholder="TotallyNotThanos"
								required
							/>
							<v-text-field
								ref="password"
								v-model="password"
								:rules="[() => !!password || 'This field is required']"
								:append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
								:type="showPassword ? 'text' : 'password'"
								prepend-icon="mdi-lock"
								label="Password"
								placeholder="*********"
								counter
								required
								@keydown.enter="login"
								@click:append="showPassword = !showPassword"
							/>
						</v-form>
					</v-card-text>
					<v-divider class="mt-5" />
					<v-card-actions>
						<v-spacer />
						<v-btn align-center justify-center color="tertiary" @click="login"> Login </v-btn>
					</v-card-actions>
					<v-snackbar v-model="snackbar" :color="color" :top="true">
						{{ errorMessages }}
						<v-btn text @click="snackbar = false"> Close </v-btn>
					</v-snackbar>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'LoginView',
		data: function () {
			return {
				username: 'eve.holt@reqres.in',
				password: 'cityslicka',
				errorMessages: 'Incorrect login info',
				snackbar: false, // this is the wrong pass notification
				color: 'general',
				showPassword: false,
			}
		},

		// Sends action to Vuex that will log you in and redirect to the dash otherwise, error
		//needs to finish implementing using the states in mutations
		methods: {
			login: function () {
				let username = this.username // you use this.username to access the username saved in the data
				let password = this.password
				this.$store
					.dispatch('login', { username, password }) //calls the login action and passes login info
					.then(() => this.$router.push('/')) //redirect to dash after login
					.catch((err) => {
						console.log(err)
						this.snackbar = true //shows error on wrong pass
					})
			},
		},
		metaInfo() {
			return {
				title: 'Super Secret | Login',
			}
		},
	}
</script>
