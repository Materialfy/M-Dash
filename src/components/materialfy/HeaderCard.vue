<template>
				<v-card elevation="12" min-width="400" :max-width="cardWidth" color="secondary" >
					<v-toolbar  color="accent">
						<v-avatar  :tile="true" >
							<v-icon  >
								<slot :name='cardIcon' />
							</v-icon>
						</v-avatar>
						<v-toolbar-title>{{ cardTitle }}</v-toolbar-title>
						<v-spacer />
					</v-toolbar>
					<v-list-item>
						<slot :name='cardMiddle' />
					</v-list-item>
					<v-divider class="mt-5" />
					<v-card-actions>
						<v-spacer />
						<slot :name='cardActions' />
						<v-btn text @click="snackbar = false"> Close </v-btn>
					</v-card-actions>

				</v-card>
</template>

<script>
export default {
    name:'MaterialfyHeaderCard',
	props: ['cardHeight', 'cardWidth', 'cardTitle', 'cardIcon','cardMiddle','cardActions']
}
</script>

<style>

</style>