<script setup>
import TechIcon from './TechIcon.vue'
import { technologies } from '../data/technologies.js'

defineProps({
  project: { type: Object, required: true }
})
</script>

<template>
  <article v-reveal class="project-card" :class="{ 'is-featured': project.featured }">
    <div class="project-card-body">
      <p class="project-card-number">{{ project.number }}</p>
      <div class="project-card-header">
        <h3 class="project-card-title">{{ project.title }}</h3>
        <span v-if="project.category" class="project-card-category">{{ project.category }}</span>
      </div>
      <p class="project-card-description">{{ project.description }}</p>
      <div v-if="project.flow" class="project-card-flow">
        <template v-for="(step, index) in project.flow" :key="step">
          <span class="project-card-flow-step">{{ step }}</span>
          <span v-if="index < project.flow.length - 1" class="project-card-flow-arrow" aria-hidden="true">↓</span>
        </template>
      </div>
      <ul v-if="project.technologies.length" class="project-card-technologies">
        <li
          v-for="id in project.technologies"
          :key="id"
          class="tech-chip"
          :style="{ '--tech-color': technologies[id]?.color }"
        >
          <TechIcon :id="id" label />
        </li>
      </ul>
      <div v-if="project.links.length" class="project-card-links">
        <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener">
          {{ link.label }}
        </a>
      </div>
    </div>
  </article>
</template>
