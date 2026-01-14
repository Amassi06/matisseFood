import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      })

      // Title animation
      tl.fromTo(titleRef.current.children,
        { y: 100, opacity: 0, rotateX: -90 },
        { 
          y: 0, 
          opacity: 1, 
          rotateX: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)'
        }
      )
      // Subtitle animation
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.3'
      )
      // CTA animation
      .fromTo(ctaRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)' },
        '-=0.2'
      )

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--matisse-cream) 0%, #e8dcc4 100%)' }}
    >
      {/* Parallax background shapes */}
      <div 
        ref={imageRef}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-[var(--matisse-green-light)] rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-96 h-96 bg-[var(--matisse-terra-cotta)] opacity-15 blur-3xl"
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-[var(--matisse-green-bottle)] opacity-10 blur-2xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Decorative Matisse-style cutouts */}
      <div className="absolute top-10 left-10 w-32 h-48 bg-[var(--matisse-green-light)] opacity-30 rounded-full transform -rotate-12" />
      <div className="absolute bottom-20 right-32 w-48 h-32 bg-[var(--matisse-terra-cotta)] opacity-25" 
           style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="block overflow-hidden">
              <span className="inline-block text-[var(--matisse-green-bottle)]">L'Art de la</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block text-[var(--matisse-terra-cotta)]">Street Food</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-[var(--matisse-green-bottle)] mb-12 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Une expérience culinaire colorée et créative, inspirée par l'artiste Henri Matisse
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#produits"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-[var(--matisse-green-bottle)] text-white rounded-full font-semibold text-lg shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Découvrir nos produits</span>
              <motion.div
                className="absolute inset-0 bg-[var(--matisse-terra-cotta)]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Découvrir nos produits</span>
            </motion.a>

            <motion.a
              href="#reservation"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-3 border-[var(--matisse-green-bottle)] text-[var(--matisse-green-bottle)] rounded-full font-semibold text-lg hover:bg-[var(--matisse-green-bottle)] hover:text-white transition-all duration-300"
            >
              Réserver une table
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-[var(--matisse-green-bottle)] rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[var(--matisse-green-bottle)] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
