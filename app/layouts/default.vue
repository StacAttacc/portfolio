<template>
  <div class="drawer md:drawer-open">
    <input id="drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex flex-col min-h-screen pb-16 md:pb-0">
      <main class="flex-1">
        <slot />
      </main>

      <footer class="border-t border-base-300 px-8 py-6">
        <div class="flex gap-6 text-sm text-base-content/60">
          <a href="https://github.com/StacAttacc" target="_blank" rel="noopener" class="hover:text-base-content transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="hover:text-base-content transition-colors">LinkedIn</a>
          <a href="mailto:your@email.com" class="hover:text-base-content transition-colors">Email</a>
        </div>
      </footer>
    </div>

    <div class="drawer-side z-40">
      <label for="drawer" aria-label="close sidebar" class="drawer-overlay md:hidden"></label>
      <aside class="w-64 min-h-full bg-base-200 p-8 flex flex-col gap-10">
        <div>
          <p class="text-xl font-bold">AV</p>
          <p class="text-sm text-base-content/60 mt-1">Full-stack web developer</p>
        </div>
        <nav>
          <ul class="menu p-0 gap-1">
            <li><NuxtLink to="/" exact-active-class="active">Home</NuxtLink></li>
            <li><NuxtLink to="/about" exact-active-class="active">About</NuxtLink></li>
            <li><NuxtLink to="/projects" exact-active-class="active">Projects</NuxtLink></li>
          </ul>
        </nav>
      </aside>
    </div>
  </div>

  <nav class="btm-nav md:hidden z-50">
    <NuxtLink to="/" exact-active-class="active">
      <span class="btm-nav-label">Home</span>
    </NuxtLink>
    <NuxtLink to="/about" exact-active-class="active">
      <span class="btm-nav-label">About</span>
    </NuxtLink>
    <NuxtLink to="/projects" exact-active-class="active">
      <span class="btm-nav-label">Projects</span>
    </NuxtLink>
  </nav>
</template>
