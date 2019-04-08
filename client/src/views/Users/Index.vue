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

            <v-layout
              wrap>
              <v-flex md12>
                <v-btn class="right" color="success" @click="goTo('users-add')">Add New</v-btn>
              </v-flex>
            </v-layout>

            <div>
              <v-data-table
                :headers="headers"
                :items="users"
                :pagination.sync="pagination"
                :total-items="totalUsers"
                :loading="loading"
                class="elevation-1"
              >
                <template v-slot:items="data">
                  <td class="text-xs-left">{{ data.item.full_name }}</td>
                  <td class="text-xs-left">{{ data.item.email }}</td>
                  <td class="text-xs-center">
                    <v-btn
                      class="dt-action-btn"
                      @click="deleteUser(data.item.id)"
                      fab dark small color="error">
                      <v-icon dark>remove</v-icon>
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
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
      totalUsers: 0,
      users: [],
      loading: true,
      pagination: {},
      headers: [
        {
          text: 'Full Name',
          value: 'full_name'
        },
        { text: 'Email', value: 'email' },
        {
          text: 'Action',
          sortable: false,
          value: 'action'
        }
      ]
    }
  },
  watch: {
    pagination: {
      async handler () {
        this.getDataFromApi()
      },
      deep: true
    }
  },
  mounted () {
    // this.getDataFromApi()
  },
  methods: {
    async getDataFromApi () {
      this.loading = true

      let users = (await UsersService.getUsersDatatable(this.pagination)).data

      if (users.length !== 0) {
        this.users = users.rows
      }

      this.totalUsers = users.count

      this.loading = false
    },
    async deleteUser (id) {
      const res = await this.$confirm('Do you want to delete this user?', {
        title: 'Delete User',
        color: 'error'
      })

      if (res) {
        this.loading = true

        let response = (await UsersService.delete(id)).data

        this.$toastr(response.param, response.messages, response.param)

        this.getDataFromApi()

        this.loading = false
      }
    }

  }
}
</script>
