<template>
  <div id="app">
    <v-app>
      <page-header/>

      <v-content class="ma-4">
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>

</style>
