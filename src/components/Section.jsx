export default function Section({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative px-5 py-20 sm:px-8 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <h2 id={`${id}-title`} className="text-4xl font-bold text-white sm:text-5xl">{title}</h2>
          <span aria-hidden="true" className="mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-volt to-sky" />
          {intro && <p className="mt-5 text-lg leading-relaxed text-mist">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
