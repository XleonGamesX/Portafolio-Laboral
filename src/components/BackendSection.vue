<script setup>
import SectionHeading from './SectionHeading.vue'
import TechIcon from './TechIcon.vue'
import { technologies } from '../data/technologies.js'
import { apiEndpoints, apiConcepts } from '../data/backendConcepts.js'
</script>

<template>
  <section id="backend" class="section backend">
    <div class="container">
      <SectionHeading
        title="Backend & APIs"
        subtitle="Área de especial interés: construcción de APIs y lógica de servidor."
      />
      <p v-reveal class="backend-label">Conceptos y operaciones REST</p>
      <div class="backend-content">
        <ul v-reveal class="backend-endpoints">
          <li v-for="endpoint in apiEndpoints" :key="endpoint.method + endpoint.path">
            <span class="backend-method" :class="`is-${endpoint.method.toLowerCase()}`">{{ endpoint.method }}</span>
            <code class="backend-path">{{ endpoint.path }}</code>
          </li>
        </ul>
        <ul v-reveal class="backend-concepts">
          <li
            v-for="id in apiConcepts"
            :key="id"
            class="tech-chip"
            :style="{ '--tech-color': technologies[id]?.color }"
          >
            <TechIcon :id="id" label />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
