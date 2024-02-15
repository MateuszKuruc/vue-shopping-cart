<template>
  <div class="h-[300px] w-[100%] mx-4 border-2 border-black rounded-xl">
    <img class="h-full w-full object-cover rounded-xl" src="/public/hero.png" alt="" />
  </div>
  <div class="flex gap-4 justify-center py-12">
    <router-link to="/">All products</router-link>
    |
    <router-link to="/categories">Categories</router-link>
  </div>
</template>
