import Vue from 'vue'
import Router from 'vue-router'
import * as Auth from '@/components/pages/Authentication'

// Pages
import { HOME_PAGE, AUTH, ADMIN_PAGE } from '@/constants/pages'
import Home from '@/components/pages/Home'
import Authentication from '@/components/pages/Authentication/Authentication'

// Global components
import Header from '@/components/Header'
import List from '@/components/List/List'
import Create from '@/components/pages/Create'

// Register components
Vue.component('app-header', Header)
Vue.component('list', List)
Vue.component('create', Create)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: HOME_PAGE,
      components: {
        default: Home,
        header: Header,
        list: List,
        create: Create
      }
    },
    {
      path: '/login',
      name: AUTH,
      component: Authentication
    },
    {
      path: '/admin',
      name: ADMIN_PAGE,
      // components: {
      //   header: Header,
      //   list: List,
      //   create: Create
      // }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (Auth.default.user.authenticated) {
      next()
    } else {
      router.push('/login')
    }
  } else {
    next()
  }
})

export default router
