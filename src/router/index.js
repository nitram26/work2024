import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BackendView from '@/views/back/backendView.vue'
import StoreView from '@/views/store/StoreView.vue'
import Vue2View from '@/views/front/Vue2View.vue'
import Vue3View from '@/views/front/Vue3View.vue'
import DataView from '@/views/data/DataView.vue'
import FrontView from '@/views/front/FrontView.vue'
import HomeFrontView from '@/views/front/HomeFrontView.vue'
import ProjectView from '@/views/proyectos/ProjectView.vue'
import WorkView from '@/views/WorkView.vue'
import StudiumView from '@/views/studium/StudiumView.vue'
import VuetifyView from '@/views/framework/vuetify/VuetifyView.vue'
import ContainmentView from '@/views/framework/vuetify/containment/ContainmentView.vue'
import NavigationView from '@/views/framework/vuetify/navigation/NavigationView.vue'
import FormInput from '../views/framework/vuetify/formInput/FormInput.vue'
import FrameWork from '@/views/framework/FrameWork.vue'
import Angular from '@/views/framework/angular/Angular.vue'
import Javascript from '@/views/front/JavascriptView.vue'
import GraphQl from '@/views/data/GraphQl.vue'

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
  {
    path: '/studium',
    name: 'Studium',
    component: StudiumView
  },
  {
    path: '/vuetify',
    name: 'Vuetify',
    component: VuetifyView
  },
  {
    path: '/containment',
    name: 'Containment',
    component: ContainmentView
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: NavigationView
  },
  {
    path: '/formInput',
    name: 'FormInput',
    component: FormInput
  },
  {
    path: '/framework',
    name: 'Framework',
    component: FrameWork
  },
  {
    path: '/angular',
    name: 'Angular',
    component: Angular
  },
  {
    path: '/javascript',
    name: 'Javascript',
    component: Javascript
  },
  {
    path: '/graph',
    name: 'Graph',
    component: GraphQl
  },
  
  
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
