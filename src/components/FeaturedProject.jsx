import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

// Single flagship product showcase. Unlike ProjectCard (the small rail card),
// this is a wide two-column hero: a screenshot of the live site on one side,
// role + stack + highlights on the other. We use a static screenshot rather
// than an iframe because toffeelinks.app correctly sends X-Frame-Options:
// DENY + CSP frame-ancestors 'none' (anti-clickjacking), so it can't be
// embedded. The image links out to the live product.
const FeaturedProject = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white/85 dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/10"
      style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.06)' }}
    >
      {/* Screenshot of the live site, linking out to it */}
      <a
        href={project.link2}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open the live ${project.title} site`}
        className="group/preview relative min-h-[260px] md:min-h-full w-full overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] order-1 md:order-none"
      >
        {project.image && (
          <Image
            src={project.image}
            alt={`Screenshot of the live ${project.title} site`}
            fill
            className="object-cover object-left-top transition-transform duration-500 group-hover/preview:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        )}
        <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/preview:opacity-100">
          Open live site
          <FaArrowRight className="text-[9px]" aria-hidden="true" />
        </span>
      </a>

      {/* Details */}
      <div className="relative z-10 p-7 md:p-9 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live in production
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white tracking-tight">
          {project.title}
        </h3>
        {project.role && (
          <p className="mt-1 text-sm font-semibold text-black/70 dark:text-white/70">
            {project.role}
          </p>
        )}

        <p className="mt-4 text-[13.5px] text-black/60 dark:text-white/60 leading-relaxed">
          {project.description}
        </p>

        {project.highlights?.length > 0 && (
          <ul className="mt-5 space-y-2">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[13px] text-black/70 dark:text-white/70"
              >
                <svg className="mt-0.5 w-4 h-4 flex-shrink-0 text-black/40 dark:text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {project.stack?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-black/[0.05] dark:bg-white/[0.08] px-3 py-1 text-[11px] font-medium tracking-wide text-black/70 dark:text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-3">
          {project.link2 && (
            <a
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="group inline-flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black font-semibold py-2.5 px-5 rounded-full text-sm tracking-wide hover:bg-black/85 dark:hover:bg-white/90 transition-colors"
            >
              <span>Visit {project.title}</span>
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title}`}
              className="inline-flex items-center bg-black/[0.06] text-black dark:bg-white/10 dark:text-white font-medium py-2.5 px-5 rounded-full text-sm tracking-wide hover:bg-black/[0.1] dark:hover:bg-white/15 transition-colors"
            >
              View source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default FeaturedProject
