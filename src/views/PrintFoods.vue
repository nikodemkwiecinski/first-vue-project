<script setup lang="ts">
import { useUserStore } from '../stores/UserStore'
import { FoodProps } from '../types/UserType'

const userStore = useUserStore()
const foodArray: FoodProps[] = userStore.getFoodTable()
</script>

<template>
  <h2 class="text-dark-blue w-1/2 mx-auto text-2xl text-center font-bold mt-4">
    Your favourite foods
  </h2>
  <ul class="w-1/2 mx-auto mt-6">
    <li
      v-for="food in foodArray"
      :key="food.id"
      class="text-center font-bold text-dark-blue mt-2"
    >
      {{
        `${food.name}, Protein: ${food.protein}, Fat: ${food.fat}, Carbs: ${food.carbs}`
      }}
    </li>
  </ul>
</template>
