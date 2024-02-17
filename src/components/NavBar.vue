<template>
  <header
    class="bg-black z-99 w-[100%] max-w-[1920px] fixed transition-all duration-500 ease-in-out text-white rounded-b-xl"
  >
    <nav
      class="relative flex flex-row py-12 px-0 transition-all duration-500 ease-in-out w-[90%] my-0 mx-auto max-w-[1140px] max-h-[130px]"
    >
      <div class="flex items-center">
        <img
          class="w-[150px] transition-all duration-500 ease-in-out"
          src="/feniks-logo.webp"
          alt=""
        />
      </div>
      <p>check: {{ productStore.searchValue }}</p>
      <ul v-show="!mobile" class="flex items-center flex-1 justify-end text-black">
        <SearchBar />
        <li class="uppercase flex">
          <router-link
            class="font-medium text-white list-none text no-underline text-sm transition-all duration-500 ease-in-out pb-4 hover:text-green-500"
            :to="{ name: 'Catalog' }"
            >Home</router-link
          >
        </li>
        <li class="uppercase mx-16 flex">
          <router-link
            class="font-medium text-white list-none text no-underline text-sm transition-all duration-500 ease-in-out pb-4 hover:text-green-500"
            :to="{ name: 'Categories' }"
            >Categories</router-link
          >
        </li>
        <li class="uppercase flex">
          <router-link
            class="font-medium text-white list-none text no-underline text-sm transition-all duration-500 ease-in-out pb-4 hover:text-green-500"
            :to="{ name: 'About' }"
            >About</router-link
          >
        </li>

        <div class="ml-12 h-[100%]" @click="router.push({ name: 'CartView' })">
          <i class="fa badge fa-lg cursor-pointer hover:text-green-500" :value="itemsTotal"
            >&#xf07a;</i
          >
        </div>
      </ul>
      <div
        class="absolute flex items-center h-[30%] right-32"
        @click="router.push({ name: 'CartView' })"
      >
        <i v-show="mobile" class="fa badge fa-lg cursor-pointer" :value="itemsTotal">&#xf07a;</i>
      </div>
      <div class="flex items-center absolute top-0 right-12 h-[100%]">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="fa fa-bars cursor-pointer text-2xl transition-all duration-800 ease-in-out"
          :class="{ 'transform rotate-180': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul
          v-show="mobileNav"
          class="flex flex-col w-[100%] fixed max-w-[250px] h-[100%] bg-white top-0 left-0 gap-6 pt-8 rounded-r-xl"
        >
          <li class="p-3">
            <router-link
              class="font-medium text-black list-none text no-underline text-sm transition-all duration-500 ease-in-out pb-4 hover:text-green-500"
              :to="{ name: 'Catalog' }"
              >Home</router-link
            >
          </li>
          <li class="p-3">
            <router-link
              class="font-medium text-black list-none text no-underline text-sm transition-all duration-500 ease-in-out pb-4 hover:text-green-500"
              :to="{ name: 'Categories' }"
              >Categories</router-link
            >
          </li>
          <li class="p-3">
            <router-link
              class="font-medium text-black list-none text no-underline text-sm transition-all duration-500 ease-in-out pb-4 hover:text-green-500"
              :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { productsStore } from '@/stores/products'
import SearchBar from './SearchBar.vue'

const router = useRouter()
const productStore = productsStore()

const itemsTotal = computed(() => {
  let quantityTotal = 0
  productStore.cart.forEach((item) => {
    quantityTotal += Number(item.quantity)
  })
  return quantityTotal
})

const mobile = ref(null)
const mobileNav = ref(null)
const windowWidth = ref(null)

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', resizeHandler)
})

const resizeHandler = () => {
  checkScreen()
}

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value
}

const checkScreen = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value <= 750) {
    mobile.value = true
    return
  }
  mobile.value = false
  mobileNav.value = false
}
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 1px solid #22c55e;
  color: #22c55e;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>
