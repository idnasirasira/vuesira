<template>
  <v-dialog max-width="600">
    <v-btn flat slot="activator" class="success">Add new project</v-btn>
    <v-card>
      <v-card-title>
        <h3>Add a new project</h3>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title"></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
