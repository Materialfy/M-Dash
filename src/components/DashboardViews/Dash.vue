<template>
<v-container color="primary" >
   <v-row >
          <v-col
            v-for="n in 9"
            :key="n"
            cols="4"
            
          >
            <v-card color ="secondary" height="200"></v-card>
          </v-col>
        </v-row>
        </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>