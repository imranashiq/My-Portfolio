import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { about } from '../data/site'

export function About() {
  const reduce = useReducedMotion()

  return (
    <section id="about" className="relative scroll-mt-24 px-4 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400/90">About</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
            Product-minded <span className="gradient-text">engineering</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Stagger className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <StaggerItem key={i}>
                <p className="text-base leading-relaxed text-slate-400 md:text-lg">{p}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-8">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                At a glance
              </h3>
              <ul className="mt-6 space-y-5">
                {about.highlights.map((h, i) => (
                  <motion.li
                    key={h.label}
                    className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0"
                    initial={false}
                    whileHover={reduce ? {} : { x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  >
                    <span className="text-sm text-slate-500">{h.label}</span>
                    <span className="text-right text-sm font-medium text-slate-200">{h.value}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
