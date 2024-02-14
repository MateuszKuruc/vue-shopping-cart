<template>
  <button @click="router.push({ name: 'catalog' })">Back to Catalog</button>
  <div class="product">
    <div class="product-image">
      <img :src="selectedProduct.thumbnail" alt="" />
    </div>
    <div class="product-details">
      <p>Brand: {{ selectedProduct.brand }}</p>
      <p>Description: {{ selectedProduct.description }}</p>
      <h2>Price: {{ selectedProduct.price }}</h2>
      <button @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { productsStore } from '@/stores/products'
import { useRoute, useRouter } from 'vue-router'

const productStore = productsStore()
const route = useRoute()
const router = useRouter()

const selectedProduct = computed(() => {
  return productStore.products.find((item) => item.id === Number(route.params.id))
})

const addToCart = () => {
    console.log('aaaaa')
}

</script>

<style scoped>
.product {
  display: flex;
  margin-top: 50px;
}
.product-image {
  margin-right: 24px;
}
</style>
