<script setup lang="ts">
import allProjects from '~~/data/projects.json'

const projects = allProjects.filter(p => p.isDeployed)

</script>

<template>
  <div class="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-8 py-12">
    <div class="mb-12">
      <h1 class="text-3xl font-bold">Hi, I'm AV</h1>
      <p class="text-base-content/70 mt-2">Full-stack web developer</p>
      <p class="mt-4 text-base-content/80 leading-relaxed">
        CS grad from André-Laurendeau. I build things I actually use — web apps that go on Vercel, services that run on my self-hosted Kubernetes cluster, and everything in between.
      </p>
    </div>

    <section>
      <h2 class="text-sm font-semibold uppercase tracking-widest text-base-content/50 mb-4">Deployed projects</h2>
      <ul class="columns-1 sm:columns-2 lg:columns-3 gap-4">
        <li v-for="project in projects" :key="project.title" class="break-inside-avoid mb-4">
          <ProjectCard
            :title="project.title"
            :description="project.shortDescription"
            :stack="project.stack"
            :link="project.liveLink"
            :github-link="project.githubLink"
          />
        </li>
      </ul>
    </section>
  </div>
</template>
