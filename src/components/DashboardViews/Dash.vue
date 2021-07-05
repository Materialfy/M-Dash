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
                <v-list-item-title class="text-h5 mb-1 innercardheight" >
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
	export default {};
</script>

<style></style>
