import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import AboutPage from '../pages/AboutPage.vue'
// @ts-ignore
import CarDetailsPage from '../pages/CarDetailsPage.vue'
// @ts-ignore
import CarsPage from '../pages/CarsPage.vue'
// @ts-ignore
import HomePage from '../pages/HomePage.vue'
// @ts-ignore
import HousesPage from '../pages/HousesPage.vue'
// @ts-ignore
import HouseDetails from '../pages/HouseDetailsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  },
  {
    path: '/houses',
    name: 'Houses',
    component: HousesPage
  },
  {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },
  {
    path: '/houseDetails',
    name: 'HouseDetails',
    component: HouseDetails
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
