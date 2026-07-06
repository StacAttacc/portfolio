<script setup lang="ts">
import allProjects from '~~/data/projects.json'

const projects = allProjects.filter(p => p.isDeployed)
</script>

<template>
  <div class="max-w-2xl mx-auto px-8 py-12">
    <div class="mb-12">
      <h1 class="text-3xl font-bold">Hi, I'm AV</h1>
      <p class="text-base-content/70 mt-2">Full-stack web developer</p>
      <p class="mt-4 text-base-content/80 leading-relaxed">
        Recent Computer Science graduate from André-Laurendeau, building web applications.
      </p>
    </div>

    <section>
      <h2 class="text-sm font-semibold uppercase tracking-widest text-base-content/50 mb-4">Deployed projects</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li v-for="project in projects" :key="project.title">
          <ProjectCard
            :title="project.title"
            :description="project.shortDescription"
            :link="project.liveLink"
            :github-link="project.githubLink"
          />
        </li>
      </ul>
    </section>
  </div>
</template>
