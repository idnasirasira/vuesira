<template>
  <v-toolbar fixed dark color="red">
    <v-toolbar-side-icon></v-toolbar-side-icon>
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

        <v-btn to="/Login" flat>
          Login
        </v-btn>
      </template>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.link{
  text-decoration: none;
}
</style>
