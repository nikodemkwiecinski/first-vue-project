<script setup lang="ts">
interface ActitiesProps {
  id: number
  link: string
  name: string
}

const ACTIVITIES: Array<ActitiesProps> = [
  { id: 1, name: 'Add', link: '/user/add' },
  { id: 2, name: 'Del', link: '/user/del' },
  { id: 3, name: 'Print', link: '/user/print' },
]
</script>

<template>
  <div class="w-2/3 h-50vh m-auto bg-light-white rounded-lg shadow-sm">
    <h2 class="text-center text-dark-blue font-bold text-2xl mt-4">
      Please chose a activity to perform
    </h2>
    <nav class="mt-4">
      <ul class="flex justify-around">
        <router-link
          v-for="item in ACTIVITIES"
          :key="item.id"
          class="border-dark-blue border-solid border rounded w-1/5 p-2 text-center font-bold text-dark-blue bg-white"
          :to="item.link"
          >{{ item.name }}</router-link
        >
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-white;
  @apply bg-dark-blue;
}
</style>
