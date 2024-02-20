<template>
  <BackButton class="md:ml-8 ml-2" @click="router.go(-1)">Previous page</BackButton>
  <div v-if="displayedProduct" class="flex md:flex-row flex-col mt-12">
    <div class="md:ml-8 md:mr-24 md:w-[600px] mx-2">
      <img class="rounded-xl max-h-[400px]" :src="displayedProduct.thumbnail" alt="" />
    </div>
    <div class="flex flex-col items-center justify-between md:mt-0 mt-4">
      <div class="flex flex-col md:gap-8 gap-4 md:mx-0 mx-4">
        <p>Brand: {{ displayedProduct.brand }}</p>
        <p>Description: {{ displayedProduct.description }}</p>
        <h2 class="text-2xl font-bold">Price: ${{ displayedProduct.price }}</h2>
      </div>
      <ConfirmButton class="md:mb-0 mb-8" @click="addToCart(displayedProduct)" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { productsStore } from '@/stores/products'
import { useRoute, useRouter } from 'vue-router'
import BackButton from '@/components/BackButton.vue'
import ConfirmButton from '@/components/ConfirmButton.vue'

const productStore = productsStore()
const route = useRoute()
const router = useRouter()

const displayedProduct = computed(() => {
  if (!productStore.products.length) {
    productStore.fetchProductsFromDB()
  }
  return productStore.products.find((product) => product.id === route.params.id)
})

const addToCart = () => {
  productStore.addToCart(displayedProduct.value)
}
</script>
