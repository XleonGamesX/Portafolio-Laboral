<script setup>
import { profile } from '../data/profile.js'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-identity">
        <p class="footer-name">{{ profile.name }}</p>
        <p class="footer-role">{{ profile.role }} · {{ profile.interest }}</p>
      </div>
      <ul class="footer-links">
        <li v-for="social in profile.socials" :key="social.label">
          <a :href="social.url" target="_blank" rel="noopener">{{ social.label }}</a>
        </li>
      </ul>
    </div>
    <div class="container footer-copy">© {{ currentYear }}</div>
  </footer>
</template>
