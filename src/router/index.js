import ProductCatalog from '@/views/ProductCatalog.vue'
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
      component: () => import('@/views/ProductCategories.vue')
    },
    {
      path: '/categories/:id',
      name: 'Category',
      component: () => import('@/views/ProductCategory.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: () => import('@/views/ProductDetails.vue')
    },
    {
      path: '/cart',
      name: 'CartView',
      component: () => import('@/views/ShoppingCart.vue')
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: () => import('@/views/RegisterPage.vue')
    }
  ]
})

export default router
