export const projects = [
  {
    id: 'tienda-ropa',
    number: '01',
    title: 'Tienda de ropa',
    category: 'Frontend',
    description: 'Desarrollo frontend de una tienda de ropa con una interfaz web orientada a la presentación de productos.',
    technologies: ['html', 'css', 'javascript'],
    links: [{ label: 'Ver proyecto', url: 'https://xleongamesx.github.io/Portafolio/Tienda_ropa/index.html#' }]
  },
  {
    id: 'barberia',
    number: '02',
    title: 'Sistema de barbería',
    category: 'CRUD',
    description: 'Aplicación web orientada a la gestión de información mediante operaciones CRUD.',
    technologies: [],
    links: [{ label: 'Ver proyecto', url: 'https://crud-barberia.onrender.com/' }]
  },
  {
    id: 'numerologia',
    number: '03',
    title: 'Numerología',
    category: 'Frontend + Backend + API',
    featured: true,
    flow: ['Frontend', 'API', 'Backend'],
    description: 'Aplicación web que integra un frontend con un backend para procesar funcionalidades relacionadas con numerología.',
    technologies: ['nodejs', 'express', 'mongodb', 'jwt'],
    links: [
      { label: 'Ver aplicación', url: 'https://frontend-numerologia.onrender.com' },
      { label: 'Ver backend', url: 'https://github.com/XleonGamesX/Numerologia.git' }
    ]
  }
]
