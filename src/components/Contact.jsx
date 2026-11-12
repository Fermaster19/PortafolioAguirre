import { useState } from 'react'
import { Mail, Send, Info } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import Section from './Section'
import Reveal from './Reveal'
import { LINKS } from '../data/content'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate({ nombre, email, mensaje }) {
  const errors = {}
  if (nombre.trim().length < 2) errors.nombre = 'Escribí tu nombre (mínimo 2 caracteres).'
  if (!EMAIL_RE.test(email.trim())) errors.email = 'Ingresá un email válido, por ejemplo nombre@dominio.com.'
  if (mensaje.trim().length < 10) errors.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
  return errors
}

const field = 'mt-2 w-full rounded-xl border bg-ink/60 px-4 py-3 text-white placeholder:text-mist/60 transition focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/40'

export default function Contact() {
  const [values, setValues] = useState({ nombre: '', email: '', mensaje: '' })
  const [errors, setErrors] = useState({})
  const [prepared, setPrepared] = useState(false)

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
    setPrepared(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) { setPrepared(false); return }
    const subject = `Contacto desde tu portfolio: ${values.nombre.trim()}`
    const body = `${values.mensaje.trim()}\n\n—\n${values.nombre.trim()}\n${values.email.trim()}`
    window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setPrepared(true)
  }

  const err = (k) => (errors[k] ? `${k}-error` : undefined)
  const border = (k) => (errors[k] ? 'border-red-400' : 'border-white/15')

  return (
    <Section id="contacto" title="¿Trabajamos juntos?" intro="Estoy abierto a nuevas oportunidades, proyectos y experiencias que me permitan continuar creciendo en el mundo del desarrollo de software.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass rounded-3xl p-6 sm:p-8">
            <ul className="space-y-5">
              <li>
                <p className="text-sm text-mist">Email</p>
                <a href={`mailto:${LINKS.email}`} className="break-all text-lg font-medium text-white underline decoration-sky/50 underline-offset-4 hover:decoration-sky">{LINKS.email}</a>
              </li>
              <li>
                <p className="text-sm text-mist">LinkedIn</p>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="break-all text-white underline decoration-sky/50 underline-offset-4 hover:decoration-sky">linkedin.com/in/claudio-aguirre-2b83412b9</a>
              </li>
              <li>
                <p className="text-sm text-mist">GitHub</p>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="break-all text-white underline decoration-sky/50 underline-offset-4 hover:decoration-sky">github.com/Fermaster19</a>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href={`mailto:${LINKS.email}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0558c4] to-volt-ui px-5 py-3 text-[15px] font-medium text-white transition hover:brightness-110">
                <Mail aria-hidden="true" className="h-[18px] w-[18px]" /> Enviar email
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky/40 px-5 py-3 text-[15px] font-medium text-white transition hover:bg-sky/10">
                <FaLinkedinIn aria-hidden="true" className="h-[18px] w-[18px] text-sky" /> Visitar LinkedIn
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky/40 px-5 py-3 text-[15px] font-medium text-white transition hover:bg-sky/10">
                <FaGithub aria-hidden="true" className="h-[18px] w-[18px] text-sky" /> Visitar GitHub
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8" aria-labelledby="form-title">
            <h3 id="form-title" className="text-2xl font-semibold">Escribime un mensaje</h3>
            <p className="mt-2 flex gap-2 text-sm leading-relaxed text-mist">
              <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
              Este formulario no envía el mensaje por sí mismo: al enviarlo se abre tu aplicación de correo con el texto ya preparado.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="nombre" className="text-sm font-medium">Nombre</label>
                <input id="nombre" name="nombre" type="text" autoComplete="name" value={values.nombre} onChange={onChange}
                  aria-invalid={!!errors.nombre} aria-describedby={err('nombre')} className={`${field} ${border('nombre')}`} placeholder="Tu nombre" />
                {errors.nombre && <p id="nombre-error" className="mt-1.5 text-sm text-red-300">{errors.nombre}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange}
                  aria-invalid={!!errors.email} aria-describedby={err('email')} className={`${field} ${border('email')}`} placeholder="nombre@dominio.com" />
                {errors.email && <p id="email-error" className="mt-1.5 text-sm text-red-300">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="mensaje" className="text-sm font-medium">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={5} value={values.mensaje} onChange={onChange}
                  aria-invalid={!!errors.mensaje} aria-describedby={err('mensaje')} className={`${field} ${border('mensaje')} resize-y`} placeholder="Contame en qué puedo ayudarte" />
                {errors.mensaje && <p id="mensaje-error" className="mt-1.5 text-sm text-red-300">{errors.mensaje}</p>}
              </div>
            </div>

            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0558c4] to-volt-ui px-5 py-3 text-[15px] font-medium text-white shadow-[0_10px_30px_-12px_rgba(8,123,255,0.9)] transition hover:brightness-110 sm:w-auto">
              <Send aria-hidden="true" className="h-[18px] w-[18px]" /> Preparar email
            </button>

            <div aria-live="polite" className="min-h-6">
              {prepared && (
                <p className="mt-4 rounded-xl border border-sky/30 bg-sky/10 px-4 py-3 text-sm leading-relaxed text-white">
                  Se abrió tu aplicación de correo con el mensaje preparado. Todavía no se envió: revisalo y enviá desde allí. Si no se abrió nada, escribime directamente a {LINKS.email}.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
