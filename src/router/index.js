import Cart from '@/views/Cart.vue'
import Catalog from '@/views/Catalog.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductDetails
    },
    {
      path: '/cart',
      name: 'CartView',
      component: Cart
    }
  ]
})

export default router
