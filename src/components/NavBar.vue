<template>
  <nav
    class="flex justify-around py-8 mx-4 mb-8 rounded-xl bg-gradient-to-r from-orange-500 via-amber-400 to-red-600"
  >
    <ul class="flex gap-4 font-bold">
      <router-link to="/">Home page</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/about">About</router-link>
    </ul>
    <div class="cart-items" @click="router.push({ name: 'CartView' })">
      <!-- <p>Items in cart: {{ productStore.cart.length }}</p> -->
      <p>Items in cart: {{ itemsTotal }}</p>
    </div>
  </nav>
  <div class="border-2 border-black h-[300px] w-[100%]">
    <img class="h-full w-full object-cover" src="/public/hero.png" alt="" />
  </div>
  <div class="flex gap-4 justify-center py-12">
    <router-link to="/">All products</router-link>
    |
    <router-link to="/categories">Categories</router-link>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { productsStore } from '@/stores/products'
import { computed } from 'vue'

const router = useRouter()
const productStore = productsStore()

const itemsTotal = computed(() => {
  let quantityTotal = 0
  productStore.cart.forEach((item) => {
    quantityTotal += Number(item.quantity)
  })
  return quantityTotal
})
</script>
