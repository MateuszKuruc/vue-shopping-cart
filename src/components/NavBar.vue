<!-- <template>
  <nav
    class="sticky w-[100%] top-0 flex justify-around py-8 mx-4 mb-8 rounded-xl bg-gradient-to-r from-green-500 to-green-800"
  >
    <ul class="flex gap-4 font-bold">
      <router-link class="text-slate-200 hover:text-slate-800" to="/">Home page</router-link>
      <router-link class="text-slate-200 hover:text-slate-800" to="/categories"
        >Categories</router-link
      >
      <router-link class="text-slate-200 hover:text-slate-800" to="/shipping">Shipping</router-link>
      <router-link class="text-slate-200 hover:text-slate-800" to="/about">About</router-link>
    </ul>
    <div @click="router.push({ name: 'CartView' })">
      <i class="fa badge fa-lg cursor-pointer" :value="itemsTotal">&#xf07a;</i>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { productsStore } from '@/stores/products'
import { computed } from 'vue'

const router = useRouter()
const productStore = productsStore()

const itemsTotal = computed(() => {
  let quantityTotal = 0
  productStore.cart.forEach((item) => {
    quantityTotal += Number(item.quantity)
  })
  return quantityTotal
})
</script> -->

<template>
  <header>
    <nav>
      <div class="branding">
        <img src="/feniks-logo.webp" alt="" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'Catalog' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Categories' }">Categories</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'About' }">About</router-link>
        </li>
      </ul>
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="fa fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'Catalog' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Categories' }">Categories</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'About' }">About</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mobile = ref(null)
const mobileNav = ref(null)
const windowWidth = ref(null)

onMounted(() => {
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
header {
  background-color: black;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;
}

nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 1140px) {
    max-width: 1140px;
  }
  ul,
  .link {
    font-weight: 500;
    color: #fff;
    list-style: none;
    text-decoration: none;
  }

  li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
    display: flex;
  }

  .link {
    font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    &:hover {
      color: lightblue;
      border-color: lightblue;
    }
  }
  .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }
  .branding {
    display: flex;
    align-items: center;

    img {
      width: 150px;
      transition: 0.5s ease all;
    }
  }
  .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
    i {
      cursor: pointer;
      font-size: 24px;
      transition: 0.8s ease all;
    }
  }
  .icon-active {
    transform: rotate(180deg);
  }

  .dropdown-nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: fixed;
    max-width: 250px;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 0;

    li {
      margin-left: 0;
      .link {
        color: #000;
      }
    }
  }
  .router-link-exact-active {
    border-bottom: 1px solid lightblue;
    color: lightblue;
  }
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
