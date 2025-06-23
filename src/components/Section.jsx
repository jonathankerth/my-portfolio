import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Section = ({ children, id, className = '' }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen flex flex-col justify-center items-center px-4 py-16 ${className}`}
    >
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8">
        {children}
      </div>
    </motion.section>
  )
}

export default Section
