import Section from './Section'
import Reveal from './Reveal'
import Badge from './Badge'
import { SKILLS, OTHER_SKILLS } from '../data/content'

export default function Skills() {
  return (
    <Section id="habilidades" title="Tecnologías y conocimientos" intro="Las herramientas con las que trabajé en proyectos académicos y personales.">
      <div className="grid gap-5 md:grid-cols-2">
        {SKILLS.map((cat, i) => (
          <Reveal key={cat.title} delay={(i % 2) * 0.08}>
            <section aria-labelledby={`sk-${i}`} className="glass h-full rounded-2xl p-6">
              <h3 id={`sk-${i}`} className="mb-4 text-2xl font-semibold">{cat.title}</h3>
              <ul className="flex flex-wrap gap-2.5">
                {cat.items.map((t) => <Badge key={t.name} icon={t.icon}>{t.name}</Badge>)}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-5">
        <section aria-labelledby="sk-otros" className="glass rounded-2xl p-6">
          <h3 id="sk-otros" className="mb-4 text-2xl font-semibold">Otros</h3>
          <ul className="flex flex-wrap gap-2.5">
            {OTHER_SKILLS.map((t) => <Badge key={t.name} icon={t.icon}>{t.name}</Badge>)}
          </ul>
        </section>
      </Reveal>
    </Section>
  )
}
