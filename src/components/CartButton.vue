<template>
  <button
    class="py-4 px-8 mt-4 rounded-full uppercase font-bold border-2 border-black bg-gradient-to-r from-green-500 to-green-800 ease-in-out duration-700 hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-400 hover:to-orange-600 w-[200px]"
  >
    <slot>
      <span class="text-slate-200">Add to cart</span>
    </slot>
  </button>
</template>
