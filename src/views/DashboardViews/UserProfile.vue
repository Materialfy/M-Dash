<template>
	<v-container fill-height  >
		<v-row justify-center wrap>
			<v-col xs12 md8>
				<MaterialfyBasicCard
					cardMaxWidth="800"
					cardTitle="Edit Profile"
					cardOverlineText="Complete your profile"
					:cardShowAvatar="false"
				>
				
				<template v-slot:crdInner>
					<v-form>
						<v-container >
							<v-row wrap >
								<v-col xs12 md4>
									<v-text-field :color="textFieldColor" label="Company (disabled)" disabled />
								</v-col>
								<v-col xs12 md4>
									<v-text-field :color="textFieldColor" class="purple-input" label="User Name" />
								</v-col>
								<v-col xs12 md4>
									<v-text-field :color="textFieldColor" label="Email Address"  />
								</v-col>
								</v-row>
								<v-row wrap>
								<v-col xs12 md6>
									<v-text-field :color="textFieldColor" label="First Name"  />
								</v-col>
								<v-col xs12 md6>
									<v-text-field :color="textFieldColor" label="Last Name"  />
								</v-col>
								<v-col xs12 md12>
									<v-text-field :color="textFieldColor" label="Address"  />
								</v-col>
								</v-row>
								<v-row wrap>
								<v-col xs12 md4>
									<v-text-field :color="textFieldColor" label="City"  />
								</v-col>
								<v-col xs12 md4>
									<v-text-field :color="textFieldColor" label="Country"  />
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
								<v-col xs12 cols='12'>
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
					<v-btn class="mx-0 font-weight-light" color="tertiary">
						Update Profile
					</v-btn>
				</template>
			</MaterialfyBasicCard>
			</v-col>
			<v-col xs12 md4>
				<materialfy-color-card 
					cardMaxWidth="500"
					:cardShowDivider="false" 
					:cardShowActions="false"
					:cardShowInnerText="false"
				>
					<template v-slot:crdInner>
						<v-avatar slot="offset" class="mx-auto d-block" size="130">
							<img
								:src='getAvatar'
							/>
						</v-avatar>
						<v-card-text class="text-center">
							<h6 class="text-h5 text-gray font-weight-light mb-3">
								CEO / CO-FOUNDER - Cactus Jack
							</h6>
							<h4 class="text-h4 font-weight-normal">Travis Scott</h4>
							<p class="text-body-1 font-weight-light ">
								You wrote that yourself? wow congrats dude, really, that's very
								cool. i just told everyone in my family about it, everybody thinks
								that's very impressive and asked me to congratulate you. they want
								to speak to you in person, if possible, to give you their regards.
								they also said they will tell our distant relatives in christmas
								supper and in NYE they will ignite fireworks that spell your name.
								i also told about this enormous deed to closer relatives, they had
								the same reaction. they asked for your address so they can send
								congratulatory cards and messages. my friends didn't believe me
								when i told them i knew the author of this gigantic feat, really,
								they were dumbstruck, they said they will make your name echo
								through years and years to come. when my neighbour found out about
								what you did, he was completely dumbstruck too, he wanted to know
								who you are and he asked (if you have the time, of course) if you
								could stop by to receive gifts, congratulations and handshakes.
								with the spreading of the news, a powerful businessman of the area
								decided to hire you as the CEO of his company because of this
								tremendous feat and at the same time an important international
								shareholder wants to sponsor you to give speeches and teach
								everybody how to do as you did so the world becomes a better
								place. you have become famous not only here but also everywhere,
								everybody knows who you are. the news spread really fast and
								mayors of all cities are setting up porticos, ballons, colossal
								boom speakers, anything that can make your name stand out more and
								see which city can congratulate you the hardest for this
								magnificent feat.
							</p>
							<v-btn color="primary" rounded class="font-weight-light">
								Follow
							</v-btn>
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
	import {mapGetters} from 'vuex'
	export default {
		name: "UserProfile",
		data () {
			return {
				textFieldColor: "secondary"
			}
		},
		computed: {
        ...mapGetters(['getAvatar'])
    },
	};
</script>
