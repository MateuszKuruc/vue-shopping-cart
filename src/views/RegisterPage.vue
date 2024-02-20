<template>
  <div class="flex flex-col items-center">
    <h1>Create an account</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="registerAccount" class="border-2">Submit</button>
    <button @click="signInWithGoogle" class="border-2">Sign in with Google</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const registerAccount = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('successfully registered')
      router.push({ name: 'Catalog' })
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.message)
    })
}

const signInWithGoogle = () => {}
</script>
