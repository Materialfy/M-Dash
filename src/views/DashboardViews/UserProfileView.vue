<!-- @format -->

<template>
	<v-container fill-height >
		<v-row justify-center wrap class="d-flex align-start">
			<!-- USER TABs section -->
			<v-col xs12 md="6">
				<v-card flat color="secondary" class="elevation-0" :tile="true">
					<v-toolbar color="background" class="elevation-0">
						<v-toolbar-title class="tertiary--text">User Profile</v-toolbar-title>
					</v-toolbar>
					<v-tabs :vertical="tabBreakPoint" background-color="background" color="tertiary">
						<v-tab>
							<v-icon left> mdi-account-cog </v-icon>
							Edit Profile
						</v-tab>
						<v-tab>
							<v-icon left> mdi-lock </v-icon>
							Permissions
						</v-tab>
						<v-tab class="pr-10">
							<v-icon left> mdi-cog </v-icon>
							Settings
						</v-tab>
						<!-- User Bio -->
						<v-tab-item>
							<!-- input edit form -->
							<MaterialfyBasicCard
								cardMaxWidth="802"
								cardTitle="Edit Profile"
								cardSubHeaderText="Complete your profile"
								:cardShowAvatar="false"
							>
								<template v-slot:crdInner>
									<v-form>
										<v-container>
											<v-row wrap>
												<v-col xs12 md4>
													<v-text-field :color="textFieldColor" label="Company (disabled)" disabled />
												</v-col>
												<v-col xs12 md4>
													<v-text-field
														:color="textFieldColor"
														class="purple-input"
														label="User Name"
														value="Trav"
													/>
												</v-col>
												<v-col xs12 md4>
													<v-text-field :color="textFieldColor" label="Email Address" />
												</v-col>
											</v-row>
											<v-row wrap>
												<v-col xs12 md6>
													<v-text-field :color="textFieldColor" label="First Name" value="Travis" />
												</v-col>
												<v-col xs12 md6>
													<v-text-field :color="textFieldColor" label="Last Name" value="Scott" />
												</v-col>
												<v-col xs12 md12>
													<v-text-field :color="textFieldColor" label="Address" />
												</v-col>
											</v-row>
											<v-row wrap>
												<v-col xs12 md4>
													<v-text-field :color="textFieldColor" label="City" />
												</v-col>
												<v-col xs12 md4>
													<v-text-field :color="textFieldColor" label="Country" />
												</v-col>
											</v-row>
											<v-row wrap>
												<v-col xs12 md4>
													<v-text-field
														:color="textFieldColor"
														label="Postal Code"
														type="number"
														max-width="100"
													/>
												</v-col>
												<v-col xs12 cols="12">
													<v-textarea
														:color="textFieldColor"
														label="About Me"
														value="You wrote that yourself? wow congrats dude, really, that's very cool. i just told everyone in my family about it..."
														filled
													/>
												</v-col>
											</v-row>
										</v-container>
									</v-form>
								</template>
								<template #crdActions>
									<v-btn class="mx-0 font-weight-light" color="tertiary"> Update Profile </v-btn>
								</template>
							</MaterialfyBasicCard>
						</v-tab-item>

						<v-tab-item>
							<v-card flat color="primary" :tile="true">
								<v-card-text>
									<p>
										Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
										tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris
										ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt
										non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
									</p>

									<p>
										Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
										convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet
										ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac
										habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
									</p>

									<p>
										Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a
										libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis
										vitae tortor. Aliquam eu nunc.
									</p>

									<p>
										Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra
										rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
									</p>

									<p class="mb-0">
										Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget,
										vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis,
										dictum sed, iaculis a, condimentum nec, nisi.
									</p>
								</v-card-text>
							</v-card>
						</v-tab-item>
						<v-tab-item>
							<v-card flat color="primary" :tile="true">
								<v-card-text>
									<p>
										Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin
										viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi
										mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
									</p>

									<p class="mb-0">
										Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum,
										porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
										pretium quis, sem. Nam at tortor in tellus interdum sagittis.
									</p>
								</v-card-text>
							</v-card>
						</v-tab-item>
					</v-tabs>
				</v-card>
			</v-col>
			<v-col xs12 md4>
				<materialfy-color-card
					cardMaxWidth="500"
					:cardShowDivider="false"
					:cardShowActions="false"
					:cardShowInnerList="false"
					:cardShowInnerText="false"
				>
					<template v-slot:crdInner>
						<v-avatar slot="offset" class="mx-auto d-block" size="130">
							<img :src="getAvatar" />
						</v-avatar>
						<v-card-text class="text-center">
							<h6 class="text-h5 text-gray font-weight-light mb-3">CEO / CO-FOUNDER - Cactus Jack</h6>
							<h4 class="text-h4 font-weight-normal">Travis Scott</h4>
							<p class="text-body-1 font-weight-light">
								You wrote that yourself? wow congrats dude, really, that's very cool. i just told everyone in my
								family about it, everybody thinks that's very impressive and asked me to congratulate you. they
								want to speak to you in person, if possible, to give you their regards. they also said they will
								tell our distant relatives in christmas supper and in NYE they will ignite fireworks that spell
								your name. i also told about this enormous deed to closer relatives, they had the same reaction.
								they asked for your address so they can send congratulatory cards and messages. my friends
								didn't believe me when i told them i knew the author of this gigantic feat, really, they were
								dumbstruck, they said they will make your name echo through years and years to come. when my
								neighbour found out about what you did, he was completely dumbstruck too, he wanted to know who
								you are and he asked (if you have the time, of course) if you could stop by to receive gifts,
								congratulations and handshakes. with the spreading of the news, a powerful businessman of the
								area decided to hire you as the CEO of his company because of this tremendous feat and at the
								same time an important international shareholder wants to sponsor you to give speeches and teach
								everybody how to do as you did so the world becomes a better place. you have become famous not
								only here but also everywhere, everybody knows who you are. the news spread really fast and
								mayors of all cities are setting up porticos, ballons, colossal boom speakers, anything that can
								make your name stand out more and see which city can congratulate you the hardest for this
								magnificent feat.
							</p>
							<v-btn color="primary" rounded class="font-weight-light"> Follow </v-btn>
						</v-card-text>
					</template>
					<template #crdActions> <div></div></template>
					<template #crdInnerText> <div></div></template>
				</materialfy-color-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'UserProfile',
		data() {
			return {
				textFieldColor: 'secondary',
				tabBreakPoint: this.$vuetify.breakpoint.mobile ? false : true,
			}
		},
		computed: {
			...mapGetters(['getAvatar']),
		},
	}
</script>
