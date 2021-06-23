<template>
  <v-navigation-drawer
    absolute
    temporary
    app
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex"
export default {
    data() {
        return {
            group: false,
        }
    },
    computed : {
    ...mapState(
        'drawertoggle',
        ['drawerState']
    ),
      toggle: function (){ //checks the drawertoggle module state to see if drawer is open or not
        console.log("the sidedrawer.vue: -" + this.drawerState)
        if (this.drawerState == false && this.$store.state.drawertoggle.skip == true){
          this.stateToggle()
          console.log("inside IF: " + this.drawerState)
          return this.drawerState }
        console.log("outisde: " + this.drawerState)
        return this.drawerState
    }

    },
    methods: {
      stateToggle: function() {
      this.$store.state.drawertoggle.drawerState = true
    }
    },

}
</script>

<style>

</style>