<script setup lang="ts">
import allProjects from '~~/data/projects.json'

const { locale, t } = useLocale()

useSeoMeta({
  title: computed(() => t('home.meta.title')),
  description: computed(() => t('home.meta.description')),
  ogTitle: computed(() => t('home.meta.title')),
  ogDescription: computed(() => t('home.meta.description')),
})

const projects = computed(() =>
  allProjects
    .filter(p => p.isDeployed)
    .map(p => ({
      ...p,
      localizedDescription: locale.value === 'fr' ? p.shortDescriptionFr : p.shortDescription,
    }))
)
</script>

<template>
  <div class="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-8 py-12">
    <div class="mb-12">
      <h1 class="text-3xl font-bold">{{ t('home.greeting') }}</h1>
      <p class="text-base-content/70 mt-2">{{ t('home.tagline') }}</p>
      <p class="mt-4 text-base-content/80 leading-relaxed text-justify">{{ t('home.bio') }}</p>
    </div>

    <section>
      <h2 class="text-sm font-semibold uppercase tracking-widest text-base-content/50 mb-4">{{ t('home.deployedProjects') }}</h2>
      <ul class="columns-1 sm:columns-2 lg:columns-3 gap-4">
        <li v-for="project in projects" :key="project.title" class="break-inside-avoid mb-4">
          <ProjectCard
            :title="project.title"
            :description="project.localizedDescription"
            :stack="project.stack"
            :link="project.liveLink"
            :github-link="project.githubLink"
          />
        </li>
      </ul>
    </section>
  </div>
</template>
