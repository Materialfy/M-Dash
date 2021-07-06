<template>
    <v-card color="primary" min-width="250" >
        <v-container>
            <v-row justify="center" class="mb-1" >
                <v-col cols="3" justify-center>
                    <v-avatar size="70">
                        <img
                            :src='getAvatar'
                            alt="User Avatar"
                        >
                    </v-avatar>
                </v-col>
                <v-col cols="9" justify-center align-self="auto">
                    <v-card-title class="pa--20">
                        Travis Scott
                    </v-card-title>
                    <v-card-subtitle>
                        <v-divider />
                        Adminstrator
                    </v-card-subtitle>
                </v-col>
            </v-row>
            <!-- these controls the search displaying in userSnippet -->
            <v-divider />
            <!-- this controls if the search box is shown -->
            <v-row  v-if="cardSearch" >
                <v-col class="d-flex justify-center" >
                    <v-text-field
                        v-model="message"
                        label="Search.."
                        prepend-inner-icon="mdi-magnify"
                        outlined
                        clearable
                        dense
                        color="tertiary"

                    >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-card v-if="cardBottom" >
                <v-divider />
                <!-- this changes the background color based on theme -->
                <v-row justify="center" :style="$vuetify.theme.dark ? 'background:#757575 ':'background:#78909C'" >
                    <v-col class="d-flex justify-center" >
                        <router-link to="user-profile">
                            <v-btn :color="buttonColor" >Profile</v-btn>
                        </router-link>
                    </v-col>
                    <v-col class="d-flex justify-center">
                        <v-btn  icon :color="buttonColor">
                            Logout
                            <v-icon @click="logout">mdi-power</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "UserSnippet",
    data() {
    return {
        message: null,
    }
    },
    computed: {
        ...mapGetters(['getAvatar'])
    },
    props: ['buttonColor', 'cardBottom', 'cardSearch'],
    methods: {
    logout: function () {
        this.$store.dispatch("logout").then(() => {
            this.$router.push("/");
        });
    },		
},
}
</script>

<style>

</style>