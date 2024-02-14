import { defineStore } from 'pinia'

export const productsStore = defineStore({
  id: 'products',
  state: () => ({
    products: []
  }),

  actions: {
    fetchProductsFromDB() {
      fetch('https://dummyjson.com/products/1')
        .then((res) => res.json())
        .then((json) => {
          this.products = json.products
        })
    }
  }
})
