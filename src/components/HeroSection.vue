<template>
  <div
    class="h-[300px] w-[100%] max-w-[1920px] mx-0 md:block hidden border-2 border-black rounded-xl"
  >
    <img class="h-full w-full object-cover rounded-xl" src="/public/hero.png" alt="" />
  </div>
  <div class="flex gap-4 justify-center md:pt-12 pt-[150px]">
    <router-link to="/">All products</router-link>
    |
    <router-link to="/categories">Categories</router-link>
  </div>
</template>
