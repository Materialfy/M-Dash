<template>
  <v-content>
    <v-container
      fill-height
      fluid>
      <v-layout
        align-center
        justify-center>
        <v-flex
          xs12
          sm8
          md4>
          <v-card
            class="elevation-12">
            <v-toolbar
              color="general">
              <v-toolbar-title>Admin Panel</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field
                  ref="username"
                  v-model="username"
                  :rules="[() => !!username || 'This field is required']"
                  :error-messages="errorMessages"
                  prepend-icon="mdi-account"
                  label="Login"
                  placeholder="TotallyNotThanos"
                  required
                />
                <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[() => !!password || 'This field is required']"
                  :error-messages="errorMessages"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  label="Password"
                  placeholder="*********"
                  counter
                  required
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-divider class="mt-5"/>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                align-center
                justify-center
                color="general"
                @click="login">Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      password: '',
      errorMessages: '',
      formHasErrors: false,
      showPassword: false
    }
  },
  computed: {
    form () {
      return {
        username: this.username,
        password: this.password
      }
    },

  },
  methods: {
    login: function () {
      this.formHasErrors = false
      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) {
          this.formHasErrors = false
        }
        this.$refs[f].validate(true)
      })
    }
  },
  metaInfo () {
    return {
      title: 'Super Secret | Login'
    }
  }
}
</script>