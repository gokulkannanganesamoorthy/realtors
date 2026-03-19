import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleHover = (e) => {
      const target = e.target.closest('a, button, input, select, textarea, [role="button"]')
      setIsHovered(!!target)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleHover)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleHover)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-brand-primary rounded-full z-[9999] pointer-events-none mix-blend-difference hidden lg:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovered ? 4 : 1,
        opacity: 0.8
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    />
  )
}
