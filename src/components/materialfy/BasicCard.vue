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
		<v-container>
			<v-row>
				<v-col>
					<slot name="crdOverline" v-if="cardShowOverline">
						<!-- connected to props so you can change it -->
						<div class="text-overline mb-4 tertiary--text">
							{{ cardOverlineText }}
						</div>
					</slot>
				</v-col>
				<v-col>
					<slot name="crdTitle" v-if="cardShowTitle">
						<v-list-item-title class="text-h6 mb-4 tertiary--text">
							{{ cardTitle }}
						</v-list-item-title>
					</slot>
				</v-col>
			</v-row>

			<slot :name="cardInner" v-if="cardShowInner">
				<v-card-text class="text-h5 font-weight-bold">
					This is a bunch of text saying words since i couldnt think of anything
					to fill up this card
				</v-card-text>
			</slot>

			<v-card-actions>
				<slot :name="cardActions" v-if="cardShowActions"> </slot>
			</v-card-actions>
		</v-container>
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
			default: "600",
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
		cardInner: {
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
		cardShowInner: {
			default: true,
		},
		cardShowAvatar: {
			default: true,
		},
		cardShowTitle: {
			default: true,
		},
		cardShowOverline: {
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
