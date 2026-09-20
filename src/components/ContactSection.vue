<script setup>
import SectionHeading from './SectionHeading.vue'
import TechIcon from './TechIcon.vue'
import { profile } from '../data/profile.js'
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container contact-inner">
      <SectionHeading
        title="¿Tienes una oportunidad, proyecto o propuesta?"
        subtitle="Estoy interesado en oportunidades de desarrollo de software y proyectos donde pueda continuar creciendo profesionalmente."
      />
      <div v-reveal class="contact-actions">
        <a :href="profile.whatsapp" target="_blank" rel="noopener" class="button button-primary">
          <TechIcon id="whatsapp" />
          WhatsApp
        </a>
        <ul class="contact-socials">
          <li v-for="social in profile.socials" :key="social.label">
            <a :href="social.url" target="_blank" rel="noopener">{{ social.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
