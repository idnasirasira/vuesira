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
            <span class="caption text-lowercase">Project</span>
          </v-btn>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn
            slot="activator"
            small flat color="grey"
            @click="sortBy('personName')">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">Person</span>
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
            <div class="caption grey--text">Due Date</div>
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
          title: 'Vuesira (Framework)',
          personName: 'idnasirasira',
          dueBy: '01 July 2019',
          status: 'ongoing'
        },
        {
          id: 2,
          title: 'Derby Personal Website (Wordpress)',
          personName: 'idnasirasira',
          dueBy: '20 Feb 2018',
          status: 'complete'
        },
        {
          id: 3,
          title: 'Android App Arisan Online - Kocokin (Native)',
          personName: 'Donny',
          dueBy: '20 March 2019',
          status: 'overdue'
        },
        {
          id: 5,
          title: 'Porto - Bantu (Native Apps)',
          personName: 'idnasirasira',
          dueBy: '01 Jan 2020',
          status: 'complete'
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

.project.overdue {
  border-left: 4px solid tomato
}

.v-chip.complete {
  background: greenyellow
}

.v-chip.ongoing {
  background: orange
}

.v-chip.overdue {
  background: tomato
}
</style>
