import Section from './Section'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data/content'

export default function Projects() {
  return (
    <Section id="proyectos" title="Proyectos destacados" intro="Dos proyectos propios con su código disponible en GitHub.">
      <div className="space-y-10">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.slug} project={p} flip={i % 2 === 1} featured={i === 0} />
        ))}
      </div>
    </Section>
  )
}
