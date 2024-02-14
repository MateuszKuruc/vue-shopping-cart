<template>
  <div class="products-list">
    <div class="product" v-for="product in productStore.products" :key="product.id">
      <img :src="product.thumbnail" alt="" />
      <h2>Brand: {{ product.brand }}</h2>
      <p>Description: {{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { productsStore } from '@/stores/products'

const productStore = productsStore()

onMounted(() => {
  console.log('mounted')
  productStore.fetchProductsFromDB()
})
</script>
