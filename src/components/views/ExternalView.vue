<!-- This is the file that will render any external pages you do not want inside the dash, like login form-->
<template>
	<v-app>
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
	};
</script>

<style></style>
