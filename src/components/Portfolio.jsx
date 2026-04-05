import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { portfolio } from '../data/site'
import { HiOutlineExternalLink } from 'react-icons/hi'

export function Portfolio() {
  const reduce = useReducedMotion()

  return (
    <section id="portfolio" className="relative scroll-mt-24 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400/90">Work</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
            Work <span className="gradient-text">portfolio</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            A snapshot of builds spanning SaaS, commerce, education, and platforms—each tuned for real users and real
            operations.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project) => {
            const Wrapper = project.href ? motion.a : motion.article
            const wrapperProps = project.href
              ? {
                  href: project.href,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {}

            return (
              <StaggerItem key={project.title}>
                <Wrapper
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 text-left no-underline outline-none transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                  whileHover={reduce ? {} : { y: -8 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  {...wrapperProps}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-cyan-500/20 via-slate-900 to-violet-600/25">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={`${project.title} — live site preview`}
                          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      </>
                    ) : (
                      <>
                        <motion.div
                          className="absolute inset-0 opacity-60"
                          style={{
                            backgroundImage:
                              'radial-gradient(circle at 30% 20%, rgba(34,211,238,0.35), transparent 45%), radial-gradient(circle at 80% 60%, rgba(167,139,250,0.35), transparent 40%)',
                          }}
                          transition={{ duration: 0.6 }}
                          whileHover={reduce ? {} : { scale: 1.05 }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-white/10 transition-colors group-hover:text-white/20">
                            {project.title.slice(0, 1)}
                          </span>
                        </div>
                      </>
                    )}
                    {(project.href || project.image) && (
                      <div
                        className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/40 backdrop-blur-md transition-opacity ${
                          project.href ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        <HiOutlineExternalLink className="h-5 w-5 text-cyan-300" aria-hidden />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/80">{project.category}</p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Wrapper>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
