# Portafolio — David Santiago León Rueda

Portafolio personal construido con Vue 3, Vite, HTML, CSS y JavaScript. Los iconos de tecnologías provienen de `simple-icons` (fijado a v13 porque las versiones recientes retiraron el logo de Oracle).

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # servir el build localmente
```

## Estructura

```
src/
├── components/   # un componente por sección + TechIcon, StarField, ProjectCard
├── data/         # contenido editable del sitio
├── assets/       # imágenes e iconos propios
├── styles/       # main.css: variables, estilos por sección, responsive
├── App.vue
└── main.js
```

## Contenido

Todo lo que se ve en la pantalla vive en `src/data/`:

| Archivo             | Contenido                                                      |
| ------------------- | -------------------------------------------------------------- |
| `profile.js`        | Nombre, rol, textos, contacto, redes y navegación              |
| `projects.js`       | Proyectos reales, tecnologías confirmadas y enlaces            |
| `technologies.js`   | Registro de tecnologías: etiqueta, color de marca e icono SVG  |
| `skills.js`         | Grupos de habilidades y tecnologías en aprendizaje             |
| `backendConcepts.js`| Endpoints y conceptos de la sección Backend & APIs             |
| `education.js`      | Formación académica                                            |

Para añadir un proyecto nuevo basta con añadir un objeto a `projects.js`: la tarjeta se renderiza sola. Sus `technologies` usan los identificadores de `technologies.js`; si una tecnología no existe allí, añádila primero con su color de marca.

Notas:

- El enlace de WhatsApp se construyó con el prefijo de Colombia (`+57`): `https://wa.me/573157610249`.
- El fondo de partículas (`StarField.vue`) se desactiva con `prefers-reduced-motion`.

La identidad visual (colores, tipografías, espaciados, radios, sombras, transiciones) se modifica desde las variables de `:root` en `src/styles/main.css`.
