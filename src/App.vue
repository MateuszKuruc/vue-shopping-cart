<template>
  <NavBar>
      
  </NavBar>
    <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router'
import { productsStore } from './stores/products'
import NavBar from './components/NavBar.vue';

const router = useRouter()
const productStore = productsStore()
</script>

<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
</style>
