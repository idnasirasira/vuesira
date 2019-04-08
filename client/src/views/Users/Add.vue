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
                <v-form ref="form" @submit="addUser">
                  <v-text-field
                    type="text"
                    v-model="user.full_name"
                    label="Full Name"
                  ></v-text-field>
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
                  <v-alert
                    :value=error
                    v-html="error"
                    color="error"></v-alert>
                </v-form>
              </v-flex>
            </div>

            <v-layout slot="actions">
              <v-flex md12>
                  <v-btn type="submit" class="ml-3 right" @click="addUser" color="success" dark>Add</v-btn>
                  <v-btn class="ml-3 right" @click="goTo('users')" color="" dark>Back</v-btn>
              </v-flex>
            </v-layout>
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
        full_name: null,
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
