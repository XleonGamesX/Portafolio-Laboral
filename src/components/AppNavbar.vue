<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { profile } from '../data/profile.js'

const navigation = profile.navigation
const menuOpen = ref(false)
const activeSection = ref('hero')

let sectionObserver

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) activeSection.value = entry.target.id
    }
  }, { rootMargin: '-45% 0px -50% 0px' })

  for (const { id } of navigation) {
    const section = document.getElementById(id)
    if (section) sectionObserver.observe(section)
  }
})

onBeforeUnmount(() => sectionObserver?.disconnect())
</script>

<template>
  <header class="navbar">
    <nav class="container navbar-inner" aria-label="Navegación principal">
      <a href="#hero" class="navbar-brand" @click="closeMenu">
        {{ profile.name }}<span class="navbar-brand-dot">.</span>
      </a>
      <button
        class="navbar-toggle"
        :aria-expanded="menuOpen"
        aria-controls="navbar-menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="navbar-toggle-bar"></span>
        <span class="navbar-toggle-bar"></span>
        <span class="navbar-toggle-bar"></span>
        <span class="sr-only">{{ menuOpen ? 'Cerrar menú' : 'Abrir menú' }}</span>
      </button>
      <ul id="navbar-menu" class="navbar-menu" :class="{ 'is-open': menuOpen }">
        <li v-for="item in navigation" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="navbar-link"
            :class="{ 'is-active': activeSection === item.id }"
            @click="closeMenu"
          >{{ item.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
