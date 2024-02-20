<template>
  <div
    class="md:h-[500px] w-[100%] max-w-[1920px] mx-0 md:block hidden border-2 border-black rounded-xl"
  >
    <img class="h-full w-full object-cover rounded-xl" src="/hero.png" alt="" />
  </div>
  <div class="flex gap-4 justify-center md:pt-12 pt-[150px]">
    <router-link class="hover:text-green-500 ease-in-out duration-500" to="/"
      >All products</router-link
    >
    |
    <router-link class="hover:text-green-500 ease-in-out duration-500" to="/categories"
      >Categories</router-link
    >
  </div>
</template>
