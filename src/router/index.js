import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
// import Yo from '@/components/Yo'
// import Register from '@/components/Register'
import IssuerPage from '@/components/IssuerPage'
import RecipientPage from '@/components/RecipientPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/issuerPage',
      name: 'issuerPage',
      component: IssuerPage
    },
    {
      path: '/recipientPage',
      name: 'recipientPage',
      component: RecipientPage
    }
  ]
})
