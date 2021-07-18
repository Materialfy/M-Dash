<template>
	<v-card
		elevation="4"
		:min-width="cardMinWidth"
		:max-width="cardMaxWidth"
		:min-height="cardMinHeight"
		:color="cardColor"
		class="pa-3"
	>
		<v-toolbar :color="cardHeaderColor">
			<slot name="crdHeader">
				<v-avatar :tile="true" v-if="cardShowAvatar">
					<v-icon color="tertiary">
						<slot name="crdIcon" > {{ cardIcon }} </slot>
					</v-icon>
				</v-avatar>
				<v-toolbar-title class="tertiary--text">{{ cardTitle }}</v-toolbar-title>
				<v-spacer />
			</slot>
		</v-toolbar>
		<v-list-item v-if="cardShowInnerList">
			<slot name="crdInnerList">
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
		<div v-if="cardShowInner">
			<slot name="crdInner"> </slot>
		</div>

		<v-divider class="mt-5" v-if="cardShowDivider" />
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
			default: "820",
		},
		cardTitle: {
			default: "Materailfy Header Card",
		},
		cardIcon: {
			default: "mdi-alert-circle-outline",
		},
		cardInnerList: {
			default: "crdInnerList",
		},
		cardInner: {
			default: "crdInner",
		},
		cardActions: {
			default: "crdActions",
		},
		cardHeaderColor: {
			default: "primary",
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
		cardShowInnerList: {
			default: true,
		},
		cardShowAvatar: {
			default: true,
		},
		cardShowTitle: {
			default: true,
		},
		cardShowInner: {
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
