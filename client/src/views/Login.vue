<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex md5 sm8 xs12>
      <v-form ref="form" @submit="login">
        <v-card>
          <v-flex class="ml-5 mr-5 pt-4 pb-5">
            <div class="text-xs-center">
              <h1 class="al">Login</h1>
            </div>

            <br />

            <v-text-field
              type="email"
              v-model="email"
              label="Email"
              :rules="rules.email"
            ></v-text-field>
            <v-text-field
              type="password"
              v-model="password"
              label="Password"
              :rules="rules.password"
            ></v-text-field>
            <v-alert
              :value=error
              v-html="error"
              color="error"></v-alert>

            <v-btn
              class="mt-2"
              block
              type="submit"
              :loading="loading"
              :disabled="loading"
              @click.prevent="validate"
            >
              Login
            </v-btn>

            <v-layout justify-center row fill-height class="mt-3">
              <v-flex class="mt-2"><hr></v-flex>
              <v-flex class="text-xs-center">OR</v-flex>
              <v-flex class="mt-2"><hr></v-flex>
            </v-layout>

            <v-layout justify-center column>
              <v-flex xs12>
                <v-btn
                  block
                  :loading="loading"
                  :disabled="loading"
                  @click="loginFacebook"
                  color="secondary"
                >
                  Log in with Facebook
                </v-btn>
              </v-flex>
              <v-flex xs12>
                <a>
                  Forgot password?
                </a>
              </v-flex>
            </v-layout>

          </v-flex>
        </v-card>

        <v-card class="mt-3 pt-3">
          <v-card-text>
            <p class="text-xs-center">
              Don't have an account? <a @click="goTo('register')">Sign Up</a>
            </p>
          </v-card-text>
        </v-card>
      </v-form>
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
      error: null,
      rules: {
        email: [
          v => !!v || 'Email is required'
        ],
        password: [
          v => !!v || 'Password is required'
        ]
      }
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.login()
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
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
        setTimeout(() => {
          this.loading = false
        }, 500)
      }
    },
    loginFacebook () {
      console.log('Login facebook is under Maintenance')
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
