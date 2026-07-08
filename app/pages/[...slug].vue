<script setup lang="ts">
const { t } = useLocale()

useSeoMeta({ title: '404 — Page not found' })
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
    <p class="text-8xl font-bold text-base-content/10">404</p>
    <p class="text-xl font-semibold">{{ t('notFound.title') }}</p>
    <p class="text-base-content/60 text-sm">{{ t('notFound.message') }}</p>
    <NuxtLink to="/" class="btn btn-sm bg-base-200 border-0 shadow-md mt-2">{{ t('notFound.home') }}</NuxtLink>
  </div>
</template>
