<template>
   <v-app dark id="login-home">

      <v-content>
        <transition mode="out-in">
           <router-view></router-view>
        </transition>
     </v-content>

   </v-app>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'Login '
    }
  }
}
</script>

<style>
#core-view {
  padding-bottom: 100px;
}
</style>
