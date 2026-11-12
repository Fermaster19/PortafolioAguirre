import { ImagePlus } from 'lucide-react'
import logo from '../assets/manos-conectadas-logo.png'

// Detecta capturas reales en src/assets/projects/<slug>.(png|jpg|jpeg|webp)
const shots = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })

function findShot(slug) {
  const key = Object.keys(shots).find((p) => p.split('/').pop().replace(/\.[^.]+$/, '') === slug)
  return key ? shots[key] : null
}

export default function ProjectShot({ project }) {
  const src = findShot(project.slug)
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink/70">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-deep/80 px-4 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-sky" />
      </div>
      {src ? (
        <img src={src} alt={`Captura de la interfaz de ${project.name}`} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
      ) : (
        <div className="grid aspect-[16/10] place-items-center border-2 border-dashed border-sky/30 bg-[repeating-linear-gradient(135deg,rgba(8,123,255,0.06)_0_14px,transparent_14px_28px)] p-6 text-center m-3 rounded-xl">
          <div className="flex max-w-xs flex-col items-center gap-3">
            {project.logo ? (
              <img src={logo} alt="" width="56" height="56" className="h-14 w-14 rounded-xl object-contain" />
            ) : (
              <ImagePlus aria-hidden="true" className="h-10 w-10 text-sky" />
            )}
            <p className="font-display text-xl font-semibold">Captura pendiente</p>
            <p className="text-sm leading-relaxed text-mist">
              Esto no es una captura real. Guardá la imagen como <code className="rounded bg-white/10 px-1.5 py-0.5 text-[13px] text-white">src/assets/projects/{project.slug}.png</code> y aparece acá.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
