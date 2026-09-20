import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'

const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      revealObserver.unobserve(entry.target)
    }
  }
}, { threshold: 0.1 })

const app = createApp(App)

app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal')
    revealObserver.observe(el)
  }
})

app.mount('#app')
