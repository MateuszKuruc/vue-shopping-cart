<template>
  <BackButton class="md:ml-8 ml-2" @click="router.go(-1)">Previous page</BackButton>
  <section class="flex flex-col items-center">
    <div class="text-center" v-if="!cart.length">
      <h1 class="text-3xl font-bold md:mt-0 mt-14">The cart is empty</h1>
    </div>
    <div v-else class="flex flex-col w-[1600px] mt-8 md:pb-8 pb-8">
      <div class="md:pb-2 pb-4" v-for="product in cart" :key="product.id">
        <div
          class="flex flex-row shadow-2xl rounded-xl md:p-2 p-8 md:gap-0 mx-8 border-2 border-green-500"
        >
          <div class="flex flex-row w-[100%] gap-8">
            <p class="w-[300px]">
              Item:
              <span class="font-bold">
                {{ product.title }}
              </span>
            </p>
            <p class="w-[300px]">
              Brand:
              <span class="font-bold">
                {{ product.brand }}
              </span>
            </p>
            <p class="w-[300px]">
              Price:
              <span class="font-bold"> ${{ product.price }} </span>
            </p>
            <p class="w-[300px]">
              Sum:
              <span class="font-bold"> ${{ product.price * product.quantity }} </span>
            </p>
            <p>
              Quantity:
              <span class="font-bold"> {{ product.quantity }} </span>
            </p>
          </div>
        </div>
      </div>
      <div class="font-bold self-center my-4">
        <p>
          Item total: <span class="text-green-700">${{ productStore.totalItemsPrice }}</span>
        </p>
        <p>
          Delivery cost:
          <span class="text-green-700">{{ deliveryCost(productStore.totalItemsPrice) }}</span>
          <span class="block text-sm font-normal italic"
            >Delivery cost: $0 for orders above $250, otherwise $16</span
          >
        </p>
        <p>
          Total price:
          <span class="text-green-700"
            >${{ productStore.totalItemsPrice + deliveryCost(productStore.totalItemsPrice) }}</span
          >
        </p>
      </div>

      <ConfirmButton class="self-center" @click="router.push({ name: 'ConfirmOrder' })"
        >Confirm and pay</ConfirmButton
      >
    </div>
  </section>
</template>

<script setup>
import { productsStore } from '@/stores/products'
import BackButton from '../components/BackButton.vue'
import { onMounted, computed } from 'vue'
import ConfirmButton from '@/components/ConfirmButton.vue'

const productStore = productsStore()

const deliveryCost = (total) => {
  if (total > 250) {
    return 0
  } else {
    return 16
  }
}

const cart = computed(() => {
  return productStore.cart
})

onMounted(() => {
  const storedCart = localStorage.getItem('cart')
  productStore.setCart(storedCart ? JSON.parse(storedCart) : [])
  cart.value = productStore.cart

  productStore.fetchProductsFromDB()
})
</script>
