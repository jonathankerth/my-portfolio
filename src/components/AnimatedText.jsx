import { motion } from 'framer-motion'

const AnimatedText = ({ text, className = '' }) => {
  const words = text.split(' ')

  const container = {
    hidden: {},
    visible: (i = 1) => ({
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
      aria-hidden="true"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText
