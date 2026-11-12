// Detecta capturas reales en src/assets/projects/<slug>.(png|jpg|jpeg|webp)
const shots = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })

function findShot(slug) {
  const key = Object.keys(shots).find((p) => p.split('/').pop().replace(/\.[^.]+$/, '') === slug)
  return key ? shots[key] : null
}

export function hasProjectShot(slug) {
  return findShot(slug) !== null
}

export default function ProjectShot({ project }) {
  const src = findShot(project.slug)
  if (!src) return null

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink/70">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-deep/80 px-4 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-sky" />
      </div>
      <img src={src} alt={`Captura de la interfaz de ${project.name}`} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
    </div>
  )
}
