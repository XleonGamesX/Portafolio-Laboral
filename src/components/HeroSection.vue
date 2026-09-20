<script setup>
import { profile } from '../data/profile.js'
</script>

<template>
  <section id="hero" class="hero">
    <div class="container hero-inner">
      <p v-reveal class="hero-availability">{{ profile.availability }}</p>
      <h1 v-reveal class="hero-title">
        <span class="hero-title-name">{{ profile.name }}</span>
        <span class="hero-title-accent">{{ profile.role }}</span>
        <span class="hero-title-interest">{{ profile.interest }}</span>
      </h1>
      <p v-reveal class="hero-tagline">{{ profile.tagline }}</p>
      <div v-reveal class="hero-actions">
        <a href="#projects" class="button button-primary">Ver proyectos</a>
        <a href="#contact" class="button button-ghost">Contactar</a>
      </div>
    </div>
  </section>
</template>
