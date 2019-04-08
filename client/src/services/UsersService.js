import Api from '@/services/Api'

export default {
  index () {
    return Api().get('users')
  },

  post (user) {
    return Api().post('users', user)
  },

  store (user) {
    return Api().put('users', user)
  },

  delete (id) {
    return Api().delete('users/' + id)
  },

  getUsersDatatable (param) {
    return Api().post('users/datatable', param)
  }

}
