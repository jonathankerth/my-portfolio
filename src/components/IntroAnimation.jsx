import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const IntroAnimation = ({ onComplete }) => {
  const containerRef = useRef(null)
  const lettersRef = useRef([])

  useEffect(() => {
    const letters = lettersRef.current.filter(Boolean)
    const container = containerRef.current
    if (!letters.length || !container) return

    const tl = gsap.timeline({
      onComplete,
    })

    // Start invisible
    gsap.set(letters, { opacity: 0, y: 60, rotationX: -90 })

    // Letters flip in with spring-like ease
    tl.to(letters, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.55,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    })

    // Hold moment
    tl.to({}, { duration: 0.75 })

    // Curtain wipe to the right — overlay sweeps away
    tl.to(container, {
      clipPath: 'inset(0 100% 0 0)',
      duration: 0.65,
      ease: 'power3.inOut',
    })

    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      role="status"
      aria-label="Loading portfolio"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0f0f0f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        clipPath: 'inset(0 0% 0 0)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '0.05em',
          perspective: '400px',
        }}
        aria-hidden="true"
      >
        {['J', 'G', 'K'].map((letter, i) => (
          <span
            key={letter}
            ref={(el) => { lettersRef.current[i] = el }}
            style={{
              fontSize: 'clamp(4rem, 12vw, 8rem)',
              fontWeight: 900,
              color: '#f4f1ea',
              display: 'inline-block',
              letterSpacing: '0.05em',
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              lineHeight: 1,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}

export default IntroAnimation
