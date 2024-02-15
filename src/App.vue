<template>
  <NavBar />
  <HeroSection />
  <main class="min-h-[60vh]">
    <RouterView />
  </main>
  <ShopFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import ShopFooter from './components/ShopFooter.vue'
import HeroSection from './components/HeroSection.vue'
</script>
