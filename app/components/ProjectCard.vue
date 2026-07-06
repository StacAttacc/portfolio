<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
  link: string
}>()

function handleClick() {
  navigateTo(props.link, {
    open: {
      target: '_blank'
    }
  })
}
</script>

<template>
  <div
    class="bg-base-100 text-base-content border border-base-300 rounded-xl shadow-sm p-4 cursor-pointer"
    @click="handleClick"
  >
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>
