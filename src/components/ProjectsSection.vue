<script setup>
import SectionHeading from './SectionHeading.vue'
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects.js'
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <SectionHeading
        title="Proyectos"
        subtitle="Proyectos donde aplico mis conocimientos de frontend, backend y APIs."
      />
      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>
