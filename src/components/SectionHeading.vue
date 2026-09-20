<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' }
})
</script>

<template>
  <header v-reveal class="section-heading">
    <h2 class="section-heading-title">{{ title }}</h2>
    <p v-if="subtitle" class="section-heading-subtitle">{{ subtitle }}</p>
  </header>
</template>
