import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Section = ({ children, id, className = '', variant = 'default' }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const variants = {
    default: {
      container: 'min-h-screen flex flex-col justify-center items-center px-4 py-16',
      wrapper: 'w-full max-w-6xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20',
    },
    hero: {
      container: 'min-h-screen flex flex-col justify-center items-center px-4 py-16',
      wrapper: 'w-full max-w-4xl text-center space-y-8',
    },
    fullWidth: {
      container: 'min-h-screen flex flex-col justify-center items-center px-4 py-16',
      wrapper: 'w-full max-w-7xl',
    },
    compact: {
      container: 'min-h-[80vh] flex flex-col justify-center items-center px-4 py-12',
      wrapper: 'w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20',
    }
  }

  const currentVariant = variants[variant]

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${currentVariant.container} ${className}`}
    >
      <div className={currentVariant.wrapper}>
        {children}
      </div>
    </motion.section>
  )
}

export default Section
