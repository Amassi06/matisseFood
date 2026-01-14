import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

const Loader = () => {
  const loaderRef = useRef(null)
  const textRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Animate letters
    tl.fromTo('.loader-letter', 
      { y: 100, opacity: 0, rotateX: -90 },
      { 
        y: 0, 
        opacity: 1, 
        rotateX: 0,
        duration: 0.8, 
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }
    )
    .to(progressRef.current, {
      width: '100%',
      duration: 1.5,
      ease: 'power2.inOut'
    }, '-=0.5')
    .to(loaderRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut'
    }, '+=0.2')

    return () => tl.kill()
  }, [])

  const letters = 'MATISSE'.split('')

  return (
    <div ref={loaderRef} className="loader">
      <div className="flex flex-col items-center">
        {/* Animated Matisse shapes */}
        <div className="relative mb-8">
          <motion.div
            className="absolute -top-20 -left-20 w-16 h-16 bg-[var(--matisse-blue)] rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -top-10 -right-16 w-12 h-20 bg-[var(--matisse-red)]"
            style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
            animate={{ 
              rotate: [0, 15, -15, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-20 h-8 bg-[var(--matisse-yellow)]"
            style={{ borderRadius: '50%' }}
            animate={{ 
              scaleX: [1, 1.3, 1],
              scaleY: [1, 0.7, 1]
            }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>

        {/* Logo text */}
        <div ref={textRef} className="flex overflow-hidden">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="loader-letter text-6xl md:text-8xl font-bold"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: index % 2 === 0 ? 'var(--matisse-blue)' : 'var(--matisse-red)'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p 
          className="text-xl mt-4 text-[var(--matisse-dark)] tracking-[0.3em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          FOOD
        </motion.p>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-gray-200 mt-8 rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-to-r from-[var(--matisse-blue)] via-[var(--matisse-red)] to-[var(--matisse-yellow)]"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Loader
