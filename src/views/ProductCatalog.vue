<template>
  <div class="flex justify-between flex-wrap mt-16 mb-32">
    <div
      class="category-container"
      @click="openProductPage(product.id)"
      v-for="product in productStore.products"
      :key="product.id"
    >
      <img class="w-[100%] rounded-xl object-cover" :src="product.thumbnail" alt="" />
      <h2>Brand: {{ product.brand }}</h2>
      <p>Description: {{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { productsStore } from '@/stores/products'
import { useRouter } from 'vue-router'

const productStore = productsStore()
const router = useRouter()

const openProductPage = (id) => {
  router.push({ name: 'ProductView', params: { id } })
}

onMounted(() => {
  productStore.fetchProductsFromDB()
})
</script>
