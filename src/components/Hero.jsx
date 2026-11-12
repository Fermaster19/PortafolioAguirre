import { motion } from 'framer-motion'
import { FolderGit2, Send, Download } from 'lucide-react'
import foto from '../assets/claudio.webp'
import { LINKS } from '../data/content'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

const btn = 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-medium transition'

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-40">
      {/* Franjas diagonales del CV */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="streak -right-20 top-16 w-[36rem]" />
        <span className="streak -right-32 top-44 w-[30rem] !h-10 opacity-30" />
        <span className="streak -left-48 bottom-16 w-[28rem] !h-8 opacity-25" />
        <span className="absolute right-6 top-24 hidden select-none font-display text-7xl font-bold text-sky/20 lg:block">&lt;/&gt;</span>
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="text-sm font-medium tracking-wide text-sky">HOLA, SOY</motion.p>
          <motion.h1 variants={item} id="hero-title" className="mt-3 text-6xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
            Claudio <span className="text-sky">Aguirre</span>
          </motion.h1>
          <motion.p variants={item} className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl">
            Estudiante de Desarrollo de Software
          </motion.p>
          <motion.p variants={item} className="mt-2 text-base text-mist sm:text-lg">
            Técnico en Electrónica | Desarrollador en formación
          </motion.p>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Me apasiona transformar ideas en soluciones digitales. Desarrollo proyectos que combinan programación, automatización y tecnología para resolver problemas reales.
          </motion.p>
          <motion.p variants={item} className="mt-6 border-l-2 border-sky pl-4 font-display text-xl italic text-white">
            Desarrollando soluciones, creando oportunidades.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#proyectos" className={`${btn} bg-gradient-to-r from-[#0558c4] to-volt-ui text-white shadow-[0_10px_30px_-10px_rgba(8,123,255,0.9)] hover:brightness-110`}>
              <FolderGit2 aria-hidden="true" className="h-[18px] w-[18px]" /> Ver mis proyectos
            </a>
            <a href="#contacto" className={`${btn} glass hover:border-sky/50`}>
              <Send aria-hidden="true" className="h-[18px] w-[18px] text-sky" /> Contactarme
            </a>
            <a href={LINKS.cv} download className={`${btn} border border-sky/40 text-white hover:bg-sky/10`}>
              <Download aria-hidden="true" className="h-[18px] w-[18px] text-sky" /> Descargar CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-sky/20 blur-3xl" />
          <div className="relative rounded-[2rem] border-2 border-sky/70 p-1.5 shadow-[0_0_60px_-12px_rgba(32,185,255,0.75)]">
            <img
              src={foto}
              alt="Retrato de Claudio Aguirre"
              width="720"
              height="720"
              fetchPriority="high"
              className="aspect-square w-full rounded-[1.6rem] object-cover"
            />
          </div>

          <div className="relative z-10 mx-auto -mt-5 w-[90%] rounded-2xl border border-white/15 bg-ink/95 p-4 font-mono text-[13px] leading-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
            <div className="mb-2 flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-sky" />
              <span className="ml-2 text-xs text-mist">perfil.js</span>
            </div>
            <pre className="overflow-x-auto whitespace-pre text-mist" aria-label="Resumen de perfil en formato de código">
              <code>
{`const claudio = {
  rol: "Dev en formación",
  base: "Electrónica",
  stack: ["React", "Node.js",
          "Supabase"],
  buscando: "proyectos reales",
}`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
