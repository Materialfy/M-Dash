<template>
	<v-card
		class="mx-auto text-center"
		:dark="isDark"
		:min-width="cardMinWidth"
		:max-width="cardMaxWidth"
		:min-height="cardMinHeight"
		:color="cardColor"
	>
		<v-card-text>
			<slot :name="cardInner">
				<v-sheet color="rgba(0, 0, 0, .12)">
					<v-sparkline
						:value="value"
						color="rgba(255, 255, 255, .7)"
						height="100"
						padding="24"
						stroke-linecap="round"
						smooth
					>
						<template v-slot:label="item"> ${{ item.value }}k </template>
					</v-sparkline>
				</v-sheet>
			</slot>
		</v-card-text>

		<v-card-text v-if="cardShowInnerText">
			<div class="text-h4 font-weight-thin">
				{{ cardInnerText }}
			</div>
		</v-card-text>
		<v-divider v-if="cardShowDivider" />
		<v-card-actions class="justify-center" v-if="cardShowActions">
			<slot :name="cardActions">
				<v-btn block text> Go to Report </v-btn>
			</slot>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: "MaterialfyColorCard",
	data: () => ({
		value: [7000, 6000, 12000, 11000, 18000, 25000, 27000],
	}),
	props: {
		cardMinHeight: {
			default: "100",
		},
		cardMinWidth: {
			default: "300",
		},
		cardMaxWidth: {
			default: "700",
		},
		cardTitle: {
			default: "M-Dashboard Header Card",
		},
		cardIcon: {
			default: "crdIcon",
		},
		cardInner: {
			default: "crdInner",
		},
		cardInnerText: {
			default: "Sales or something",
		},
		cardActions: {
			default: "crdActions",
		},
		cardColor: {
			default: "tertiary",
		},
		isDark: {
			default: true,
		},
		cardShowDivider: {
			default: true,
		},
		cardShowActions: {
			default: true,
		},
		cardShowInnerText: {
			default: true,
		},
	},
};
</script>

<style>
</style>