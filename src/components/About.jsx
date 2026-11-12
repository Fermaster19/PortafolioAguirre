import Section from './Section'
import Reveal from './Reveal'
import { ABOUT_CARDS } from '../data/content'

export default function About() {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-xl space-y-5 text-lg leading-relaxed text-mist">
          <p>
            Soy estudiante de tercer año de Desarrollo de Software en el Instituto Superior VDR y Técnico en Electrónica. Me interesa el desarrollo de aplicaciones, la programación web y la creación de herramientas que faciliten procesos y solucionen necesidades reales.
          </p>
          <p>
            A través de diferentes proyectos académicos y personales he trabajado con tecnologías de frontend, backend, bases de datos y automatización.
          </p>
          <p>
            Busco continuar desarrollándome profesionalmente, adquirir experiencia y formar parte de equipos donde pueda aportar ideas, aprender y crecer.
          </p>
        </div>

        <ul className="grid gap-4">
          {ABOUT_CARDS.map(({ title, text, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={i * 0.08}>
              <div className="glass glow-hover flex gap-4 rounded-2xl p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-sky/30 bg-sky/10 text-sky">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-mist">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
