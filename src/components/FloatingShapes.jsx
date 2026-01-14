import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const FloatingShapes = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const shapes = containerRef.current.querySelectorAll('.floating-shape')
    
    shapes.forEach((shape, index) => {
      // Random initial position
      gsap.set(shape, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      })

      // Continuous floating animation
      gsap.to(shape, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        rotation: Math.random() * 360,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5
      })
    })

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) * 0.01
      const moveY = (clientY - window.innerHeight / 2) * 0.01

      shapes.forEach((shape, index) => {
        gsap.to(shape, {
          x: `+=${moveX * (index + 1) * 0.5}`,
          y: `+=${moveY * (index + 1) * 0.5}`,
          duration: 1,
          ease: 'power2.out'
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const shapes = [
    { type: 'circle', color: 'var(--matisse-blue)', size: 'w-32 h-32', opacity: 0.1 },
    { type: 'leaf', color: 'var(--matisse-red)', size: 'w-24 h-40', opacity: 0.08 },
    { type: 'circle', color: 'var(--matisse-yellow)', size: 'w-20 h-20', opacity: 0.12 },
    { type: 'wave', color: 'var(--matisse-green)', size: 'w-40 h-16', opacity: 0.1 },
    { type: 'circle', color: 'var(--matisse-orange)', size: 'w-16 h-16', opacity: 0.15 },
    { type: 'leaf', color: 'var(--matisse-blue)', size: 'w-20 h-32', opacity: 0.08 },
    { type: 'circle', color: 'var(--matisse-red)', size: 'w-24 h-24', opacity: 0.1 },
    { type: 'wave', color: 'var(--matisse-yellow)', size: 'w-32 h-12', opacity: 0.12 },
  ]

  const getShapeStyle = (type) => {
    switch (type) {
      case 'circle':
        return { borderRadius: '50%' }
      case 'leaf':
        return { borderRadius: '50% 0 50% 0' }
      case 'wave':
        return { borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }
      default:
        return {}
    }
  }

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`floating-shape absolute ${shape.size}`}
          style={{
            backgroundColor: shape.color,
            opacity: shape.opacity,
            ...getShapeStyle(shape.type),
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes
