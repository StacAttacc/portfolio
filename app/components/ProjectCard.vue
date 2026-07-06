<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
  link: string
  githubLink: string
}>()

function handleClick() {
  navigateTo(props.link, { open: { target: '_blank' } })
}

function handleGithubClick(e: MouseEvent) {
  e.stopPropagation()
  navigateTo(props.githubLink, { open: { target: '_blank' } })
}
</script>

<template>
  <div
    class="bg-base-100 text-base-content border border-base-300 rounded-xl shadow-sm p-4 cursor-pointer"
    @click="handleClick"
  >
    <h2 class="font-semibold text-lg">{{ title }}</h2>
    <p class="text-sm mt-1">{{ description }}</p>
    <div class="mt-3 flex gap-2">
      <span class="text-sm underline">Live</span>
      <span
        class="text-sm underline"
        @click="handleGithubClick"
      >GitHub</span>
    </div>
  </div>
</template>
