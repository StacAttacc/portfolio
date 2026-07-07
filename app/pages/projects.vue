<script setup lang="ts">
import allProjects from '~~/data/projects.json'

const projects = [...allProjects].sort((a, b) => Number(b.isDeployed) - Number(a.isDeployed))
</script>

<template>
  <div class="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-8 py-12">
    <h1 class="text-3xl font-bold mb-8">Projects</h1>

    <ul class="columns-1 sm:columns-2 lg:columns-3 gap-4">
      <li v-for="project in projects" :key="project.title" class="break-inside-avoid mb-4">
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :stack="project.stack"
          :link="project.liveLink"
          :github-link="project.githubLink"
          :is-deployed="project.isDeployed"
        />
      </li>
    </ul>
  </div>
</template>
