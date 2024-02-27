<template>
  <div class="flex justify-start flex-wrap md:mt-16 mt-8 md:mb-32 mb-8">
    <div
      class="category-container flex flex-col items-center"
      v-for="product in productStore.products"
      :key="product.id"
    >
      <div class="w-[100%]" @click="openProductPage(product.id)">
        <img class="w-[100%] rounded-xl object-cover" :src="product.thumbnail" alt="" />
        <div class="max-h-[100%] flex flex-col justify-between gap-2 mt-4">
          <h2 class="text-3xl font-bold">{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <p class="text-lg">In stock: <span class="text-green-500 font-bold">yes</span></p>
          <p class="text-3xl font-bold">${{ product.price }}</p>
        </div>
      </div>
      <ConfirmButton @click="addToCart(product)" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { productsStore } from '@/stores/products'
import { useRouter } from 'vue-router'
import ConfirmButton from '@/components/ConfirmButton.vue'

const productStore = productsStore()
const router = useRouter()

const openProductPage = (id) => {
  router.push({ name: 'ProductView', params: { id } })
}

const addToCart = (product) => {
  productStore.addToCart(product)
}

onMounted(() => {
  productStore.fetchProductsFromDB()
})
</script>
