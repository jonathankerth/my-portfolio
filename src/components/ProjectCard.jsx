import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-white/40"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image container with enhanced styling */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {project.iframe && (
          <iframe
            src={project.iframe}
            title={project.title}
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
        )}
        
        {/* Floating badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium text-white border border-white/30">
            Featured
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="relative z-10 p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-6 flex-grow leading-relaxed text-sm opacity-90">
          {project.description}
        </p>
        
        {/* Enhanced button styling */}
        <div className="flex gap-3 mt-auto">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center text-sm shadow-lg hover:shadow-blue-500/25 border border-blue-400/20"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              Code
            </span>
          </motion.a>
          {project.link2 && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center text-sm shadow-lg hover:shadow-emerald-500/25 border border-emerald-400/20"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
