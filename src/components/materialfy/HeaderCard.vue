<template>
	<v-card
		elevation="12"
		:min-width="cardMinWidth"
		:max-width="cardMaxWidth"
		:min-height="cardMinHeight"
		:color="cardColor"
	>
		<v-toolbar :color="cardHeaderColor">
			<v-avatar :tile="true">
				<v-icon>
					<slot :name="cardIcon" v-if="cardShowAvatar"> mdi-alert-circle-outline </slot>
				</v-icon>
			</v-avatar>
			<v-toolbar-title>{{ cardTitle }}</v-toolbar-title>
			<v-spacer />
		</v-toolbar>
		<v-list-item v-if="cardShowInnerText">
			<slot :name="cardInnerList">
				<div class="innercardheight"></div>
				<v-list-item-content>
					<v-list-item-title class="text-h5 mb-1">
						Headline 6
					</v-list-item-title>
					<v-list-item-subtitle
						>Greyhound divisely hello coldly fonwderfully
					</v-list-item-subtitle>
				</v-list-item-content>
			</slot>
		</v-list-item>
		<slot name="divider">
			<v-divider class="mt-5" />
		</slot>
		<v-card-actions>
			<slot :name="cardActions" v-if="cardShowActions">
				<v-spacer />
				<v-btn text color="tertiary"> Close </v-btn>
			</slot>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		name: "MaterialfyHeaderCard",
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
				default: "Materailfy Header Card",
			},
			cardIcon: {
				default: "crdIcon",
			},
			cardInnerList: {
				default: "crdInner",
			},
			cardActions: {
				default: "crdActions",
			},
			cardHeaderColor: {
				default: "tertiary",
			},
			cardColor: {
				default: "primary",
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
			cardShowAvatar: {
				default: true,
			},
			cardShowTitle: {
				default: true,
			},
		},
	};
</script>

<style>
	.innercardheight {
		height: 200px;
	}
</style>
