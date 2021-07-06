<!-- This is the file that will render any external pages you do not want inside the dash, like login form-->
<template>
	<v-app :style="{background: $vuetify.theme.themes[theme].background}">
		<v-main>
				<transition mode="out-in">
					<router-view />
				</transition>
		</v-main>
	</v-app>
</template>

<script>
	export default {
		name: "ExternalView",
		computed:{
      //controls the background color
      theme(){
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
  }
	};
</script>

<style></style>
