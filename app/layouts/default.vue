<script setup lang="ts">
import { House, User, FolderOpen, PanelLeftOpen, PanelLeftClose, Github, Linkedin, Mail } from 'lucide-vue-next'

const email = 's.valitiana@gmail.com'
const isCopied = ref(false)
const copyEmail = () => {
  navigator.clipboard.writeText(email)
  isCopied.value = true
  setTimeout(() => { isCopied.value = false }, 6000)
}

useSeoMeta({
  title: 'Dev Portfolio — Full-stack web developer',
  description: 'A collection of web projects spanning frontend, backend, and infrastructure.',
  ogTitle: 'Dev Portfolio — Full-stack web developer',
  ogDescription: 'A collection of web projects spanning frontend, backend, and infrastructure.',
})

const isExpanded = ref(false)

const navItems = [
  { label: 'Home', to: '/', icon: House },
  { label: 'About', to: '/about', icon: User },
  { label: 'Projects', to: '/projects', icon: FolderOpen },
]
</script>

<template>
  <div class="h-screen md:flex bg-base-200">

    <aside
      class="hidden md:flex flex-col bg-base-200 shrink-0 transition-[width] duration-300 ease-in-out"
      :class="isExpanded ? 'w-64' : 'w-16'"
    >
      <div class="flex flex-col flex-1 p-3 pr-0 pb-6 gap-8">
        <button
          class="p-1 text-base-content transition-colors"
          :class="isExpanded ? 'flex justify-end' : 'flex justify-center'"
          @click="isExpanded = !isExpanded"
        >
          <component :is="isExpanded ? PanelLeftClose : PanelLeftOpen" :size="18" />
        </button>
        <div v-show="isExpanded" class="px-2">
          <p class="text-xl font-bold whitespace-nowrap">AV</p>
          <p class="text-sm text-base-content/60 mt-1 whitespace-nowrap">Full-stack web developer</p>
        </div>
        <nav class="flex-1">
          <ul class="menu p-0 gap-2">
            <li v-for="item in navItems" :key="item.to" class="bg-base-100 rounded-lg shadow-md">
              <NuxtLink
                :to="item.to"
                exact-active-class="active"
                :class="!isExpanded && 'tooltip tooltip-right'"
                :data-tip="!isExpanded ? item.label : undefined"
              >
                <component :is="item.icon" :size="18" />
                <span v-show="isExpanded" class="whitespace-nowrap">{{ item.label }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <ul class="menu p-0 gap-2">
          <li class="bg-base-100 rounded-lg shadow-md">
            <a href="https://github.com/StacAttacc" target="_blank" rel="noopener" aria-label="GitHub" class="tooltip tooltip-right text-base-content" :data-tip="isExpanded ? undefined : 'GitHub'">
              <Github :size="18" />
              <span v-show="isExpanded" class="whitespace-nowrap">GitHub</span>
            </a>
          </li>
          <li class="bg-base-100 rounded-lg shadow-md">
            <a href="https://linkedin.com/in/sensini-valitiana-506691383" target="_blank" rel="noopener" aria-label="LinkedIn" class="tooltip tooltip-right text-base-content" :data-tip="isExpanded ? undefined : 'LinkedIn'">
              <Linkedin :size="18" />
              <span v-show="isExpanded" class="whitespace-nowrap">LinkedIn</span>
            </a>
          </li>
          <li class="bg-base-100 rounded-lg shadow-md">
            <button aria-label="Copy email" class="tooltip tooltip-right text-base-content w-full" :data-tip="isExpanded ? undefined : (isCopied ? 'Copied!' : 'Copy email')" @click="copyEmail">
              <Mail :size="18" />
              <span v-show="isExpanded" class="whitespace-nowrap">{{ isCopied ? 'Copied!' : 'Copy email' }}</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>

    <div class="flex flex-col flex-1 min-h-0 h-full pb-12 lg:pb-6 md:pb-0">
      <main class="flex-1 min-h-0 p-6 md:pb-0">
        <div class="bg-base-100 rounded-2xl h-full overflow-y-auto shadow-md">
          <slot />
          <div class="md:hidden flex justify-center gap-6 text-sm text-base-content/60 px-8 py-8 border-t border-base-200">
            <a href="https://github.com/StacAttacc" target="_blank" rel="noopener" class="hover:text-base-content transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/sensini-valitiana-506691383" target="_blank" rel="noopener" class="hover:text-base-content transition-colors">LinkedIn</a>
            <button class="hover:text-base-content transition-colors cursor-pointer" @click="copyEmail">{{ isCopied ? 'Copied!' : email }}</button>
          </div>
        </div>
      </main>
    </div>
  </div>

  <nav class="dock dock-sm md:hidden z-50 bg-base-200 gap-2 px-2 border-0 pb-2">
    <NuxtLink
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      exact-active-class="dock-active"
      class="bg-base-100 rounded-lg shadow-md hover:bg-base-300/50 transition-colors"
    >
      <component :is="item.icon" :size="20" />
      <span class="dock-label">{{ item.label }}</span>
    </NuxtLink>
  </nav>
</template>
