<template>
    <v-menu
    :close-on-content-click ="false"
    nudge-left="60"
    nudge-bottom="60"
    transition="slide-y-transition"
    >
        <!-- this v-menu and activator is used to control the v-card showing -->
        <template #activator="{ on : onbtn , attrs  }" >
            <v-badge
                :content="getNotificationAmt"
                :value="getNotificationAmt"
                color ="blue"
                overlap
                offset-y= 23px
            >
                <v-btn
                    id ="notifbtn"
                    icon
                    :color="buttonColor"
                    v-bind="attrs"
                    v-on="onbtn"

                >
                    <v-icon  >mdi-bell</v-icon>
                </v-btn>
            </v-badge>
        </template>
            <v-list 
                max-width="450"
                color="primary"
            >
                <v-subheader
                    v-if="getNotifHeader"
                    :key="getNotifHeader"
                    
                >
                    Refreshed: {{ notificationHeader }}
                </v-subheader>
                <template 
                    v-for="(value, index) in getNotifications"
                >
                    <v-divider
                        v-if="value.divider"
                        :key="index"
                    />
                    <v-list-item
                        :key="value.title"
                        three-line
                        to="Notifications"
                        
                    >
                        <v-list-item-avatar
                            :key="value.avatar"
                        >
                            <img :src="value.avatar">
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-html="value.title" />
                            <v-list-item-subtitle v-html="value.subtitle" /> 
                        </v-list-item-content>
                    </v-list-item>
                </template>
                <v-list-item 
                >
                    <router-link  to="notifications">
                        <v-btn justify-center>
                            View all notifications
                        </v-btn>
                    </router-link>
                </v-list-item>
            </v-list>
		</v-menu>
</template>

<script>
import {  mapGetters } from "vuex";
export default {
data () {
    return {
        notificationLimit: 5, //use in for loop 
        notifHeader: null
    }
},
props: ['buttonColor'],

computed: {
    ...mapGetters(['getNotifications', 'getNotifHeader', 'getNotificationAmt']),
    // getNotifAmt gets the noticiation amount based on the length of the notificaitons array
        notificationHeader: function (){
        // waits for update on state and updates header from state
        console.log("notification header method")

        return this.getNotifHeader
    }
},

watch: {

},

created() {

},
beforeDestroy() {
},

methods: {

}
}
</script>

<style>

</style>