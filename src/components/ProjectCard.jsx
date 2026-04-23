import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const ProjectCard = ({ project, index }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  return (
    <motion.article
      data-project-card
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="projects-rail-card group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white/85 border border-black/[0.08]"
      style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)' }}
    >
      <div className="relative h-52 w-full overflow-hidden bg-black/[0.03]">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 380px"
          />
        )}
        {project.iframe && !iframeLoaded && (
          <button
            onClick={() => setIframeLoaded(true)}
            className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black/[0.02] to-black/[0.06] hover:from-black/[0.04] hover:to-black/[0.08] transition-colors duration-300"
            aria-label={`Load interactive preview of ${project.title}`}
          >
            <svg className="w-10 h-10 mb-2 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-medium text-black/40 tracking-wide">Load preview</span>
          </button>
        )}
        {project.iframe && iframeLoaded && (
          <iframe
            src={project.iframe}
            title={`Preview of ${project.title}`}
            className="w-full h-full"
            loading="lazy"
            tabIndex={-1}
            sandbox="allow-scripts allow-same-origin"
          />
        )}
      </div>

      <div className="relative z-10 p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2 text-black tracking-tight">
          {project.title}
        </h3>
        <p className="text-black/60 mb-6 flex-grow leading-relaxed text-[13px]">
          {project.description}
        </p>

        <div className="flex gap-2 mt-auto">
          {(project.link || project.link3) && (
            <a
              href={project.link || project.link3}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title} on GitHub`}
              className="flex-1 bg-black text-white font-medium py-2.5 px-4 rounded-full text-center text-xs tracking-wide hover:bg-black/80 transition-colors"
            >
              Code
            </a>
          )}
          {project.link2 && (
            <a
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="flex-1 bg-black/[0.06] text-black font-medium py-2.5 px-4 rounded-full text-center text-xs tracking-wide hover:bg-black/[0.1] transition-colors"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
