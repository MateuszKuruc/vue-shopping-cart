<template>
  <div class="products-list">
    <div
      class="gradient-border border-2 rounded-xl m-8 p-16 shadow-2xl cursor-pointer basis-[28%]"
      @click="openProductPage(product.id)"
      v-for="product in productStore.products"
      :key="product.id"
    >
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

<style scoped>
.products-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product-item img {
  width: 70%;
  /* height: 50%; */
}
</style>
