import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './Reveal'
import { experience } from '../data/site'
import { HiOutlineBriefcase } from 'react-icons/hi'

export function Experience() {
  const reduce = useReducedMotion()

  return (
    <section id="experience" className="relative scroll-mt-24 bg-slate-950/50 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400/90">Experience</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
            Where I&apos;ve <span className="gradient-text">shipped</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Long-form product work plus a wide range of client and platform builds—always with an eye on performance,
            security, and maintainability.
          </p>
        </Reveal>

        <div className="mt-16 space-y-12">
          {experience.map((job) => (
            <Reveal key={job.company}>
              <motion.article
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-8 md:p-10"
                whileHover={reduce ? {} : { borderColor: 'rgba(34, 211, 238, 0.25)' }}
                transition={{ duration: 0.25 }}
              >
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                      <HiOutlineBriefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-cyan-300/90">{job.company}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-400 md:text-right">
                    {job.period}
                  </span>
                </div>
                <p className="relative mt-6 text-slate-400 leading-relaxed">{job.description}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
