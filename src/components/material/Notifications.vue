<template>
    <v-menu
    :close-on-content-click ="false"
    auto
    :bottom="true"
    >
        <!-- this v-menu and activator is usenotifOnd to control the v-list showing -->
        <template #activator="{ on : onbtn , attrs  }" >
            <v-badge
                :content="notificationNum"
                :value="notificationNum"
                color ="blue"
                overlap
                offset-y= 23px
            >
                <v-btn
                    id ="notifbtn"
                    elevation ="2"
                    icon
                    v-bind="attrs"
                    v-on="onbtn"
                >
                    <v-icon>mdi-bell</v-icon>
                </v-btn>
            </v-badge>
        </template>
        <v-card>
            <v-list>
                <v-container >
                    <v-row wrap>
                        <v-col >
                            <v-subheader
                                v-if="notifHeader"
                                :key="notifHeader"
                            >
                                {{ notifHeader }}
                            </v-subheader>
                            <template 
                                v-for="(value, index) in notifications"
                            >
                                <v-divider
                                    v-if="value.divider"
                                    :key="index"
                                />
                                <v-list-item
                                    :key="value.title"
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
                                <router-link to="notifications">
                                    <v-btn >
                                        View all notifications
                                    </v-btn>
                                </router-link>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-container>
            </v-list>
        </v-card>
		</v-menu>
</template>

<script>
import {  mapGetters } from "vuex";
export default {
data () {
    return {
        notifications: [],
        notificationNum: null,
        notificationLimit: 5,
        notifHeader: this.getNotifHeader
    }
},

computed: {
    ...mapGetters(['getNotifications', 'getNotifHeader']),

},

watch: {
    getNotifHeader: function (){
        // waits for update on state and updates header from state
        this.notifHeader = this.getNotifHeader
    }
},

created() {
    // sets the notification prop used in the v-badge
    this.notifications = this.getNotifications
    // gets the noticiation amount based on the length of the notificaitons array
    this.notificationNum = this.notifications.length
    this.notifHeader = this.getNotifHeader
    console.log("this.notifcation:  " , this.notifications)
},
beforeDestroy() {
},

methods: {

}
}
</script>

<style>

</style>