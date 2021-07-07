<template>
	<v-container fluid color="primary">
		<!-- First Row with header and basic cards -->
		<v-row class="d-flex align-center mb-2">
			<v-col>
				<MaterialfyHeaderCard />
			</v-col>
			<v-col>
				<MaterialfyBasicCard />
			</v-col>
			<v-col>
				<MaterialfyHeaderCard />
			</v-col>
		</v-row>
		<!--  Second Row with basic color cards -->
		<!-- Used named slots and props to overide the default card content below -->
		<v-row class="d-flex align-center mb-2">
			<v-col>
				<MaterialfyColorCard />
			</v-col>
			<v-col>
				<MaterialfyColorCard 
					cardMaxWidth="400" 
					cardInnerText="User Engagement" 
					:cardShowDivider="false" 
					:cardShowActions="false"
				>
					<template v-slot:crdInner>
						<v-sheet color="rgba(0, 0, 0, .12)">
							<v-sparkline
								:value="value2"
								:gradient="gradient"
								:smooth="radius || false"
								:padding="padding"
								:line-width="width"
								:stroke-linecap="lineCap"
								:gradient-direction="gradientDirection"
								:fill="fill"
								:type="type"
								:auto-line-width="autoLineWidth"
								auto-draw
								height="150"
							/>
						</v-sheet>
					</template>
				</MaterialfyColorCard>
			</v-col>
		</v-row>
		<!-- Third Row with header, color and basic cards -->
		<!-- Used named slots and props to overide the default card content below -->
		<v-row class="ma-3 d-flex align-center">
			<v-col>
				<MaterialfyBasicCard />
			</v-col>
			<v-col>
				<MaterialfyHeaderCard
					cardTitle="Users Monthly Logins"
					cardIcon="mdi-access-point-plus"
					:cardShowDivider="false" 
					:cardShowActions="false"
				>
					<template v-slot:crdInnerList>
						<v-sheet
							class="v-sheet--offset mx-auto mt-2"
							color="tertiary"
							elevation="4"
							max-width="calc(100% - 32px)"
						>
							<v-sparkline
								:labels="labels"
								label-size="12"
								:value="value"
								color="white"
								line-width="4"
								padding="16"
								height="150"
							/>
						</v-sheet>
					</template>
				</MaterialfyHeaderCard>
			</v-col>
			<v-col>
				<MaterialfyColorCard>
					<template v-slot:crdInner>
						<v-list-item three-line>
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
						</v-list-item>
					</template>
					<template v-slot:crdActions>
						<v-btn outlined rounded text> Button </v-btn>
					</template>
				</MaterialfyColorCard>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	const gradients = [
		["#222"],
		["#42b3f4"],
		["red", "orange", "yellow"],
		["purple", "violet"],
		["#00c6ff", "#F0F", "#FF0"],
		["#f72047", "#ffd200", "#1feaea"],
	];
	export default {
		data: () => ({
			labels: ["Feb", "March", "April", "420", "May", "June", "July", "Aug"],
			value: [200, 300, 410, 390, 420, 460, 420, 420],
			width: 2,
			radius: 10,
			padding: 8,
			lineCap: "round",
			gradient: gradients[5],
			value2: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 10],
			gradientDirection: "top",
			gradients,
			fill: false,
			type: "trend",
			autoLineWidth: false,
		}),
	};
</script>

<style></style>
