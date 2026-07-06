<script setup lang="ts">
const projects = [
  {
    title: 'Prose',
    description: '5 person team project remaking André-Laurendeau\'s OSE platform.',
    link: 'https://prose-jet.vercel.app',
    githubLink: 'https://github.com/StacAttacc/Prose',
  },
  {
    title: 'Marketing Tool',
    description: 'An application to manage, keep track and plan marketing budgets',
    link: 'https://marketing-tool-one.vercel.app/',
    githubLink: 'https://github.com/StacAttacc/marketing-tool',
  },
  {
    title: 'Next Stitch',
    description: 'An application to manage your sewing projects',
    link: 'https://next-stitch-henna.vercel.app/',
    githubLink: 'https://github.com/StacAttacc/NextStitch',
  },
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-12">
    <div class="mb-10">
      <h1 class="text-3xl font-bold">AV</h1>
      <p class="text-base-content/70 mt-2">
        I'm a recent Computer Science graduate from André-Laurendeau.
      </p>
    </div>

    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="project in projects" :key="project.title">
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :link="project.link"
          :github-link="project.githubLink"
        />
      </li>
    </ul>
  </div>
</template>
