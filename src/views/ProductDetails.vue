<template>
  <BackButton class="md:ml-8 ml-2" @click="router.go(-1)" />
  <div class="flex md:flex-row flex-col mt-12">
    <div class="md:ml-8 md:mr-24 md:w-[600px] mx-2">
      <img class="rounded-xl max-h-[400px]" :src="selectedProduct.thumbnail" alt="" />
    </div>
    <div class="flex flex-col items-center justify-between md:mt-0 mt-4">
      <div class="flex flex-col md:gap-8 gap-4 md:mx-0 mx-4">
        <p>Brand: {{ selectedProduct.brand }}</p>
        <p>Description: {{ selectedProduct.description }}</p>
        <h2 class="text-2xl font-bold">Price: ${{ selectedProduct.price }}</h2>
      </div>
      <CartButton class="md:mb-0 mb-8" @click="addToCart(selectedProduct)" />
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
  return productStore.products.find((item) => item.id === route.params.id)
})

const addToCart = () => {
  productStore.addToCart(selectedProduct.value)
}
</script>
