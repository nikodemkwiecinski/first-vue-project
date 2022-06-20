<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/UserStore'
import { FoodProps } from '../types/UserType'

const query = ref('')
const errorMessage = ref('')
const isError = ref(false)
const isCorrect = ref(false)
const userStore = useUserStore()

const handleError = (msg: string) => {
  errorMessage.value = msg
  isError.value = true
  query.value = ''
  setTimeout(() => {
    isError.value = false
  }, 2000)
}

const handleQuery = async () => {
  if (query.value.length < 2) {
    handleError('Food name to short')
  } else {
    const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=${query.value}&pageSize=1`
    const response = await fetch(URL)
      .then((res) => res.json())
      .then((data) => data.foods)
      .catch((err) => console.log(err))
    query.value = ''
    if (response.length > 0) {
      isCorrect.value = true
      const newFood: FoodProps = {
        id: response[0].fdcId,
        name: response[0].lowercaseDescription,
        protein: response[0].foodNutrients[0].value,
        fat: response[0].foodNutrients[1].value,
        carbs: response[0].foodNutrients[2].value,
      }
      userStore.addFood(newFood)
      setTimeout(() => {
        isCorrect.value = false
      }, 2000)
    } else {
      handleError('Incorect data passed')
    }
  }
}
</script>

<template>
  <div class="mx-auto w-3/4 mt-8">
    <h2 class="text-center font-bold text-dark-blue text-2xl">Add food</h2>
    <form @submit.prevent="handleQuery">
      <input
        type="text"
        placeholder="Add new food"
        class="mt-4 block w-1/2 mx-auto"
        v-model="query"
      />
      <input
        type="submit"
        value="Submit"
        class="block mt-8 rounded w-1/5 cursor-pointer border-dark-blue border border-solid text-dark-blue hover:bg-dark-blue hover:text-white duration-100 ease-linear mx-auto p-2 font-bold"
      />
    </form>
    <p
      class="text-dark-blue mt-4 text-center font-bold"
      :class="isError ? 'block text-red-700' : 'hidden'"
    >
      {{ errorMessage }}
    </p>
    <p
      class="text-dark-blue mt-4 text-center font-bold"
      :class="isCorrect ? 'block' : 'hidden'"
    >
      Data saved
    </p>
  </div>
</template>
