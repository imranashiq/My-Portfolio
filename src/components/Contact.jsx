import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './Reveal'
import { contact, hero } from '../data/site'
import { HiOutlineMail } from 'react-icons/hi'
import { SiUpwork } from 'react-icons/si'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const actions = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: HiOutlineMail,
    accent: 'from-cyan-500/20 to-cyan-500/5',
  },
  {
    label: 'Upwork',
    value: 'Hire on Upwork',
    href: contact.upwork,
    icon: SiUpwork,
    accent: 'from-emerald-500/20 to-emerald-500/5',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: contact.linkedin,
    icon: FaLinkedin,
    accent: 'from-sky-500/20 to-sky-500/5',
    external: true,
  },
  {
    label: 'WhatsApp',
    value: contact.phoneDisplay,
    href: contact.whatsapp,
    icon: FaWhatsapp,
    accent: 'from-green-500/20 to-green-500/5',
    external: true,
  },
]

export function Contact() {
  const reduce = useReducedMotion()

  return (
    <section id="contact" className="relative scroll-mt-24 px-4 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cyan-500/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400/90">Contact</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
            Let&apos;s plan your <span className="gradient-text">next build</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Share your MVP, refactor, or scaling challenge—{hero.name.split(' ')[0]} typically replies within a few
            hours.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {actions.map((a, i) => {
            const Icon = a.icon
            return (
              <Reveal key={a.label} delay={i * 0.06}>
                <motion.a
                  href={a.href}
                  target={a.external ? '_blank' : undefined}
                  rel={a.external ? 'noreferrer' : undefined}
                  className={`flex items-start gap-4 rounded-3xl border border-white/10 bg-gradient-to-br ${a.accent} p-6 transition-colors hover:border-cyan-400/30`}
                  whileHover={reduce ? {} : { scale: 1.02, y: -2 }}
                  whileTap={reduce ? {} : { scale: 0.99 }}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-xl text-white">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {a.label}
                    </span>
                    <span className="mt-1 block text-base font-medium text-slate-100">{a.value}</span>
                  </span>
                </motion.a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
