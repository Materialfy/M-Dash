<template>
  <v-navigation-drawer
    v-model = "drawerShown"
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
            drawerShown: false,
            drawer: this.drawerState
            
        }
    },
    mounted (){ // gets the initial drawer state so it can be watched in data.drawer
      //this.drawer = this.drawerState
    },
    watch: {
      drawerState: function () {
        console.log(`Watcher for drawer data: ${this.drawerShown}`)
        this.drawerShown = this.drawerState
      },
      
    },
    computed : {
      ...mapState(
          'drawertoggle',
          ['drawerState']
      ),
      drawerStateUpdate:{
        get: function (){ //checks the drawertoggle module state to see if drawer is open or not
          console.log("sidedrawer.vue GETTER: -" + this.drawerState)
          return this.$store.state.drawertoggle.drawerState
        },
        // this updates the drawerState to false so the button will work correctly
        set: function (value) {
          console.log("computed setter: " + value)
          this.drawerShown = value
          //this.$store.commit('drawertoggle/toggleDrawerState') 
          console.log("setter after change: " + value)
          }
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