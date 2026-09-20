<script setup>
import SectionHeading from './SectionHeading.vue'
import TechIcon from './TechIcon.vue'
import { technologies } from '../data/technologies.js'
import { skillGroups, learningSkills } from '../data/skills.js'
</script>

<template>
  <section id="skills" class="section skills">
    <div class="container">
      <SectionHeading
        title="Habilidades"
        subtitle="Tecnologías y herramientas que conozco y aplico en mis proyectos."
      />
      <div class="skills-grid">
        <article v-for="group in skillGroups" :key="group.name" v-reveal class="skills-group">
          <h3 class="skills-group-name">{{ group.name }}</h3>
          <ul class="skills-list">
            <li
              v-for="id in group.skills"
              :key="id"
              class="tech-chip"
              :style="{ '--tech-color': technologies[id]?.color }"
            >
              <TechIcon :id="id" label />
            </li>
          </ul>
        </article>
      </div>
      <div v-reveal class="skills-learning">
        <p class="skills-learning-text">Actualmente aprendiendo</p>
        <ul class="skills-list">
          <li
            v-for="id in learningSkills"
            :key="id"
            class="tech-chip is-learning"
            :style="{ '--tech-color': technologies[id]?.color }"
          >
            <TechIcon :id="id" label />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
