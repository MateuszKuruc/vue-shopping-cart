<template>
  <BackButton class="md:ml-8 ml-2" @click="router.go(-1)">Previous page</BackButton>
  <div class="text-center" v-if="!cart.length">
    <h1 class="text-3xl font-bold md:mt-0 mt-14">The cart is empty</h1>
  </div>
  <div v-else class="flex flex-col w-[100%] md:pb-8 pb-8">
    <h2 class="self-end my-8 mr-12 text-2xl">
      Total in cart:
      <span class="text-green-500 font-bold">${{ productStore.totalItemsPrice }}</span>
    </h2>
    <div class="md:pb-8 pb-4" v-for="product in cart" :key="product.id">
      <div
        class="flex md:flex-row flex-col justify-between md:items-center shadow-2xl rounded-xl md:p-16 p-8 md:gap-0 gap-2"
      >
        <img
          :src="product.thumbnail"
          alt=""
          @click="openProductPage(product.id)"
          class="rounded-xl md:w-[20%] w-[100%] hover:cursor-pointer"
        />
        <span class="font-bold">{{ product.title }}</span>
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

    <ConfirmButton class="self-center" @click="router.push({ name: 'ConfirmOrder' })"
      >Confirm and pay</ConfirmButton
    >
    <RemoveButton class="self-center" @click="emptyTheCart">Empty the cart</RemoveButton>
  </div>
</template>

<script setup>
import { productsStore } from '@/stores/products'
import { useRouter } from 'vue-router'
import BackButton from '../components/BackButton.vue'
import RemoveButton from '@/components/RemoveButton.vue'
import { onMounted, computed } from 'vue'
import ConfirmButton from '@/components/ConfirmButton.vue'

const productStore = productsStore()
const router = useRouter()

const cart = computed(() => {
  return productStore.cart
})

const emptyTheCart = () => {
  productStore.emptyCart()
}

const openProductPage = (id) => {
  router.push({ name: 'ProductView', params: { id } })
}

onMounted(() => {
  const storedCart = localStorage.getItem('cart')
  productStore.setCart(storedCart ? JSON.parse(storedCart) : [])
  cart.value = productStore.cart

  productStore.fetchProductsFromDB()
})

const removeFromCart = (id) => {
  productStore.removeFromCart(id)
}
</script>
