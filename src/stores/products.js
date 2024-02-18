import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import { db } from '@/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { ref, onMounted } from 'vue'

const toast = useToast()

export const productsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
    cart: [],
    searchValue: ''
  }),

  actions: {
    // fetchProductsFromDB() {
    //   fetch('https://dummyjson.com/products')
    //     .then((res) => res.json())
    //     .then((json) => {
    //       this.products = json.products
    //     })
    // },
    // fetchProductsFromDB() {
    //   onMounted(async () => {
    //     let productCollection = await getDocs(collection(db, 'products'))
    //     productCollection.forEach((product) => {
    //       console.log(product.data())
    //     })
    //   })
    // },
    async fetchProductsFromDB() {
      const productCollection = await getDocs(collection(db, 'products'))
      productCollection.forEach((product) => {
        console.log(product.data())
      })
    },
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      toast.success('Item added to cart')
    },
    decreaseItemQuantity(id) {
      const existingItem = this.cart.find((item) => item.id === id)
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1
      } else {
        this.cart = this.cart.filter((item) => item.id !== id)
      }
      toast.info('Item removed from cart')
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
      toast.info('Item removed from cart')
    }
  }
})
