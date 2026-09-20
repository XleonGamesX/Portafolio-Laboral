<script setup>
import SectionHeading from './SectionHeading.vue'
import { education } from '../data/education.js'
</script>

<template>
  <section id="education" class="section education">
    <div class="container">
      <SectionHeading
        title="Formación"
        subtitle="Mi camino académico, siempre en evolución."
      />
      <ol class="education-timeline">
        <li v-for="item in education" :key="item.title" v-reveal class="education-item">
          <p v-if="item.period" class="education-period">{{ item.period }}</p>
          <h3 class="education-title">{{ item.title }}</h3>
          <p v-if="item.institution" class="education-institution">{{ item.institution }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
