<template>
  <v-navigation-drawer
    v-model = "drawerShown"
    absolute
    temporary
    app
    color="secondary"
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
            drawerShown: false, // controls the opening and closing of drawer
            drawer: this.drawerState // this is just here for the watcher to wrok
            
        }
    },
    mounted (){ // gets the initial drawer state(false) so it can be watched in data.drawer
      this.drawer = this.drawerState
    },
    watch: { 
      // this watches the Vuex state set to data.drawer an updates the drawer to open
      drawerState: function () {
        this.drawerShown = this.drawerState
      },
      // when the drawer closes it emits am event with a value of false, used to udpate vuex state
      drawerShown (){
        //this should be replaced with a mutation, cant use drawerState imported without setter
        this.$store.state.drawertoggle.drawerState = this.drawerShown
      }
    },
    computed : {
      // this was used to check state with a getter and setter. Now its used in watcher
      ...mapState(
          'drawertoggle',
          ['drawerState']
      ),

    },
    methods: {
    },

}
</script>

<style>

</style>