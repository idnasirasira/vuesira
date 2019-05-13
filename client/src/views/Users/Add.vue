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
            title="Add User"
            text=""
          >
            <div>
              <v-flex
                md12 row>
                <v-form
                  ref="form"
                  @submit.prevent="validate"
                  v-model="valid"
                  lazy-validation>

                  <v-layout
                    wrap>
                    <v-flex md6 sm6>
                      <v-text-field
                        type="text"
                        v-model="user.first_name"
                        label="First Name"
                        :rules="rules.first_name"
                      ></v-text-field>
                    </v-flex>

                    <v-flex md6 sm6>
                      <v-text-field
                        type="text"
                        v-model="user.last_name"
                        label="Last Name"
                        :rules="rules.last_name"
                      ></v-text-field>
                    </v-flex>

                    <v-flex md12 sm12>
                      <v-text-field
                        type="email"
                        v-model="user.email"
                        label="Email"
                        :rules="rules.email"
                      ></v-text-field>
                    </v-flex>

                    <v-flex md12 sm12 xs12>
                      <v-text-field
                        type="password"
                        v-model="user.password"
                        :rules="rules.password"
                        label="Password"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-alert
                    :value=error
                    v-html="error"
                    color="error"></v-alert>

                  <v-card-actions>
                    <v-layout>
                      <v-flex md12>
                          <v-btn type="submit" class="ml-3 right" @click.prevent="validate" color="success" dark>Add</v-btn>
                          <v-btn class="ml-3 right" @click="goTo('users')" color="" dark>Back</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-card-actions>
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
      loading: false,
      error: null,
      snackbar: false,
      valid: false,
      rules: {
        first_name: [
          v => !!v || 'First Name is required'
        ],
        last_name: [
          v => !!v || 'Last Name is required'
        ],
        email: [
          v => !!v || 'Email is required'
        ],
        password: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password cannot be less than 8 characters'
        ]
      },
      user: {
        first_name: null,
        last_name: null,
        full_name: null,
        email: null,
        password: null
      }
    }
  },
  methods: {
    validate () {
      console.log(this.$refs.form.validate())
      if (this.$refs.form.validate()) {
        this.addUser()
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    async addUser () {
      try {
        this.user.full_name = `${this.user.first_name} ${this.user.last_name}`

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
