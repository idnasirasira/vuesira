<template>
  <v-layout flex align-center justify-center>
    <v-flex md4 xs10 ml-2 mr-2>
      <Panel title="Login">
        <v-form ref="form" @submit="login">
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
            <v-alert
              :value=error
              v-html="error"
              color="error"></v-alert>
            <v-btn
              type="submit"
              :loading="loading"
              :disabled="loading"
              color="secondary"
              @click="login"
            >
              Login
            </v-btn>
          </v-form>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      loader: null,
      loading: false,
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      this.loading = true
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.loading = false

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)

        this.goTo('dashboard')
      } catch (error) {
        this.error = error.response.data.error
        this.loading = false
      }
    }
  },
  components: {
    Panel
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
