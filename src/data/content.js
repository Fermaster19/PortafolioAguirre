import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiSharp, SiDotnet,
  SiMysql, SiPostgresql, SiSupabase, SiGit, SiGithub, SiFigma, SiN8N,
  SiVercel, SiGooglegemini, SiGmail, SiGooglesheets,
} from 'react-icons/si'
import { Database, Code, Workflow, Sparkles, PenTool, Users, GraduationCap, Cpu } from 'lucide-react'

export const LINKS = {
  email: 'claudiodvr20@gmail.com',
  linkedin: 'https://www.linkedin.com/in/claudio-aguirre-2b83412b9/',
  github: 'https://github.com/Fermaster19',
  cv: '/CV-Claudio-Aguirre.pdf',
}

export const NAV = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
]

export const SKILLS = [
  { title: 'Frontend', items: [
    { name: 'HTML5', icon: SiHtml5 }, { name: 'CSS3', icon: SiCss },
    { name: 'JavaScript', icon: SiJavascript }, { name: 'React', icon: SiReact } ] },
  { title: 'Backend', items: [
    { name: 'Node.js', icon: SiNodedotjs }, { name: 'C#', icon: SiSharp }, { name: '.NET', icon: SiDotnet } ] },
  { title: 'Bases de datos', items: [
    { name: 'MySQL', icon: SiMysql }, { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Supabase', icon: SiSupabase }, { name: 'SQL Server', icon: Database } ] },
  { title: 'Herramientas', items: [
    { name: 'Git', icon: SiGit }, { name: 'GitHub', icon: SiGithub },
    { name: 'Visual Studio Code', icon: Code }, { name: 'Figma', icon: SiFigma }, { name: 'n8n', icon: SiN8N } ] },
]

export const OTHER_SKILLS = [
  { name: 'Automatización de procesos', icon: Workflow },
  { name: 'Inteligencia artificial aplicada', icon: Sparkles },
  { name: 'Diseño de interfaces UI/UX', icon: PenTool },
  { name: 'Trabajo en equipo', icon: Users },
]

export const PROJECTS = [
  {
    slug: 'manos-conectadas',
    name: 'Manos Conectadas',
    category: 'Plataforma web de gestión de donaciones solidarias',
    description: [
      'Manos Conectadas es una plataforma digital orientada a facilitar la gestión de donaciones solidarias y mejorar la coordinación entre donantes y organizaciones sociales.',
      'El sistema permite registrar donaciones, administrar objetos ofrecidos, incorporar fotografías, generar códigos de seguimiento y gestionar los estados de cada solicitud.',
    ],
    problemTitle: 'Qué problema resuelve',
    problem: 'La información de las donaciones suele quedar repartida entre formularios, mensajes y planillas. La plataforma la concentra en un solo lugar, con un código de seguimiento por donación, para saber qué se donó, cómo se entrega y en qué estado está.',
    features: [
      'Registro de donaciones',
      'Gestión de múltiples objetos',
      'Carga de fotografías',
      'Generación de códigos de seguimiento',
      'Administración de solicitudes',
      'Seguimiento de estados',
      'Integración con herramientas de inteligencia artificial',
    ],
    tech: [
      { name: 'HTML5', icon: SiHtml5 }, { name: 'CSS3', icon: SiCss }, { name: 'JavaScript', icon: SiJavascript },
      { name: 'Supabase', icon: SiSupabase }, { name: 'PostgreSQL', icon: SiPostgresql }, { name: 'Vercel', icon: SiVercel },
    ],
    projectUrl: 'https://manos-conectadas-utxp.vercel.app',
    repoUrl: 'https://github.com/Fermaster19/ManosConectadas',
    note: null,
    logo: true,
  },
  {
    slug: 'autoquote-mvp',
    name: 'AutoQuote MVP',
    category: 'Automatización de procesos comerciales mediante inteligencia artificial',
    description: [
      'AutoQuote MVP es un sistema diseñado para automatizar la gestión de cotizaciones comerciales. Permite transformar solicitudes de clientes en presupuestos estructurados, facilitando el trabajo administrativo y reduciendo tareas manuales.',
    ],
    problemTitle: 'Qué proceso automatiza',
    problem: 'Un pedido escrito en lenguaje natural, por ejemplo por email o WhatsApp, normalmente se interpreta a mano, se arma en una planilla y se envía por correo. AutoQuote extrae los ítems con IA, los deja listos para revisión humana y prepara el PDF y un borrador de Gmail.',
    features: [
      'Procesamiento de solicitudes comerciales',
      'Extracción de información mediante inteligencia artificial',
      'Generación y edición de cotizaciones',
      'Generación de documentos PDF',
      'Integración con servicios de Google',
      'Automatización de procesos mediante n8n',
    ],
    tech: [
      { name: 'React', icon: SiReact }, { name: 'Node.js', icon: SiNodedotjs }, { name: 'n8n', icon: SiN8N },
      { name: 'Google Gemini', icon: SiGooglegemini }, { name: 'Gmail API', icon: SiGmail }, { name: 'Google Sheets', icon: SiGooglesheets },
    ],
    projectUrl: 'https://github.com/Fermaster19/-AutoQuote_MVP#readme',
    repoUrl: 'https://github.com/Fermaster19/-AutoQuote_MVP',
    note: 'Este proyecto no tiene demo pública: necesita el backend y las credenciales de Google configuradas. “Ver proyecto” abre la documentación en GitHub.',
    logo: false,
  },
]

export const EDUCATION = [
  { place: 'Instituto Superior VDR', title: 'Tecnicatura Superior en Desarrollo de Software', period: '2024 – Actualidad', status: 'Tercer año', current: true },
  { place: 'IPET N.º 55', title: 'Técnico en Electrónica', period: '2017 – 2023', status: 'Título finalizado', current: false },
]

export const EXPERIENCE = {
  role: 'Pasantías en Mabe',
  period: 'Septiembre 2023 – Octubre 2023',
  text: 'Realicé una pasantía educativa de un mes en el área de mantenimiento, donde pude conocer procesos industriales, trabajar con máquinas y herramientas y aplicar conocimientos adquiridos durante mi formación técnica.',
}

export const ABOUT_CARDS = [
  { title: 'Desarrollo de software', text: 'Aplicaciones web con frontend, backend y bases de datos, tanto en proyectos académicos como propios.', icon: Code },
  { title: 'Resolución de problemas', text: 'Combino la base técnica de mi formación en electrónica con la programación para encarar problemas concretos.', icon: Cpu },
  { title: 'Aprendizaje continuo', text: 'Sigo cursando la carrera y sumo herramientas nuevas, como automatización e IA aplicada, en cada proyecto.', icon: GraduationCap },
]
