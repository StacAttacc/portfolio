<script setup lang="ts">
import { Github, Play } from 'lucide-vue-next'

defineProps<{
  title: string
  description?: string
  stack?: string[]
  link: string
  githubLink: string
  isDeployed?: boolean
}>()
</script>

<template>
  <div class="bg-base-100 text-base-content border border-base-300 rounded-xl shadow-sm hover:shadow-base-200/50 p-4 group">
    <div class="flex items-start justify-between gap-2">
      <h2 class="font-semibold text-lg">{{ title }}</h2>
      <span v-if="isDeployed" class="badge badge-success badge-sm shrink-0 mt-1">Deployed</span>
    </div>
    <p class="text-sm mt-1 text-base-content/70">{{ description }}</p>
    <div v-if="stack?.length" class="mt-3 flex flex-wrap gap-1">
      <span v-for="tech in stack" :key="tech" class="badge badge-outline badge-sm">{{ tech }}</span>
    </div>
    <div class="mt-3 flex gap-3 justify-end">
      <a
        v-if="githubLink"
        :href="githubLink"
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
        class="text-base-content/50 hover:text-base-content group-hover:text-success transition-colors"
      >
        <Github :size="18" />
      </a>
      <a
        v-if="link"
        :href="link"
        target="_blank"
        rel="noopener"
        aria-label="Live site"
        class="text-base-content/50 hover:text-base-content group-hover:text-success transition-colors"
      >
        <Play :size="18" />
      </a>
    </div>
  </div>
</template>
