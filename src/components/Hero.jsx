import { motion, useReducedMotion } from 'framer-motion'
import { HiArrowDown, HiPlay } from 'react-icons/hi'
import { SiReact, SiNodedotjs, SiMongodb, SiPostgresql } from 'react-icons/si'
import { hero, contact } from '../data/site'

const floatIcons = [
  { Icon: SiReact, className: 'text-cyan-400', delay: 0 },
  { Icon: SiNodedotjs, className: 'text-emerald-400', delay: 0.15 },
  { Icon: SiMongodb, className: 'text-green-400', delay: 0.3 },
  { Icon: SiPostgresql, className: 'text-sky-400', delay: 0.45 },
]

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden px-4 pb-24 pt-28 md:px-8 md:pb-32 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-80" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/90"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Available for projects
          </motion.p>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            {hero.name}
          </motion.h1>

          <motion.p
            className="mt-4 text-xl font-medium text-slate-300 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <span className="gradient-text">{hero.title}</span>
            <span className="text-slate-500"> · MERN & SaaS</span>
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25"
              whileHover={reduce ? {} : { scale: 1.03, y: -2 }}
              whileTap={reduce ? {} : { scale: 0.98 }}
            >
              Let&apos;s talk
              <HiArrowDown className="h-4 w-4 rotate-[-90deg]" />
            </motion.a>
            <motion.a
              href={hero.introVideo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-sm transition-colors hover:border-cyan-400/40 hover:bg-white/10"
              whileHover={reduce ? {} : { scale: 1.02 }}
              whileTap={reduce ? {} : { scale: 0.98 }}
            >
              <HiPlay className="h-5 w-5 text-cyan-400" />
              Intro video
            </motion.a>
            <motion.a
              href={contact.upwork}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-400 underline-offset-4 hover:text-cyan-300 hover:underline"
            >
              View Upwork profile
            </motion.a>
          </motion.div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md flex-col items-center lg:mx-0">
          <motion.div
            className="relative aspect-square w-full max-w-[340px]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-4 rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/20 p-[1px]">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[1.85rem] bg-gradient-to-b from-slate-800/30 via-slate-900/60 to-slate-950/90 ring-1 ring-white/5">
                <div
                  className="pointer-events-none absolute inset-0 opacity-90"
                  style={{
                    backgroundImage:
                      'radial-gradient(ellipse 80% 70% at 50% 85%, rgba(34,211,238,0.12), transparent 55%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(167,139,250,0.15), transparent 50%)',
                  }}
                />
                <motion.img
                  src="/hero-portrait.png"
                  alt={`${hero.name} — full stack developer`}
                  width={680}
                  height={680}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="relative z-[1] mx-auto h-[112%] w-full max-w-[320px] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:max-w-none"
                  initial={{ opacity: 0, y: 28 }}
                  animate={
                    reduce
                      ? { opacity: 1, y: 0 }
                      : { opacity: 1, y: [0, -6, 0] }
                  }
                  transition={{
                    opacity: { delay: 0.35, duration: 0.5 },
                    y: reduce
                      ? undefined
                      : { delay: 0.6, duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />
                <p className="relative z-[2] -mt-2 px-5 pb-5 text-center text-xs leading-snug text-slate-400 sm:text-sm">
                  
                </p>
              </div>
            </div>

            {floatIcons.map(({ Icon, className, delay }, i) => (
              <motion.div
                key={i}
                className={`absolute z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-2xl shadow-lg backdrop-blur-md ${className}`}
                style={{
                  top: i % 2 === 0 ? '8%' : 'auto',
                  bottom: i % 2 === 1 ? '12%' : 'auto',
                  left: i < 2 ? '-4%' : 'auto',
                  right: i >= 2 ? '-2%' : 'auto',
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  reduce
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, scale: 1, y: [0, -8, 0] }
                }
                transition={{
                  opacity: { delay: 0.35 + delay, duration: 0.35 },
                  scale: { delay: 0.35 + delay, type: 'spring', stiffness: 220, damping: 20 },
                  y: reduce
                    ? undefined
                    : {
                        delay: 0.9 + delay,
                        duration: 2.8 + i * 0.35,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                }}
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs text-slate-500"
        initial={{ opacity: 0 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.4 },
          y: reduce
            ? undefined
            : { repeat: Infinity, duration: 2.2, ease: 'easeInOut', delay: 1.1 },
        }}
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <HiArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  )
}
