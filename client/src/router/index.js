import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

/* Page View */
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import Register from '@/views/Register'
import UserProfile from '@/views/UserProfile'
import Users from '@/views/Users/Index'
import UsersAdd from '@/views/Users/Add'

Vue.use(Router)
const checkAuthStatus = (to, from, next) => {
  if (!store.state.isUserLoggedIn) {
    next('login')
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: checkAuthStatus
    },
    {
      path: '/user/profile',
      name: 'user-profile',
      component: UserProfile,
      beforeEnter: checkAuthStatus
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      beforeEnter: checkAuthStatus
    },
    {
      path: '/users/add',
      name: 'users-add',
      component: UsersAdd,
      beforeEnter: checkAuthStatus
    }
  ]
})
