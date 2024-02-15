import ShoppingCart from '@/views/ShoppingCart.vue'
import ProductCatalog from '@/views/ProductCatalog.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: ProductCatalog
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductDetails
    },
    {
      path: '/cart',
      name: 'CartView',
      component: ShoppingCart
    }
  ]
})

export default router
