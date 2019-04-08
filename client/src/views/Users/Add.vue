<template>
  <v-container
      fill-height
      fluid
      grid-list-xl
    >
      <v-layout
        justify-center
        wrap
      >
        <v-flex
          md12
        >
          <material-card
            color="dark"
            title="Data Pengguna"
            text="Daftar pengguna vuesira"
          >
            <div>
              <v-flex
                md12>

                <v-form ref="form">
                  <v-text-field
                    type="email"
                    v-model="user.email"
                    label="Email"
                  ></v-text-field>
                  <v-text-field
                    type="password"
                    v-model="user.password"
                    label="password"
                  ></v-text-field>
                  <div class="has-error" v-html="error"></div>
                  <v-btn @click="addUser" color="red darken-1" dark>Register</v-btn>
                </v-form>

              </v-flex>
            </div>
          </material-card>
        </v-flex>
      </v-layout>
  </v-container>

</template>

<script>
import UsersService from '@/services/UsersService'

export default {
  data () {
    return {
      error: null,
      user: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    async addUser () {
      try {
        const response = await UsersService.store(this.user)

        if (response.status === 200) {
          this.goTo('users')
        }
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
