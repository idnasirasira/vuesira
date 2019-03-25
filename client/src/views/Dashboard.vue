<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn
            slot="activator"
            small flat color="grey"
            @click="sortBy('title')">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By Project Name</span>
          </v-btn>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn
            slot="activator"
            small flat color="grey"
            @click="sortBy('personName')">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By Person</span>
          </v-btn>
          <span>Sort projects by project person</span>
        </v-tooltip>
      </v-layout>

      <v-card v-for="project in projects" :key="project.id">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.personName}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{project.dueBy}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>
              <v-chip small :class="`${project.status} white--text caption my-2`">
                {{project.status}}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'Create A Website',
          personName: 'Aris',
          dueBy: '20 Jan 2019',
          status: 'ongoing'
        },
        {
          id: 2,
          title: 'Project Learn',
          personName: 'Zaky',
          dueBy: '20 Jan 2019',
          status: 'complete'
        },
        {
          id: 3,
          title: 'Nabung 1 Miliar',
          personName: 'Donny',
          dueBy: '20 Jan 2019',
          status: 'failed'
        },
        {
          id: 5,
          title: 'Aabung 1 Miliar',
          personName: 'zonny',
          dueBy: '20 Jan 2019',
          status: 'failed'
        }
      ]
    }
  },
  methods: {
    sortBy (prop) {
      console.log(prop)
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>

<style scoped>
.project.complete {
  border-left: 4px solid greenyellow
}

.project.ongoing {
  border-left: 4px solid orange
}

.project.failed {
  border-left: 4px solid tomato
}

.v-chip.complete {
  background: greenyellow
}

.v-chip.ongoing {
  background: orange
}

.v-chip.failed {
  background: tomato
}
</style>
