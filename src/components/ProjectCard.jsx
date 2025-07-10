import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl bg-[#2D3748] text-[#F0F4F8]">
      <div className="relative h-64 w-full">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="rounded-t-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {project.iframe && (
          <iframe
            src={project.iframe}
            title={project.title}
            className="w-full h-full rounded-t-lg"
          />
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex justify-center gap-3">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            GitHub
          </motion.a>
          {project.link2 && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            >
              Live Site
            </motion.a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
