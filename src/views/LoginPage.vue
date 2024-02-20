<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl">Log into account</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <p>
      Don't have an account? Create one
      <router-link class="text-purple-500 hover:text-purple-800" :to="{ name: 'RegisterPage' }"
        >here</router-link
      >
    </p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <button @click="signIntoAccount" class="border-2">Submit</button>
    <button @click="signInWithGoogle" class="border-2">Sign in with Google</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { productsStore } from '@/stores/products'

const email = ref('')
const password = ref('')
const errMsg = ref()
const router = useRouter()
const productStore = productsStore()

const signIntoAccount = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('successfully logged in')

      productStore.login = true
      router.push({ name: 'Catalog' })
    })
    .catch((error) => {
      console.log(error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email'
          break

        case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found'
          break

        case 'auth/wrong-password':
          errMsg.value = 'Incorrect password'
          break
        default:
          errMsg.value = 'Email or password was incorrect'
          break
      }
    })
}

const signInWithGoogle = () => {}
</script>
