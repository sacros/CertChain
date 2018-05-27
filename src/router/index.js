import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Signup from '@/components/Signup'
import Yo from '@/components/Yo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/yo',
      name: 'yo',
      component: Yo
    }
  ]
})
