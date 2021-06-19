<template>
  <v-container
    fill-height
    container--fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >
        <material-card
          color="general"
          title="Edit Profile"
          text="Complete your profile"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Company (disabled)"
                    disabled
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    class="purple-input"
                    label="User Name"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Email Address"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="First Name"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Last Name"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md12
                >
                  <v-text-field
                    label="Adress"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="City"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Country"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit(Thats 'Hire me' in english)."
                  />
                </v-flex>
                <v-flex
                  xs12
                  text-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="general"
                  >
                    Update Profile
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <material-card class="v-card-profile">
          <v-avatar
            slot="offset"
            class="mx-auto d-block"
            size="130"
          >
            <img
              src="https://bookingagentinfo.com/wp-content/uploads/2014/12/Travis-Scott-Contact-Information.jpg"
            >
          </v-avatar>
          <v-card-text class="text-center">
            <h6 class="category text-gray font-weight-thin mb-3">
              CEO / CO-FOUNDER - Astroworld
            </h6>
            <h4 class="card-title font-weight-light">
              Travis Scott
            </h4>
            <p class="card-description font-weight-light">
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
            <v-btn
              color="general"
              rounded
              class="font-weight-light"
            >
              Follow
            </v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
	export default {
		//
	};
</script>
