<template>
	<v-container color="primary">
		<v-row>
			<MaterialfyCard />
		</v-row>
		<v-row class="ma-3">
			<MaterialfyHeaderCard
				cardTitle="M-Dashboard Card"
				cardIcon="cardIcon"
				cardMiddle="cardInner"
				cardActions
			>
				<template #cardIcon> mdi-cog </template>
				<template v-slot:cardInner>
					<v-list-item-content>
						<div class="text-overline mb-4">OVERLINE</div>
						<v-list-item-title class="text-h5 mb-1">
							Headline 5
						</v-list-item-title>
						<v-list-item-subtitle
							>Greyhound divisely hello coldly
							fonwderfully</v-list-item-subtitle
						>
					</v-list-item-content>
				</template>
			</MaterialfyHeaderCard>
		</v-row>
		<v-row>
			<v-col v-for="n in 9" :key="n" cols="4">
				<v-card color="secondary" height="200"></v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {};
</script>

<style></style>
