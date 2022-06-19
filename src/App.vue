<script setup lang="ts">
import Home from './views/Home.vue'
</script>

<template>
  <div class="w-50vw h-50vh bg-light-white rounded shadow-lg m-auto">
    <Home />
    <div class="flex justify-around mt-6">
      <router-link
        to="/"
        class="p-4 border-solid border-black border text-dark-blue font-bold rounded shadow w-36 text-center text-lg hover:text-white hover:bg-dark-blue ease-linear duration-100"
        >Log in</router-link
      >
      <router-link
        to="/register"
        class="p-4 border-solid border-black border text-dark-blue font-bold rounded shadow w-36 text-center text-lg hover:text-white hover:bg-dark-blue ease-linear duration-100"
        >Register</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<style></style>
