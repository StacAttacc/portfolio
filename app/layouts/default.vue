<script setup lang="ts">
import { House, User, FolderOpen, PanelLeftOpen, PanelLeftClose, Mail, Languages, Sun, Moon } from '@lucide/vue'

const { locale, t, toggleLocale } = useLocale()
const { theme, toggleTheme } = useTheme()

const email = 's.valitiana@gmail.com'
const isCopied = ref(false)
const copyEmail = () => {
  navigator.clipboard.writeText(email)
  isCopied.value = true
  setTimeout(() => { isCopied.value = false }, 6000)
}

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
    'data-theme': computed(() => theme.value),
  },
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
})

useSeoMeta({
  title: computed(() => t('home.meta.title')),
  description: computed(() => t('home.meta.description')),
  ogTitle: computed(() => t('home.meta.title')),
  ogDescription: computed(() => t('home.meta.description')),
  ogImage: '/og-image.png',
})

const isExpanded = ref(false)

const navItems = [
  { key: 'nav.home', to: '/', icon: House },
  { key: 'nav.about', to: '/about', icon: User },
  { key: 'nav.projects', to: '/projects', icon: FolderOpen },
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
          <p class="text-xl font-bold whitespace-nowrap">Sensini Valitiana</p>
          <p class="text-sm text-base-content/60 mt-1 whitespace-nowrap">{{ t('sidebar.tagline') }}</p>
        </div>
        <nav>
          <ul class="menu p-0 gap-2">
            <li v-for="item in navItems" :key="item.to" class="bg-base-100 rounded-lg shadow-md">
              <NuxtLink
                :to="item.to"
                exact-active-class="active"
                class="w-full"
                :class="!isExpanded && 'tooltip tooltip-right'"
                :data-tip="!isExpanded ? t(item.key) : undefined"
              >
                <component :is="item.icon" :size="18" />
                <span v-show="isExpanded" class="whitespace-nowrap">{{ t(item.key) }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="flex-1 flex flex-col">
          <hr class="border-t border-base-300/50" />
        <ul class="menu p-0 gap-2 my-auto">
          <li class="bg-base-100 rounded-lg shadow-md">
            <button
              class="w-full tooltip tooltip-right text-base-content"
              :data-tip="!isExpanded ? (theme === 'dark' ? 'Light mode' : 'Dark mode') : undefined"
              @click="toggleTheme"
            >
              <component :is="theme === 'dark' ? Sun : Moon" :size="18" />
              <span v-show="isExpanded" class="whitespace-nowrap">{{ theme === 'dark' ? 'Light' : 'Dark' }}</span>
            </button>
          </li>
          <li class="bg-base-100 rounded-lg shadow-md">
            <button
              class="w-full tooltip tooltip-right text-base-content"
              :data-tip="!isExpanded ? t('locale.switch') : undefined"
              @click="toggleLocale"
            >
              <Languages :size="18" />
              <span v-show="isExpanded" class="whitespace-nowrap">{{ t('locale.switch') }}</span>
            </button>
          </li>
        </ul>
        </div>

        <ul class="menu p-0 gap-2">
          <li class="bg-base-100 rounded-lg shadow-md">
            <a href="https://github.com/StacAttacc" target="_blank" rel="noopener" aria-label="GitHub" class="w-full tooltip tooltip-right text-base-content" :data-tip="isExpanded ? undefined : 'GitHub'">
              <GithubIcon :size="18" />
              <span v-show="isExpanded" class="whitespace-nowrap">GitHub</span>
            </a>
          </li>
          <li class="bg-base-100 rounded-lg shadow-md">
            <a href="https://linkedin.com/in/sensini-valitiana-506691383" target="_blank" rel="noopener" aria-label="LinkedIn" class="w-full tooltip tooltip-right text-base-content" :data-tip="isExpanded ? undefined : 'LinkedIn'">
              <LinkedinIcon :size="18" />
              <span v-show="isExpanded" class="whitespace-nowrap">LinkedIn</span>
            </a>
          </li>
          <li class="bg-base-100 rounded-lg shadow-md">
            <button aria-label="Copy email" class="tooltip tooltip-right text-base-content w-full" :data-tip="isExpanded ? undefined : (isCopied ? t('social.copied') : t('social.copyEmail'))" @click="copyEmail">
              <Mail :size="18" />
              <span v-show="isExpanded" class="whitespace-nowrap">{{ isCopied ? t('social.copied') : t('social.copyEmail') }}</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>

    <div class="flex flex-col flex-1 min-h-0 h-full pb-12 lg:pb-6 md:pb-0">
      <main class="flex-1 min-h-0 p-6 md:pb-0 relative">
        <button
          class="md:hidden absolute top-9 left-9 z-10 bg-base-100 rounded-lg shadow-md p-2 text-base-content"
          @click="toggleTheme"
        >
          <component :is="theme === 'dark' ? Sun : Moon" :size="18" />
        </button>
        <button
          class="md:hidden absolute top-9 right-9 z-10 bg-base-100 rounded-lg shadow-md p-2 text-base-content"
          @click="toggleLocale"
        >
          <Languages :size="18" />
        </button>
        <div class="bg-base-100 rounded-2xl h-full overflow-y-auto shadow-md">
          <slot />
          <div class="md:hidden flex justify-center gap-6 text-sm text-base-content/60 px-8 py-8 border-t border-base-200">
            <a href="https://github.com/StacAttacc" target="_blank" rel="noopener" class="hover:text-base-content transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/sensini-valitiana-506691383" target="_blank" rel="noopener" class="hover:text-base-content transition-colors">LinkedIn</a>
            <button class="hover:text-base-content transition-colors cursor-pointer" @click="copyEmail">{{ isCopied ? t('social.copied') : email }}</button>
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
      <span class="dock-label">{{ t(item.key) }}</span>
    </NuxtLink>
  </nav>
</template>
