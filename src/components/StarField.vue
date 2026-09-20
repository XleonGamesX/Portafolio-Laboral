<script setup>
const STAR_COUNT = 45

const stars = Array.from({ length: STAR_COUNT }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  size: 1 + Math.random() * 2.4,
  duration: 10 + Math.random() * 14,
  delay: -Math.random() * 24,
  opacity: 0.2 + Math.random() * 0.6,
  glowing: Math.random() < 0.2
}))
</script>

<template>
  <div class="starfield" aria-hidden="true">
    <span
      v-for="star in stars"
      :key="star.id"
      class="star"
      :class="{ 'is-glowing': star.glowing }"
      :style="{
        left: star.left + '%',
        width: star.size + 'px',
        height: star.size + 'px',
        opacity: star.opacity,
        animationDuration: star.duration + 's',
        animationDelay: star.delay + 's'
      }"
    ></span>
  </div>
</template>
