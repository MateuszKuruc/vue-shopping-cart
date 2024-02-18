<template>
  <div class="flex flex-wrap md:mt-16 mt-8 md:mb-32 mb-8 items-cente">
    <div @click="openCategory('macbooks')" class="category-container">
      <img src="/hero.png" alt="" />
      <div class="category-description">
        <h2 class="text-2xl font-bold">MacBooks</h2>
        <p>Shop for the newest Apple laptops</p>
      </div>
    </div>
    <div @click="openCategory('iphones')" class="category-container">
      <img src="/hero.png" alt="" />
      <div class="category-description">
        <h2 class="text-2xl font-bold">iPhones</h2>
        <p>Check the collection of Apple iPhones</p>
      </div>
    </div>
    <div @click="openCategory('android')" class="category-container">
      <img src="/hero.png" alt="" />
      <div class="category-description">
        <h2 class="text-2xl font-bold">Android phones</h2>
        <p>Get the wide choice of mobile phones with Android</p>
      </div>
    </div>
    <div @click="openCategory('windows')" class="category-container">
      <img src="/hero.png" alt="" />
      <div class="category-description">
        <h2 class="text-2xl font-bold">Windows laptops</h2>
        <p>See the variety of Windows laptops from top manufacturers</p>
      </div>
    </div>
    <div @click="openCategory('headphones')" class="category-container">
      <img src="/hero.png" alt="" />
      <div class="category-description">
        <h2 class="text-2xl font-bold">Headphones</h2>
        <p>Look for headphones for your phone or computer</p>
      </div>
    </div>
    <div @click="openCategory('accessories')" class="category-container">
      <img src="/hero.png" alt="" />
      <div class="category-description">
        <h2 class="text-2xl font-bold">Accessories</h2>
        <p>Shop for various accessories for your tech setup</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const openCategory = (id) => {
  router.push({ name: 'Category', params: { id } })
}
</script>
