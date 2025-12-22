import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactPage from '../views/ContactPage.vue'
import BeyondTechPage from '../views/BeyondTechPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/beyond-tech',
    name: 'BeyondTech',
    component: BeyondTechPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/zakaria-olamine-portfolio/' : '/'),
  routes
})

export default router

