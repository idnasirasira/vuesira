<template>
  <v-layout flex align-center justify-center>
    <v-flex md4 xs10 ml-2 mr-2>
      <Panel title="Add Song">
        <v-form ref="form">
          <v-text-field
            type="title"
            :rules="[required]"
            v-model="song.title"
            label="title"
          ></v-text-field>
          <v-text-field
            type="artist"
            :rules="[required]"
            v-model="song.artist"
            label="artist"
          ></v-text-field>
          <v-text-field
            type="genre"
            :rules="[required]"
            v-model="song.genre"
            label="genre"
          ></v-text-field>
          <v-text-field
            type="album"
            :rules="[required]"
            v-model="song.album"
            label="album"
          ></v-text-field>
          <v-text-field
            type="albumImageUrl"
            :rules="[required]"
            v-model="song.albumImageUrl"
            label="albumImageUrl"
          ></v-text-field>
          <v-text-field
            type="youtubeId"
            :rules="[required]"
            v-model="song.youtubeId"
            label="youtubeId"
          ></v-text-field>
          <div v-if="error" class="has-error">
            {{error}}
          </div>
          <v-btn
            @click="addSong"
            color="red darken-1"
            dark>Save</v-btn>
        </v-form>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      song: {
        title: 'Judul Lagunya',
        artist: 'Aris A',
        genre: 'Pop',
        album: 'Popupa',
        albumImageUrl: 'https://images.unsplash.com/photo-1510411487635-d0a53c2afe5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
        youtubeId: 'Aris A',
        lyrics: 'Hola aga sdjhak sdjh ka lorem20',
        tab: 'Hola aga sdjhak sdjh ka lorem2'
      },
      error: null,
      required: (value) => !!value || 'This field is required'
    }
  },
  methods: {
    async addSong () {
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'You need to fill all field'
        return
      }

      try {
        console.log(this.song)
        const response = await SongsService.post(this.song)

        console.log(response)
        this.$router.push('/songs')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
