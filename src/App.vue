<script setup>
import StarField from './components/StarField.vue'
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import BackendSection from './components/BackendSection.vue'
import AboutSection from './components/AboutSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <a class="skip-link" href="#main">Saltar al contenido</a>
  <StarField />
  <AppNavbar />
  <main id="main">
    <HeroSection />
    <ProjectsSection />
    <SkillsSection />
    <BackendSection />
    <AboutSection />
    <EducationSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>
