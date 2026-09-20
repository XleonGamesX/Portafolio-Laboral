import {
  siHtml5,
  siCss3,
  siJavascript,
  siVuedotjs,
  siNodedotjs,
  siExpress,
  siPython,
  siMysql,
  siOracle,
  siPostgresql,
  siMongodb,
  siGit,
  siGithub,
  siReact,
  siWhatsapp,
  siJsonwebtokens
} from 'simple-icons'

const GENERIC_CODE_PATH =
  'M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z'

export const technologies = {
  html: { label: 'HTML', color: '#E34F26', path: siHtml5.path },
  css: { label: 'CSS', color: '#1572B6', path: siCss3.path },
  javascript: { label: 'JavaScript', color: '#F7DF1E', path: siJavascript.path },
  vue: { label: 'Vue', color: '#42B883', path: siVuedotjs.path },
  react: { label: 'React', color: '#61DAFB', path: siReact.path },
  nodejs: { label: 'Node.js', color: '#5FA04E', path: siNodedotjs.path },
  express: { label: 'Express', color: '#e7edf6', path: siExpress.path },
  python: { label: 'Python', color: '#3776AB', path: siPython.path },
  mysql: { label: 'MySQL', color: '#4479A1', path: siMysql.path },
  oracle: { label: 'Oracle', color: '#F80000', path: siOracle.path },
  postgresql: { label: 'PostgreSQL', color: '#4169E1', path: siPostgresql.path },
  mongodb: { label: 'MongoDB', color: '#47A248', path: siMongodb.path },
  git: { label: 'Git', color: '#F05032', path: siGit.path },
  github: { label: 'GitHub', color: '#e7edf6', path: siGithub.path },
  jwt: { label: 'JWT', color: '#FB015B', path: siJsonwebtokens.path },
  whatsapp: { label: 'WhatsApp', color: '#25D366', path: siWhatsapp.path },
  rest: { label: 'REST APIs', color: '#45D6B5', path: GENERIC_CODE_PATH },
  http: { label: 'HTTP', color: '#45D6B5', path: null },
  json: { label: 'JSON', color: '#45D6B5', path: null },
  crud: { label: 'CRUD', color: '#45D6B5', path: null }
}
