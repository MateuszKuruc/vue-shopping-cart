<template>
  <div class="products-list">
    <div
      class="product-item"
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
.product-item {
  flex-basis: 28%;
  margin: 8px;
  padding: 16px;
  box-shadow: 0px 0px 14px 1px #e6e6e6;
  cursor: pointer;
}
.product-item img {
  width: 70%;
  /* height: 50%; */
}
</style>
