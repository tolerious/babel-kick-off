<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'

const { isDark, frontmatter } = useData()

const enableTransitions = () => {
  document.documentElement.classList.add('transition')
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!document.startViewTransition) {
    enableTransitions()
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    enableTransitions()
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-after>
      <div class="hero-image" v-if="frontmatter.layout === 'home' && frontmatter.hero?.image">
        <img :src="frontmatter.hero.image" :alt="frontmatter.hero.name" />
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  max-width: 400px;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.hero-image img:hover {
  transform: scale(1.05);
}
</style>
