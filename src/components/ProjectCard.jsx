import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useState, useRef } from 'react'

const ProjectCard = ({ project, index }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const cardRef = useRef(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const boxShadow = useTransform(
    [springRotateX, springRotateY],
    ([rx, ry]) =>
      `${-ry * 2}px ${rx * 2}px 30px rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.08)`
  )

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const offsetX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const offsetY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    rotateY.set(offsetX * 8)
    rotateX.set(-offsetY * 8)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1000,
        boxShadow,
        willChange: 'transform',
      }}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-colors duration-500 bg-white/70 backdrop-blur-sm border border-black/10 hover:border-black/20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

      {/* Image container with enhanced styling */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" aria-hidden="true" />
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {project.iframe && !iframeLoaded && (
          <button
            onClick={() => setIframeLoaded(true)}
            className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-colors duration-300 cursor-pointer"
            aria-label={`Load interactive preview of ${project.title}`}
          >
            <svg className="w-12 h-12 mb-3 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-black/50">Click to load preview</span>
          </button>
        )}
        {project.iframe && iframeLoaded && (
          <iframe
            src={project.iframe}
            title={`Preview of ${project.title}`}
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            tabIndex={-1}
            sandbox="allow-scripts allow-same-origin"
          />
        )}

        {/* Floating badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-black border border-black/10">
            Featured
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="relative z-10 p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-black group-hover:text-black/70 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-black/70 mb-6 flex-grow leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Enhanced button styling */}
        <div className="flex gap-3 mt-auto">
          {(project.link || project.link3) && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.link || project.link3}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title} on GitHub`}
            className="flex-1 bg-black text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center text-sm shadow-lg hover:bg-black/90 border border-black/10"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              Code
            </span>
          </motion.a>
          )}
          {project.link2 && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="flex-1 bg-white text-black font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center text-sm shadow-lg hover:bg-white/90 border border-black/10"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live
              </span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
