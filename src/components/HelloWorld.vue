<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/UserStore'

defineProps<{ msg: string }>()

const store = useUserStore()

const count = ref(0)
</script>

<template>
  <h1>{{msg}}</h1>
  <button @click="store.addUser('user', 'user')">Klick</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
