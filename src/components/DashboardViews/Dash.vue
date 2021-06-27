<template>
   <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
            
          >
            <v-card color ="secondary" height="200"></v-card>
          </v-col>
        </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>