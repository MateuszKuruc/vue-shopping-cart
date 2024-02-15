<template>
  <div class="border-2 border-black h-[300px] w-[100%]">
    <img class="h-full w-full object-cover" src="/public/hero.png" alt="" />
  </div>
  <div class="flex gap-4 justify-center py-12">
    <router-link to="/">All products</router-link>
    |
    <router-link to="/categories">Categories</router-link>
  </div>
</template>
