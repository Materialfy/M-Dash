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
    mounted (){ // gets the initial drawer state(false) so it can be watched in data.drawer
      this.drawer = this.drawerState
    },
    watch: { 
      drawerState: function () {
        console.log(`Watcher for data.drawer: ${this.drawer}`)
        this.drawerShown = this.drawerState
        console.log(`Watcher for drawerShown: ${this.drawerShown}`)
      },
      drawerShown (){
        console.log("this is DrawerShown Watcher: " + this.drawerShown)
        this.$store.state.drawertoggle.drawerState = this.drawerShown
      }
    },
    computed : {
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