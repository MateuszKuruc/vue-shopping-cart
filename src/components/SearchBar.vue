<template>
  <div class="mr-16 relative">
    <input
      class="p-2 rounded-xl w-[200px]"
      type="text"
      v-model="productStore.searchValue"
      placeholder="Search..."
    />
    <div
      v-show="filteredList.length > 0"
      class="w-[200px] max-h-[130px] absolute border-2 rounded-xl bg-white shadow-xl overflow-hidden"
    >
      <ul>
        <li
          v-for="product in filteredList"
          :key="product.id"
          class="hover:bg-green-500 w-[100%] px-2"
        >
          <p @click="openProductPage(product.id)">
            {{ product.title }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { productsStore } from '@/stores/products'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const productStore = productsStore()

const filteredList = computed(() => {
  if (productStore.searchValue.length > 0) {
    return productStore.products.filter((product) =>
      product.title.toLowerCase().includes(productStore.searchValue.toLowerCase())
    )
  }
  return []
})

const openProductPage = (id) => {
  router.push({ name: 'ProductView', params: { id } })
  productStore.searchValue = ''
}
</script>
