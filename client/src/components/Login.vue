<template>
  <v-layout flex align-center justify-center>
    <v-flex md4 xs10 ml-2 mr-2>
      <div class="white elevation-2">
        <v-toolbar flat dense class="red darken-1" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-4 pb-4">
          <v-form ref="form">
            <v-text-field
              type="email"
              v-model="email"
              label="Email"
            ></v-text-field>
            <v-text-field
              type="password"
              v-model="password"
              label="password"
            ></v-text-field>
            <div class="has-error" v-html="error"></div>
            <v-btn
              @click="login"
              color="red darken-1"
              dark>Login</v-btn>
          </v-form>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color:red;
}
</style>
