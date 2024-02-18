<template>
  <div class="flex justify-start flex-wrap md:mt-16 mt-8 md:mb-32 mb-8">
    <div
      class="category-container flex flex-col items-center"
      v-for="product in filteredProducts"
      :key="product.id"
    >
      <div @click="openProductPage(product.id)">
        <img class="w-[100%] rounded-xl object-cover" :src="product.thumbnail" alt="" />
        <div class="h-[150px] flex flex-col justify-between gap-2 mt-4">
          <h2 class="text-xl font-bold">{{ product.brand }}</h2>
          <p>{{ product.description }}</p>
          <p class="text-2xl">${{ product.price }}</p>
        </div>
      </div>
      <CartButton @click="addToCart(product)" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { productsStore } from '@/stores/products'
import { useRouter, useRoute } from 'vue-router'
import CartButton from '@/components/CartButton.vue'

const productStore = productsStore()
const router = useRouter()
const route = useRoute()

const openProductPage = (id) => {
  router.push({ name: 'ProductView', params: { id } })
}

const addToCart = (product) => {
  productStore.addToCart(product)
}

const filteredProducts = computed(() => {
  return productStore.products.filter((product) => product.category === route.params.id)
})
</script>
