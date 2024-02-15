<template>
  <BackButton class="ml-8" @click="router.push({ name: 'Catalog' })" />
  <div class="flex mt-12">
    <div class="ml-8 mr-24 w-[600px]">
      <img class="rounded-xl max-h-[400px]" :src="selectedProduct.thumbnail" alt="" />
    </div>
    <div class="flex flex-col items-left justify-between">
      <div class="flex flex-col gap-8">
        <p>Brand: {{ selectedProduct.brand }}</p>
        <p>Description: {{ selectedProduct.description }}</p>
        <h2 class="text-2xl font-bold">Price: ${{ selectedProduct.price }}</h2>
      </div>
      <CartButton @click="addToCart(selectedProduct)" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { productsStore } from '@/stores/products'
import { useRoute, useRouter } from 'vue-router'
import BackButton from '@/components/BackButton.vue'
import CartButton from '@/components/CartButton.vue'

const productStore = productsStore()
const route = useRoute()
const router = useRouter()

const selectedProduct = computed(() => {
  return productStore.products.find((item) => item.id === Number(route.params.id))
})

const addToCart = () => {
  productStore.addToCart(selectedProduct.value)
}
</script>
