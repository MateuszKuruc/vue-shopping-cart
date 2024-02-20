<template>
  <div class="flex flex-col items-center pt-12 gap-4">
    <h1 class="text-3xl">Create an account</h1>
    <input type="text" placeholder="Email" v-model="email" class="p-3 rounded-xl w-[250px]" />
    <input
      type="password"
      placeholder="Password"
      v-model="password"
      class="p-3 rounded-xl w-[250px]"
    />
    <ConfirmButton class="w-[250px]" @click="registerAccount">Submit</ConfirmButton>
    <GoogleButton class="w-[250px] mt-0" @click="signInWithGoogle" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import ConfirmButton from '@/components/ConfirmButton.vue'
import GoogleButton from '@/components/GoogleButton.vue'
import { productsStore } from '@/stores/products'

const email = ref('')
const password = ref('')
const router = useRouter()
const toast = useToast()
const productStore = productsStore()

onMounted(() => {
  productStore.fetchProductsFromDB()
})

const registerAccount = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log('successfully registered')
      toast.success('User account created!')
      router.push({ name: 'Catalog' })
    })
    .catch((error) => {
      console.log(error.code)
      toast.error('User account could not be created')
      alert(error.message)
    })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then(() => {
      toast.success('User account created!')
      router.push({ name: 'Catalog' })
    })
    .catch(() => {
      toast.error('User account could not be created')
    })
}
</script>
