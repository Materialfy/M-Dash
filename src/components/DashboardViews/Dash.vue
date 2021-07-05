<template>
	<v-container color="primary">
		<v-row>
      <v-col>
        <MaterialfyCard />
      </v-col>
      <v-col>
        <MaterialfyHeaderCard
        />
      </v-col>
		</v-row>
    <v-row>
      <v-col>
        <MaterialfyColorCard />
      </v-col>
      <v-col>
        <MaterialfyColorCard  >
          <template v-slot:crdActions>
            <div></div>
          </template>
          <template v-slot:crdDivider>
            <div></div>
          </template>
        </MaterialfyColorCard>
      </v-col>
		</v-row>
		<v-row class="ma-3">
      <v-col>
        <MaterialfyCard />
      </v-col>
      <v-col>
        <MaterialfyHeaderCard
          cardTitle="M-Dashboard Card"
          cardIcon="crdIcon"
          cardInner="crdInner"
          cardActions
        >
          <template #crdIcon> mdi-cog </template>
          <template v-slot:crdInner>
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="tertiary"
              elevation="4"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="labels"
                :value="value"
                color="white"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>
          </template>
        </MaterialfyHeaderCard>
      </v-col>
      <v-col>
        <MaterialfyColorCard >
          <template v-slot:crdInner>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  OVERLINE
                </div>
                <v-list-item-title class="text-h5 mb-1 " >
                  Headline 5
                </v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
          <template v-slot:crdActions>
            <v-btn
              outlined
              rounded
              text
            >
              Button
            </v-btn>
          </template>
        </MaterialfyColorCard>
      </v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
    data: () => ({
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],
    }),
  };
</script>

<style></style>
