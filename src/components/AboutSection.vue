<script setup>
import SectionHeading from './SectionHeading.vue'
import { profile } from '../data/profile.js'
</script>

<template>
  <section id="about" class="section about">
    <div class="container about-inner">
      <div v-reveal class="about-text">
        <SectionHeading title="Sobre mí" />
        <p v-for="(paragraph, index) in profile.about" :key="index">{{ paragraph }}</p>
      </div>
      <aside v-reveal class="about-info">
        <h3 class="about-info-title">Datos rápidos</h3>
        <dl class="about-info-list">
          <div class="about-info-row"><dt>Rol</dt><dd>{{ profile.role }}</dd></div>
          <div class="about-info-row"><dt>Ubicación</dt><dd>{{ profile.location }}</dd></div>
          <div class="about-info-row"><dt>Estado</dt><dd>{{ profile.availability }}</dd></div>
          <div class="about-info-row">
            <dt>Email</dt>
            <dd><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></dd>
          </div>
        </dl>
      </aside>
    </div>
  </section>
</template>
