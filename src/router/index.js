import ShoppingCart from '@/views/ShoppingCart.vue'
import ProductCatalog from '@/views/ProductCatalog.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import ProductCategories from '@/views/ProductCategories.vue'
import AboutView from '@/views/AboutView.vue'
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
      path: '/categories',
      name: 'Categories',
      component: ProductCategories
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
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
