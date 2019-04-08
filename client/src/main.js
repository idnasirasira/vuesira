// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './components'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import 'chartist/dist/chartist.min.css'
import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
import 'vuetify/src/stylus/app.styl'
import VuetifyConfirm from 'vuetify-confirm'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'md'
  // theme: {
  //   primary: '',
  //   success: '',
  //   info: '',
  //   error: ''
  // }
})

Vue.use(VuetifyConfirm, {
  buttonTrueText: 'Yes',
  buttonFalseText: 'No',
  color: 'warning',
  icon: 'warning',
  title: 'Warning',
  width: 350,
  property: '$confirm'
})

Vue.use(VueToastr, {
  defaultPosition: 'toast-bottom-right',
  defaultType: 'info',
  defaultTimeout: 2000
})

Vue.use(require('vue-chartist'))

Vue.mixin({
  methods: {
    goTo (route) {
      router.push({
        name: route
      })
    }
  }
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
