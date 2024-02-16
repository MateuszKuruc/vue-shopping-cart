<template>
  <button
    class="md:py-4 py-2 md:px-8 px-4 mt-4 rounded-full uppercase font-bold border-2 border-black bg-gradient-to-r from-green-500 to-green-800 hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-400 hover:to-orange-600 text-slate-200 hover:text-black"
  >
    <slot>
      <span>Add to cart</span>
    </slot>
  </button>
</template>
