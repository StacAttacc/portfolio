<script setup lang="ts">
import { Github, Play } from 'lucide-vue-next'

defineProps<{
  title: string
  description?: string
  stack?: string[]
  link: string
  githubLink: string
}>()
</script>

<template>
  <div class="bg-base-100 text-base-content border border-base-300 rounded-xl shadow-sm p-4">
    <h2 class="font-semibold text-lg">{{ title }}</h2>
    <p class="text-sm mt-1 text-base-content/70">{{ description }}</p>
    <div v-if="stack?.length" class="mt-3 flex flex-wrap gap-1">
      <span v-for="tech in stack" :key="tech" class="badge badge-outline badge-sm">{{ tech }}</span>
    </div>
    <div class="mt-3 flex gap-3 justify-end">
      <a
        :href="githubLink"
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
        class="text-base-content/50 hover:text-base-content transition-colors"
      >
        <Github :size="18" />
      </a>
      <a
        :href="link"
        target="_blank"
        rel="noopener"
        aria-label="Live site"
        class="text-base-content/50 hover:text-base-content transition-colors"
      >
        <Play :size="18" />
      </a>
    </div>
  </div>
</template>
