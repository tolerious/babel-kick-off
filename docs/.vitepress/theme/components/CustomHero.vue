<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const heroImage = computed(() => frontmatter.value.hero?.image || frontmatter.value.heroImage)
</script>

<template>
  <div class="VPHero" v-if="frontmatter.hero">
    <div class="container">
      <div class="main">
        <h1 class="name">
          <span class="clip">{{ frontmatter.hero.name }}</span>
        </h1>
        <p class="text">{{ frontmatter.hero.text }}</p>
        <p class="tagline">{{ frontmatter.hero.tagline }}</p>

        <div class="actions" v-if="frontmatter.hero.actions">
          <div v-for="action in frontmatter.hero.actions" :key="action.link" class="action">
            <a
              :href="action.link"
              class="action-button"
              :class="[action.theme || 'brand']"
              :target="action.target || '_self'"
            >
              {{ action.text }}
            </a>
          </div>
        </div>
      </div>

      <div class="image-side" v-if="heroImage">
        <img :src="heroImage" :alt="frontmatter.hero.name" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPHero {
  padding: 80px 24px 48px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .VPHero {
    padding: 120px 48px 64px;
  }
}

.container {
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.main {
  flex: 1;
  max-width: 60%;
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.name .clip {
  background: linear-gradient(120deg, #bd34fe, #41d1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tagline {
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.action-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.action-button.brand {
  background: linear-gradient(120deg, #bd34fe, #41d1ff);
  color: white;
}

.action-button.brand:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(189, 52, 254, 0.4);
}

.action-button.alt {
  background: transparent;
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.action-button.alt:hover {
  background: var(--vp-c-brand);
  color: white;
}

.image-side {
  flex: 0 0 35%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-side img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.image-side img:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 2rem;
  }

  .main {
    max-width: 100%;
  }

  .name {
    font-size: 2rem;
  }

  .text {
    font-size: 1.25rem;
  }

  .image-side {
    flex: none;
    width: 100%;
  }

  .actions {
    flex-direction: column;
  }

  .action-button {
    width: 100%;
    text-align: center;
  }
}
</style>
