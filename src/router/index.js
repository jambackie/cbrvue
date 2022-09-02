import { createRouter, createWebHistory } from 'vue-router'
import ListPage from '../views/ListPage.vue'
import ConverterPage from '../views/ConverterPage.vue'

const routes = [
  {
    name: 'list',
    path: '/',
    component: ListPage,
  },
  {
    name: 'converter',
    path: '/converter',
    component: ConverterPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
