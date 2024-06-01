import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BackendView from '@/views/backendView.vue'
import StoreView from '@/views/StoreView.vue'
import Vue2View from '@/views/Vue2View.vue'
import Vue3View from '@/views/Vue3View.vue'
import DataView from '@/views/DataView.vue'
import FrontView from '@/views/FrontView.vue'
import HomeFrontView from '@/views/HomeFrontView.vue'
import ProjectView from '@/views/ProjectView.vue'
import WorkView from '@/views/WorkView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/backend',
    name: 'Backend',
    component: BackendView
  },
  {
    path: '/data',
    name: 'Data',
    component: DataView
  },
  {
    path: '/store',
    name: 'Store',
    component: StoreView
  },
  {
    path: '/front',
    name: 'Front',
    component: FrontView
  },
  {
    path: '/vue2',
    name: 'Vue2',
    component: Vue2View
  },
  {
    path: '/vue3',
    name: 'Vue3',
    component: Vue3View
  },
  {
    path: '/homeFront',
    name: 'HomeFront',
    component: HomeFrontView
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectView
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
