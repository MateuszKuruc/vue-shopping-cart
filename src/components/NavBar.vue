<template>
  <nav
    class="sticky w-[100%] top-0 flex justify-around py-8 mx-4 mb-8 rounded-xl bg-gradient-to-r from-green-500 to-green-800"
  >
    <ul class="flex gap-4 font-bold">
      <router-link class="hover:text-slate-200" to="/">Home page</router-link>
      <router-link class="hover:text-slate-200" to="/categories">Categories</router-link>
      <router-link class="hover:text-slate-200" to="/shipping">Shipping</router-link>
      <router-link class="hover:text-slate-200" to="/about">About</router-link>
    </ul>
    <div @click="router.push({ name: 'CartView' })">
      <i class="fa badge fa-lg cursor-pointer" :value="itemsTotal">&#xf07a;</i>
    </div>
  </nav>
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
