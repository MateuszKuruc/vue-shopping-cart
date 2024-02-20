<template>
  <div class="flex flex-col items-center pt-12 gap-4">
    <h1 class="text-3xl">Log into account</h1>
    <input type="text" placeholder="Email" v-model="email" class="p-3 rounded-xl w-[250px]" />
    <input
      type="password"
      placeholder="Password"
      v-model="password"
      class="p-3 rounded-xl w-[250px]"
    />
    <p>
      Don't have an account? Create one
      <router-link class="text-purple-500 hover:text-purple-800" :to="{ name: 'RegisterPage' }"
        >here</router-link
      >
    </p>
    <p v-if="errMsg">{{ errMsg }}</p>

    <ConfirmButton @click="signIntoAccount">Log in</ConfirmButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import ConfirmButton from '@/components/ConfirmButton.vue'

const email = ref('')
const password = ref('')
const errMsg = ref()
const router = useRouter()
const toast = useToast()

const signIntoAccount = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log('successfully logged in')

      toast.success('Logged in successfully!')
      router.push({ name: 'Catalog' })
    })
    .catch((error) => {
      console.log(error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email'
          toast.error('Login failed, email is invalid')
          break

        case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found'
          toast.error('Login failed, no account with that email')
          break

        case 'auth/wrong-password':
          errMsg.value = 'Incorrect password'
          toast.error('Login failed, password is incorrect')
          break
        default:
          errMsg.value = 'Email or password was incorrect'
          toast.error('Login failed, email or password is incorrect')
          break
      }
    })
}
</script>
