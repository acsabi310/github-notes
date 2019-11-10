import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/404.vue'
import store from '../store'

const beforeEnterGuard = (to, from, next) => {
  console.log(store.state.gistId)
  if (!store.state.gistId) {
    next('/')
  } else {
    next()
  }
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "create" */ '../views/Create.vue'),
    beforeEnter: beforeEnterGuard
  },
  {
    path: '/files/:filename',
    name: 'select',
    component: () => import(/* webpackChunkName: "edit" */ '../views/Select.vue'),
    beforeEnter: beforeEnterGuard
  },
  {
    path: '/files/:filename/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue'),
    beforeEnter: beforeEnterGuard
  },
  {
    path: '/add-access-token',
    name: 'add-access-token',
    component: () => import(/* webpackChunkName: "edit" */ '../views/AccessToken.vue')
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
