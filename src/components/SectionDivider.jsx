import { motion } from 'framer-motion'

const SectionDivider = ({ variant = 'wave' }) => {
  const variants = {
    wave: (
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-24 fill-current text-black/5"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    ),
    geometric: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-black/5 rounded-full blur-xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full blur-xl"></div>
      </div>
    ),
    minimal: (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-32 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>
    ),
  }

  return (
    <div className="relative h-32 w-full flex items-center justify-center">
      {variants[variant]}
    </div>
  )
}

export default SectionDivider
