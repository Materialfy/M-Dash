<template>
				<v-card 
					elevation="12" 
					:min-width="cardMinWidth" 
					:max-width="cardMaxWidth" 
					:min-height ="cardMinHeight"
					:color="cardColor" 
				>
					<v-toolbar  :color="cardHeaderColor">
						<v-avatar  :tile="true" >
							<v-icon  >
								<slot :name='cardIcon'> mdi-cog </slot>
							</v-icon>
						</v-avatar>
						<v-toolbar-title>{{ cardTitle }}</v-toolbar-title>
						<v-spacer />
					</v-toolbar>
					<v-list-item  >
						<slot :name='cardInner'>
							<div class="innercardheight"></div>					
							<v-list-item-content >
								<v-list-item-title class="text-h5 mb-1">
									Headline 6
								</v-list-item-title>
								<v-list-item-subtitle
									>Greyhound divisely hello coldly
									fonwderfully
								</v-list-item-subtitle>
							</v-list-item-content>
						</slot>
					</v-list-item>
					<v-divider class="mt-5" />
					<v-card-actions>
						<v-spacer />
						<slot :name='cardActions'>
							<v-btn text @click="snackbar = false"> Close </v-btn>
						</slot>	
					</v-card-actions>
				</v-card>
</template>

<script>
export default {
    name:'MaterialfyHeaderCard',
	props: {
		cardMinHeight: {
			default: '100',
		}, 
		cardMinWidth: {
			default: '300',
		},
		cardMaxWidth: {
			default: '700',
		},
		cardTitle: {
			default: 'M-Dashboard Header Card',
		},
		cardIcon: {
			default: 'crdIcon',
		},
		cardInner: {
			default: 'crdInner',
		},
		cardActions: {
			default: 'crdActions',
		},
		cardHeaderColor: {
			default: 'tertiary',
		},
		cardColor: {
			default: 'primary',
		},
	}
}
</script>

<style>
.innercardheight{
	height: 200px;
}
</style>