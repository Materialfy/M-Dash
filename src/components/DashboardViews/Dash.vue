<template>
	<v-container color="primary">
		<v-row>
      <v-col>
        <MaterialfyCard />
      </v-col>
      <v-col>
        <MaterialfyHeaderCard
          cardTitle="M-Dashboard Card"
          cardIcon="crdIcon"
          cardMiddle="crdInner"
          cardActions
        >
          <template #crdIcon> mdi-cog </template>
          <template v-slot:crdInner>
          </template>
        </MaterialfyHeaderCard>
      </v-col>
		</v-row>
    <v-row>
      <v-col>
        <MaterialfyColorCard />
      </v-col>
      <v-col>
        <MaterialfyColorCard />
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
          cardMiddle="crdInner"
          cardActions
        >
          <template #crdIcon> mdi-cog </template>
          <template v-slot:crdInner>
          </template>
        </MaterialfyHeaderCard>
      </v-col>
      <v-col>
        <MaterialfyColorCard />
      </v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {};
</script>

<style></style>
