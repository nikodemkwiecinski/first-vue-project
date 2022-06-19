<script setup lang="ts">
import UserLog from './UserLog.vue'
import UserRegister from './UserRegister.vue'
import { ref } from 'vue'

const togglePage = ref(true)
</script>

<template>
  <div class="w-50vw h-50vh bg-light-white rounded shadow-lg m-auto">
    <h1 class="text-dark-blue font-bold text-3xl text-center mt-4">
      Welcome on Home Page
    </h1>
    <div class="flex justify-around mt-6">
      <button
        @click="
          () => {
            togglePage = true
          }
        "
        class="p-4 border-solid border-black border text-dark-blue font-bold rounded shadow w-36 text-center text-lg hover:text-white hover:bg-dark-blue ease-linear duration-100"
      >
        Sign in
      </button>
      <button
        @click="
          () => {
            togglePage = false
          }
        "
        class="p-4 border-solid border-black border text-dark-blue font-bold rounded shadow w-36 text-center text-lg hover:text-white hover:bg-dark-blue ease-linear duration-100"
      >
        Register
      </button>
    </div>
    <UserLog v-if="togglePage" />
    <UserRegister v-else />
  </div>
</template>
