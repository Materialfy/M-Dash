<template>
	<v-card
		class="mx-auto"
		outlined
		:dark="isDark"
		:min-width="cardMinWidth"
		:max-width="cardMaxWidth"
		:min-height="cardMinHeight"
		:color="cardColor"
	>

		<v-list-item three-line>
			<v-list-item-content>
				<div class="text-overline mb-4 tertiary--text">
					{{ cardOverlineText }}
				</div>
				<v-list-item-title class="text-h5  mb-4 tertiary--text" v-if="cardShowTitle">
					{{ cardTitle }}
				</v-list-item-title>
				
			</v-list-item-content>
			<slot :name="cardAvatar" v-if="cardShowAvatar">
				<v-list-item-avatar size="80" color="primary">
					<div class="text-center">
						<v-progress-circular
							:rotate="360"
							:size="100"
							:width="15"
							:value="value"
							color="tertiary"
						>
							{{ value }}
						</v-progress-circular>
					</div>
				</v-list-item-avatar>
			</slot>
		</v-list-item>
		<v-container >
			<slot :name="cardInnerList" v-if="cardShowInnerText">
				<v-list-item-subtitle
					>Greyhound divisely hello coldly fonwderfully
				</v-list-item-subtitle>
			</slot>
		</v-container>
		<v-card-actions>
			<slot :name="cardActions" v-if="cardShowActions">
				<v-btn outlined rounded text color="tertiary"> Button </v-btn>
			</slot>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		name: "MaterialfyBasicCard",
		props: {
			cardMinHeight: {
				default: "100",
			},
			cardMinWidth: {
				default: "300",
			},
			cardMaxWidth: {
				default: "400",
			},
			cardTitle: {
				default: "Materailfy Basic Card",
			},
			cardOverlineText: {
				default: "Overline",
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
			cardAvatar: {
				default: "crdAvatar",
			},
			isDark: {
				default: false,
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
		data() {
			return {
				interval: {},
				value: 0,
			};
		},
		beforeDestroy() {
			clearInterval(this.interval);
		},
		mounted() {
			this.interval = setInterval(() => {
				if (this.value === 100) {
					return (this.value = 0);
				}
				this.value += 10;
			}, 1000);
		},
	};
</script>

<style scoped>
	.v-progress-circular {
		margin: 1rem;
	}
	.innercardheight {
		height: 100px;
	}
</style>
