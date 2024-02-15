import { defineStore } from 'pinia'

export const productsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
    cart: []
  }),

  actions: {
    fetchProductsFromDB() {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((json) => {
          this.products = json.products
        })
    },
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
    decreaseItemQuantity(id) {
      const existingItem = this.cart.find((item) => item.id === id)
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1
      } else {
        this.cart = this.cart.filter((item) => item.id !== id)
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})
