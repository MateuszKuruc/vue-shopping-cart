<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl">Create an account</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="registerAccount" class="border-2">Submit</button>
    <button @click="signInWithGoogle" class="border-2">Sign in with Google</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const email = ref('')
const password = ref('')
const router = useRouter()
const toast = useToast()

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
