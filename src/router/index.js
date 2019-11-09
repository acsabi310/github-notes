import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "create" */ '../views/Create.vue')
  },
  {
    path: '/files/:filename',
    name: 'select',
    component: () => import(/* webpackChunkName: "edit" */ '../views/Select.vue')
  },
  {
    path: '/files/:filename/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
