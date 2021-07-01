<template>
    <v-card color="primary" min-width="300" >
        <v-container>
            <v-row justify="center" class="mb-1" >
                <v-col cols="3" justify-center>
                    <v-avatar size="70">
                        <img
                            src="https://bookingagentinfo.com/wp-content/uploads/2014/12/Travis-Scott-Contact-Information.jpg"
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
            <v-divider />
            <v-card  >
            <v-row justify="center" style="background:#78909C" >
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
export default {
    data() {
    return {
        
    };
},
    props: ['buttonColor'],
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