<template>
  <BackButton class="ml-8" @click="router.push({ name: 'Catalog' })" />
  <div class="text-center" v-if="!productStore.cart.length">
    <h1 class="text-3xl font-bold">The cart is empty</h1>
  </div>
  <div class="cart-items" v-else>
    <div class="cart-item" v-for="product in productStore.cart" :key="product.id">
      <div class="flex justify-between items-center mb-32 shadow-2xl rounded-xl p-16">
        <img :src="product.thumbnail" alt="" class="rounded-xl w-[20%]" />
        <span>Brand: {{ product.brand }}</span>
        <span>Category: {{ product.category }}</span>
        <span>Price: ${{ product.price }}</span>
        <div class="quantity">
          <button @click="productStore.addToCart(product)">+</button>{{ product.quantity
          }}<button @click="productStore.decreaseItemQuantity(product.id)">-</button>
        </div>
        <button @click="removeFromCart(product.id)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { productsStore } from '@/stores/products'
import { useRouter } from 'vue-router'
import BackButton from '../components/BackButton.vue'

const productStore = productsStore()
const router = useRouter()

const removeFromCart = (id) => {
  productStore.removeFromCart(id)
}
</script>
