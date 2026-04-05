import { motion, useReducedMotion } from 'framer-motion'
import { contact, hero, navLinks } from '../data/site'
import { HiOutlineMail } from 'react-icons/hi'
import { SiUpwork } from 'react-icons/si'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const social = [
  { href: `mailto:${contact.email}`, label: 'Email', icon: HiOutlineMail },
  { href: contact.upwork, label: 'Upwork', icon: SiUpwork },
  { href: contact.linkedin, label: 'LinkedIn', icon: FaLinkedin },
  { href: contact.whatsapp, label: 'WhatsApp', icon: FaWhatsapp },
]

export function Footer() {
  const reduce = useReducedMotion()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            {hero.name}
          </p>
          <p className="mt-2 max-w-sm text-sm text-slate-500">
            Full stack MERN & Next.js · SaaS, payments, and real-time products.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
          >
            <HiOutlineMail className="h-4 w-4" />
            {contact.email}
          </a>
        </div>

        <div className="flex flex-wrap gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-sm text-slate-400 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Connect</p>
            <ul className="mt-4 flex gap-3">
              {social.map((s) => {
                const Icon = s.icon
                const external = s.href.startsWith('http')
                return (
                  <li key={s.label}>
                    <motion.a
                      href={s.href}
                      aria-label={s.label}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                      whileHover={reduce ? {} : { y: -3 }}
                      whileTap={reduce ? {} : { scale: 0.96 }}
                    >
                      <Icon />
                    </motion.a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center text-xs text-slate-600 md:flex-row md:text-left">
        <p>© {year} {hero.name}. Crafted with React & motion.</p>
        <p>Lahore, Pakistan · Fluent English</p>
      </div>
    </footer>
  )
}
