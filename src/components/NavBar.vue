<template>
  <nav class="flex justify-around py-8 mx-4 mb-8 rounded-xl bg-gradient-to-r from-orange-500 via-amber-400 to-red-600">
    <ul class="flex gap-4 font-bold">
      <router-link to="/">Home page</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/about">About</router-link>
    </ul>
    <div class="cart-items" @click="router.push({ name: 'CartView' })">
      <p>Items in cart: {{ productStore.cart.length }}</p>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { productsStore } from '@/stores/products'

const router = useRouter()
const productStore = productsStore()
</script>
