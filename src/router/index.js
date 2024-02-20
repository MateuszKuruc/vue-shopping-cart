import ProductCatalog from '@/views/ProductCatalog.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'
import { useToast } from 'vue-toastification'

const toast = useToast()

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
    },
    {
      path: '/order',
      name: 'ConfirmOrder',
      component: () => import('@/views/ConfirmOrder.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      toast.info('No access, please log in')
      next('/login')
    }
  } else {
    next()
  }
})

export default router
