<template>
  <BackButton class="ml-8" @click="router.push({ name: 'Catalog' })" />
  <div class="text-center" v-if="!productStore.cart.length">
    <h1 class="text-3xl font-bold">The cart is empty</h1>
  </div>
  <div v-else>
    <div v-for="product in productStore.cart" :key="product.id">
      <div class="flex md:flex-row flex-col justify-between md:items-center shadow-2xl rounded-xl md:p-16 p-8 md:gap-0 gap-2">
        <img :src="product.thumbnail" alt="" class="rounded-xl md:w-[20%] w-[100%]" />
        <span>Brand: {{ product.brand }}</span>
        <span>Category: {{ product.category }}</span>
        <span>Price: ${{ product.price }}</span>
        <div class="quantity">
          <button @click="productStore.addToCart(product)">+</button>
          <span class="mx-4 font-bold">
            {{ product.quantity }}
          </span>
          <button @click="productStore.decreaseItemQuantity(product.id)">-</button>
        </div>
        <RemoveButton @click="removeFromCart(product.id)">Remove</RemoveButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { productsStore } from '@/stores/products'
import { useRouter } from 'vue-router'
import BackButton from '../components/BackButton.vue'
import RemoveButton from '@/components/RemoveButton.vue';

const productStore = productsStore()
const router = useRouter()

const removeFromCart = (id) => {
  productStore.removeFromCart(id)
}
</script>
