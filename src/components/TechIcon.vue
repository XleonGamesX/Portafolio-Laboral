<script setup>
import { technologies } from '../data/technologies.js'

const props = defineProps({
  id: { type: String, required: true },
  label: { type: Boolean, default: false }
})

const technology = technologies[props.id]
</script>

<template>
  <span class="tech-icon">
    <svg v-if="technology?.path" viewBox="0 0 24 24" aria-hidden="true">
      <path :d="technology.path" />
    </svg>
    <span v-if="label">{{ technology?.label ?? id }}</span>
  </span>
</template>
