import { ExternalLink, Check } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import ProjectShot, { hasProjectShot } from './ProjectShot'
import Badge from './Badge'
import Reveal from './Reveal'

export default function ProjectCard({ project, flip, featured }) {
  const { name, category, description, problemTitle, problem, features, tech, projectUrl, repoUrl, note } = project
  const hasShot = hasProjectShot(project.slug)
  return (
    <Reveal as="article">
      <div className={`glass glow-hover grid gap-8 rounded-3xl p-5 sm:p-8 ${hasShot ? 'lg:grid-cols-2 lg:items-start lg:gap-10' : ''} ${featured ? 'shadow-[0_30px_80px_-40px_rgba(8,123,255,0.6)]' : ''}`}>
        {hasShot && (
          <div className={`lg:sticky lg:top-24 ${flip ? 'lg:order-2' : ''}`}>
            <ProjectShot project={project} />
          </div>
        )}

        <div className={hasShot && flip ? 'lg:order-1' : ''}>
          {featured && (
            <p className="mb-3 inline-block rounded-full border border-sky/40 bg-sky/10 px-3 py-1 text-xs font-medium text-sky">Proyecto principal</p>
          )}
          <h3 className="text-3xl font-bold sm:text-4xl">{name}</h3>
          <p className="mt-1 text-[15px] font-medium text-sky">{category}</p>

          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-mist">
            {description.map((p) => <p key={p}>{p}</p>)}
          </div>

          <h4 className="mt-6 text-lg font-semibold">{problemTitle}</h4>
          <p className="mt-1 text-[15px] leading-relaxed text-mist">{problem}</p>

          <h4 className="mt-6 text-lg font-semibold">Funcionalidades</h4>
          <ul className="mt-2 grid gap-1.5 text-[15px] text-mist sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex gap-2">
                <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-sky" /> <span>{f}</span>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-lg font-semibold">Tecnologías</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => <Badge key={t.name} icon={t.icon}>{t.name}</Badge>)}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0558c4] to-volt-ui px-5 py-3 text-[15px] font-medium text-white shadow-[0_10px_30px_-12px_rgba(8,123,255,0.9)] transition hover:brightness-110"
            >
              <ExternalLink aria-hidden="true" className="h-[18px] w-[18px]" /> Ver proyecto
              <span className="sr-only"> {name} (se abre en una pestaña nueva)</span>
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky/40 px-5 py-3 text-[15px] font-medium text-white transition hover:bg-sky/10"
            >
              <FaGithub aria-hidden="true" className="h-[18px] w-[18px] text-sky" /> Ver código en GitHub
              <span className="sr-only"> de {name} (se abre en una pestaña nueva)</span>
            </a>
          </div>
          {note && <p className="mt-4 text-sm leading-relaxed text-mist">{note}</p>}
        </div>
      </div>
    </Reveal>
  )
}
