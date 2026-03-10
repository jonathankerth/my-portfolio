import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.3 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.3 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const moveCursor = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleEnter = () => setIsHovering(true)
    const handleLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor, { passive: true })

    const addListeners = () => {
      document
        .querySelectorAll('a, button, [role="button"], input, label, select, textarea')
        .forEach((el) => {
          el.addEventListener('mouseenter', handleEnter)
          el.addEventListener('mouseleave', handleLeave)
        })
    }

    addListeners()
    const timer = setTimeout(addListeners, 1000)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      clearTimeout(timer)
      document
        .querySelectorAll('a, button, [role="button"], input, label, select, textarea')
        .forEach((el) => {
          el.removeEventListener('mouseenter', handleEnter)
          el.removeEventListener('mouseleave', handleLeave)
        })
    }
  }, [mouseX, mouseY, isVisible])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        translateX: springX,
        translateY: springY,
        x: '-50%',
        y: '-50%',
        pointerEvents: 'none',
        zIndex: 9998,
        willChange: 'transform',
      }}
      animate={{
        width: isHovering ? 200 : 150,
        height: isHovering ? 200 : 150,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        width: { duration: 0.3 },
        height: { duration: 0.3 },
        opacity: { duration: 0.4 },
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: isHovering
            ? 'radial-gradient(circle, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.015) 40%, transparent 70%)',
          transition: 'background 0.3s ease',
        }}
      />
    </motion.div>
  )
}

export default CustomCursor
