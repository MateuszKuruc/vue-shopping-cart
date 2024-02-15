<template>
  <NavBar> </NavBar>
  <main class="mx-4">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>
