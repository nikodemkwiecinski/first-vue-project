<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/UserStore'
import { useRouter } from 'vue-router'

const login = ref('')
const password = ref('')
const userStore = useUserStore()
const loginError = ref(false)
const router = useRouter()

const handleSubmit = () => {
  if (userStore.validateUser(login.value, password.value)) {
    login.value = ''
    password.value = ''
    router.push({
      path: '/user',
      name: 'UserPage',
    })
  } else {
    loginError.value = true
    login.value = ''
    password.value = ''
    setTimeout(() => {
      loginError.value = false
    }, 2000)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="mt-12">
    <label for="">
      <input type="text" placeholder="Login" v-model="login" />
    </label>
    <label for="">
      <input type="password" v-model="password" placeholder="Password" />
    </label>
    <label for="">
      <input
        type="submit"
        value="Sign in"
        class="block w-1/5 mx-auto cursor-pointer shadow-lg rounded border border-dark-blue border-solid p-2 font-bold text-dark-blue hover:text-white hover:bg-dark-blue ease-linear duration-100"
      />
    </label>
    <p
      class="text-red-700 mt-4 text-center font-bold"
      :class="loginError ? 'block' : 'hidden'"
    >
      Login or password is incorrent
    </p>
  </form>
</template>

<style scoped>
label {
  @apply block;
  @apply mt-6;
}

input[type='text'],
input[type='password'] {
  @apply block;
  @apply w-2/5;
  @apply mx-auto;
  @apply shadow-lg;
  @apply rounded;
}
</style>
