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
      <v-btn to="/register" flat>
        Register
      </v-btn>
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

