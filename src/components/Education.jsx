import { GraduationCap, Briefcase } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { EDUCATION, EXPERIENCE } from '../data/content'

export default function Education() {
  return (
    <>
      <Section id="formacion" title="Mi formación">
        <ol className="relative ml-4 max-w-3xl border-l border-sky/30 pl-8">
          {EDUCATION.map((e, i) => (
            <Reveal as="li" key={e.place} delay={i * 0.08} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute -left-[2.6rem] top-1.5 grid h-5 w-5 place-items-center rounded-full border-2 border-sky bg-ink ${e.current ? 'shadow-[0_0_18px_rgba(32,185,255,0.9)]' : ''}`}
              >
                {e.current && <span className="h-2 w-2 rounded-full bg-sky" />}
              </span>
              <div className="glass glow-hover rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2 text-2xl font-semibold">
                    <GraduationCap aria-hidden="true" className="h-5 w-5 text-sky" /> {e.place}
                  </h3>
                  <p className="text-sm font-medium text-sky">{e.period}</p>
                </div>
                <p className="mt-2 text-lg text-white">{e.title}</p>
                <p className="mt-1 text-[15px] text-mist">{e.status}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="experiencia" title="Experiencia">
        <Reveal>
          <article className="glass glow-hover grid gap-4 rounded-2xl border-l-4 border-l-sky p-6 sm:grid-cols-[14rem_1fr] sm:p-8">
            <div>
              <Briefcase aria-hidden="true" className="mb-3 h-6 w-6 text-sky" />
              <h3 className="text-2xl font-semibold">{EXPERIENCE.role}</h3>
              <p className="mt-1 text-sm font-medium text-sky">{EXPERIENCE.period}</p>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-mist">{EXPERIENCE.text}</p>
          </article>
        </Reveal>
      </Section>
    </>
  )
}
