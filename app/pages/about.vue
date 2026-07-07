<template>
  <div class="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-8 py-12">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold">About me</h1>
      <a href="/cv.pdf" download class="bg-base-100 rounded-lg shadow-md px-4 py-2 text-sm font-medium hover:bg-base-200 transition-colors">Download CV</a>
    </div>

    <div class="space-y-3 text-base-content/80 leading-relaxed mb-12">
      <p>
        I'm a developer who likes working with computers and building things, whether that's software or hardware.
        I enjoy the whole process, from writing the code to figuring out the infrastructure it runs on.
      </p>
      <p>
        I did a 3 month internship at Services Conseils Sensaroli Inc. where I built an internal payroll management tool to replace QuickBooks,
        and a 6 month internship at Enjoy Social where I built a budget management tool to track their ad campaigns, spending, and revenue.
      </p>
      <p>
        Outside of work, I run a personal Kubernetes homelab built from spare hardware, host my own services, and work on side projects that scratch my own itches.
      </p>
    </div>

    <section class="mb-12">
<div class="space-y-4 text-center">
        <div>
          <p class="text-xs text-base-content/40 uppercase tracking-widest mb-2">Languages</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="skill in languages" :key="skill" class="badge badge-outline">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="text-xs text-base-content/40 uppercase tracking-widest mb-2">Frontend</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="skill in frontend" :key="skill" class="badge badge-outline">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="text-xs text-base-content/40 uppercase tracking-widest mb-2">Backend</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="skill in backend" :key="skill" class="badge badge-outline">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="text-xs text-base-content/40 uppercase tracking-widest mb-2">Databases</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="skill in databases" :key="skill" class="badge badge-outline">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="text-xs text-base-content/40 uppercase tracking-widest mb-2">Infrastructure</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="skill in infrastructure" :key="skill" class="badge badge-outline">{{ skill }}</span>
          </div>
        </div>
        <div>
          <p class="text-xs text-base-content/40 uppercase tracking-widest mb-2">Other</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="skill in other" :key="skill" class="badge badge-outline">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const languages = ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'SQL']
const frontend = ['React', 'Next.js', 'Vue', 'Nuxt', 'Angular', 'Tailwind CSS']
const backend = ['Spring Boot', 'FastAPI', '.NET', 'Node.js']
const databases = ['PostgreSQL', 'NeonDB', 'SQL Server']
const infrastructure = ['NixOS', 'Kubernetes', 'Docker', 'Flux', 'Tailscale']
const other = ['Drizzle ORM', 'Claude API', 'Git']
</script>
