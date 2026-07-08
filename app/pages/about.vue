<script setup lang="ts">
const { t } = useLocale()

useSeoMeta({
  title: computed(() => t('about.meta.title')),
  description: computed(() => t('about.meta.description')),
  ogTitle: computed(() => t('about.meta.title')),
  ogDescription: computed(() => t('about.meta.description')),
})

const languages = ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'SQL']
const frontend = ['React', 'Next.js', 'Vue', 'Nuxt', 'Angular', 'Tailwind CSS']
const backend = ['Spring Boot', 'FastAPI', '.NET', 'Node.js']
const databases = ['PostgreSQL', 'NeonDB', 'SQL Server']
const infrastructure = ['NixOS', 'Kubernetes', 'Docker', 'Flux', 'Tailscale']
const other = ['Drizzle ORM', 'Claude API', 'Git']
</script>

<template>
  <div class="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-8 py-12">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold">{{ t('about.title') }}</h1>
      <a :href="t('about.cvFile')" download class="bg-base-100 rounded-lg shadow-md px-4 py-2 text-sm font-medium hover:bg-base-200 transition-colors">{{ t('about.downloadCv') }}</a>
    </div>

    <div class="space-y-3 text-base-content/80 leading-relaxed mb-12">
      <p>{{ t('about.bio.p1') }}</p>
      <p>{{ t('about.bio.p2') }}</p>
      <p>{{ t('about.bio.p3') }}</p>
    </div>

    <section class="mb-12">
      <div class="space-y-4 text-center">
        <div>
          <p class="text-xs text-base-content/40 uppercase tracking-widest mb-2">{{ t('about.skills.languages') }}</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="skill in languages" :key="skill" class="badge badge-outline">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="text-xs text-base-content/40 uppercase tracking-widest mb-2">{{ t('about.skills.frontend') }}</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="skill in frontend" :key="skill" class="badge badge-outline">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="text-xs text-base-content/40 uppercase tracking-widest mb-2">{{ t('about.skills.backend') }}</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="skill in backend" :key="skill" class="badge badge-outline">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="text-xs text-base-content/40 uppercase tracking-widest mb-2">{{ t('about.skills.databases') }}</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="skill in databases" :key="skill" class="badge badge-outline">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="text-xs text-base-content/40 uppercase tracking-widest mb-2">{{ t('about.skills.infrastructure') }}</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="skill in infrastructure" :key="skill" class="badge badge-outline">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="text-xs text-base-content/40 uppercase tracking-widest mb-2">{{ t('about.skills.other') }}</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="skill in other" :key="skill" class="badge badge-outline">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
