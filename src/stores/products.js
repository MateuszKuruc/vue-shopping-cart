import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import { db } from '@/firebase'
import { getDocs, collection } from 'firebase/firestore'

const toast = useToast()

export const productsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
    cart: [],
    searchValue: ''
  }),

  actions: {
    async fetchProductsFromDB() {
      const productCollection = await getDocs(collection(db, 'products'))
      const productsArray = productCollection.docs.map((product) => product.data())

      this.products = productsArray

      console.log('array', productsArray)
    },
    fetchCartFromLocal() {
      const storedCart = localStorage.getItem('cart')
      if (storedCart.length > 0) {
        this.cart = JSON.parse(storedCart)
      }
    },
    setCart(data) {
      this.cart = data
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
      toast.success('Item added to cart')
      console.log('local storage cart', localStorage.getItem('cart'))
    },
    decreaseItemQuantity(id) {
      const existingItem = this.cart.find((item) => item.id === id)
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1
      } else {
        this.cart = this.cart.filter((item) => item.id !== id)
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
      toast.info('Item removed from cart')
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
      localStorage.setItem('cart', JSON.stringify(this.cart))
      toast.info('Item removed from cart')
    }
  }
})
