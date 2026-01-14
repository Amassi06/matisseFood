import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  const cursorDotRef = useRef(null)
  const cursorOutlineRef = useRef(null)

  useEffect(() => {
    const cursorDot = cursorDotRef.current
    const cursorOutline = cursorOutlineRef.current

    const moveCursor = (e) => {
      gsap.to(cursorDot, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.1,
        ease: 'power2.out'
      })
      
      gsap.to(cursorOutline, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseEnter = () => {
      gsap.to(cursorOutline, {
        scale: 1.5,
        duration: 0.3
      })
    }

    const handleMouseLeave = () => {
      gsap.to(cursorOutline, {
        scale: 1,
        duration: 0.3
      })
    }

    window.addEventListener('mousemove', moveCursor)

    const interactiveElements = document.querySelectorAll('a, button, .interactive')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot hidden lg:block" />
      <div ref={cursorOutlineRef} className="cursor-outline hidden lg:block" />
    </>
  )
}

export default CustomCursor
