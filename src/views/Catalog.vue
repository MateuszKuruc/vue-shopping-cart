<template>
  <h1>Catalog</h1>
</template>

<script setup>
import { onMounted } from 'vue'
import { productsStore } from '@/stores/products'

const productStore = productsStore();

onMounted(() => {
  console.log('mounted')
})
</script>
