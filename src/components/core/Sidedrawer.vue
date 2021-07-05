<template>
  <v-navigation-drawer
    v-model = "drawerShown"
    :temporary="alwaysClosed"
    app
    color="primary"
    clipped
  >
      <v-list
        dense
      >
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-img :src="image" height="100%" >
          <MaterialfyUserSnippet :buttonColor='btnColor' :cardBottom="crdBottom"  />
          <v-row >

            <v-divider class="mb-2" />
            <!-- this section builds the links by use a for loop and iterating through links section
            the v-for iterates through the links in data(), i stands for index
            we use the paths in the links array-->
            <v-list-item
              v-for="(link, i) in links"
              :key="i"
              :to="link.to"
              :active-class="color"
              class="ms-4"
            >
              
              <!-- this builds the list of links by iterating, uses it to get correct icons/text too -->
              <v-list-item-action>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-title v-text="link.text" />
            </v-list-item>
            <v-divider class="mt-2"/>
            <v-list-item class="ms-2">
              <v-switch v-model="alwaysClosed" :label=' alwaysClosed ? "Temp Drawer on"  : "Persistant Drawer on"' color="primary"  />
            </v-list-item>
          </v-row>
        </v-img>
        </v-sheet>
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
          drawer: this.drawerState, // this is just here for the watcher to wrok
          alwaysClosed: true,
          crdBottom: false,
          btnColor: "tertiary",
          logo: "./img/redditicon.png",
          links: [
            {
              to: "/",
              icon: "mdi-view-dashboard",
              text: "Home",
            },
            {
              to: "/user-profile",
              icon: "mdi-account",
              text: "User Profile",
            },
            {
              to: "/table-list",
              icon: "mdi-clipboard-outline",
              text: "Table List",
            },
            {
              to: "/user-tables",
              icon: "mdi-clipboard-outline",
              text: "CRUD Tables",
            },
            {
              to: "/maps",
              icon: "mdi-map-marker",
              text: "Maps",
            },
            {
              to: "/notifications",
              icon: "mdi-bell",
              text: "Notifications",
            },
          ],
            
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
      ...mapState('drawertoggle',['drawerState',"image", "color"]
      ),

    },
    methods: {
      persistantDrawer(){
        this.alwaysClosed = !this.alwaysClosed
      }
    },

}
</script>

<style>

</style>