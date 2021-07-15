<template>
	<v-container color="primary">
		<v-row>
			<v-col class="d-flex justify-center">
				<header>
					<span
						class="text-h3 text-uppercase d-flex text-center"
						style="color: #ffc107"
						>Materialfy Card Examples</span
					>
					<article class="d-flex justify-center mt-2">
						<p class="text-center">
							These are customizable with slots and props to dyanmically change
							the content.
							<br />There are four types of cards: BasicCard, BasicTextCard
							HeaderCard, ColorCard
						</p>
					</article>
				</header>
			</v-col>
		</v-row>
		<!-- First Row with header and basic cards -->
		<v-row>
			<v-col>
				<MaterialfyBasicCard />
			</v-col>
			<v-col>
				<MaterialfyBasicTextCard />
			</v-col>
			<v-col>
				<MaterialfyHeaderCard />
			</v-col>
		</v-row>
		<!--  Second Row with basic color cards -->
		<!-- Used named slots and props to overide the default card content below -->
		<v-row>
			<v-col>
				<MaterialfyColorCard />
			</v-col>
			<v-col>
				<MaterialfyColorCard cardMaxWidth="400">
					<template v-slot:crdInner>
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
						></v-sparkline>
					</template>
					<template #crdInnerText>
						<div class="text-h4">User Engagement</div>
					</template>
					<template v-slot:crdActions>
						<div></div>
					</template>
					<template v-slot:crdDivider>
						<div></div>
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
	name: "CardsView",
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
