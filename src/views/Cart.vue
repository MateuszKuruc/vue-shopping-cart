<template>
  <button @click="router.push({ name: 'catalog' })">Back to catalog</button>
  <div class="empty-cart" v-if="!productStore.cart.length">
    <h1>Empty Cart...</h1>
  </div>
  <div class="cart-items" v-else>
    <div class="cart-item" v-for="product in productStore.cart" :key="product.id">
      <div class="item-details">
        <img :src="product.thumbnail" alt="" />
        <span>Brand: {{ product.brand }}</span>
        <span>Category: {{ product.category }}</span>
        <span>Price: ${{ product.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { productsStore } from '@/stores/products'
import { useRouter } from 'vue-router'

const productStore = productsStore()
const router = useRouter()
</script>

<style scoped>
.empty-cart {
  text-align: center;
}
.cart-items {
}
.cart-item {
}
.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 16px;
}
.item-details img {
  width: 20%;
  /* border-radius: 2rem; */
}
</style>
