import { motion, useMotionValue, useSpring, useTransform, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Reveal } from './Reveal'
import { skills, skillTags } from '../data/site'

function SkillBar({ name, level, index }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 100, damping: 22, mass: 0.6 })
  const width = useTransform(spring, (v) => `${v}%`)

  useEffect(() => {
    if (inView) {
      mv.set(reduce ? level : 0)
      if (!reduce) {
        const id = requestAnimationFrame(() => mv.set(level))
        return () => cancelAnimationFrame(id)
      }
    }
  }, [inView, level, mv, reduce])

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ delay: index * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-slate-200">{name}</span>
        <span className="tabular-nums text-slate-500">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800/80 ring-1 ring-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
          style={{ width }}
        />
      </div>
    </motion.div>
  )
}

export function Skills() {
  const reduce = useReducedMotion()

  return (
    <section id="skills" className="relative scroll-mt-24 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400/90">Skills</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
            Stack & <span className="gradient-text">integrations</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Depth across the full stack—databases, APIs, payments, AI features, and real-time experiences.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="space-y-5">
            {skills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-violet-500/10 to-transparent p-8">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                Also fluent in
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {skillTags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={reduce ? {} : { scale: 1.05, borderColor: 'rgba(34, 211, 238, 0.35)' }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed text-slate-500">
                Third-party integrations include Stripe subscriptions, PayPal, QuickBooks, Walmart marketplace, OpenAI,
                AWS S3, Firebase, and deployment on GCP, AWS EC2, cPanel, and NGINX.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
