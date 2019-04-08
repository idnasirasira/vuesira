<template>
  <v-layout flex align-center justify-center>
    <v-flex md4 xs10 ml-2 mr-2>
      <Panel title="Register">
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
          <v-btn @click="register" color="red darken-1" dark>Register</v-btn>
        </v-form>
      </Panel>

    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  name: 'register',
  data () {
    return {
      email: 'arris.smpn6@gmail.com',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispacth('setToken', response.data.token)
        this.$store.dispacth('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
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
.error{
  color:red;
}
</style>
