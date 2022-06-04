import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from '@/components/layouts/AppLayout'
import Cards from '@/views/CardsView'
import Card from '@/views/CardView'
import Home from '@/views/HomeView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'cards',
        name: 'cards',
        component: Cards
      },
      {
        path: 'card/:slug',
        name: 'card',
        component: Card
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
