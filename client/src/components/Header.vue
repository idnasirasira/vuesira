<template>
  <nav>
    <v-toolbar app dark>
      <v-toolbar-side-icon v-if="$store.state.isUserLoggedIn" @click="drawer = !drawer"></v-toolbar-side-icon>
        <router-link tag="a" class="link" to="/">
          <v-toolbar-title class="white--text">
            Vuesira
          </v-toolbar-title>
        </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <template v-if="!$store.state.isUserLoggedIn">
          <v-btn to="/register" flat>
            Register
          </v-btn>

          <v-btn to="/login" flat>
            Login
          </v-btn>
        </template>
        <template v-else>
          <v-btn @click="logout" flat>
            <span>Logout </span>
            <v-icon right>logout</v-icon>
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app dark>
      <v-layout column align-center>
        <v-flex class="my-4">
          <router-link tag="a" class="link" to="/user/profile">
            <v-avatar size="100">
              <img src="../assets/default-avatar.png" alt="">
            </v-avatar>
          </router-link>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text"> {{link.text}} </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup'
export default {
  components: {
    Popup
  },
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'person', text: 'User', route: '/users' }
      ]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.goTo('login')
    }
  }
}
</script>

<style scoped>
.link{
  text-decoration: none;
}
</style>
