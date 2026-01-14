import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const HeroNew = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title - letter by letter effect
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
      })

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.8
      })

      // Animate button
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        delay: 1.2
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToProducts = () => {
    const element = document.getElementById('produits')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-dark)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        textAlign: 'center',
        padding: '20px',
        zIndex: 1,
        maxWidth: '1000px'
      }}>
        <h1 
          ref={titleRef}
          style={{
            fontSize: 'var(--text-hero)',
            fontWeight: '800',
            color: 'var(--text-white)',
            marginBottom: '30px',
            letterSpacing: '-3px',
            lineHeight: '1.1'
          }}
        >
          MATISSE FOOD
        </h1>
        <p 
          ref={subtitleRef}
          style={{
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            fontWeight: '300',
            color: 'var(--text-gray)',
            marginBottom: '60px',
            letterSpacing: '1px'
          }}
        >
          Street Food d'Exception
        </p>
        <button
          ref={buttonRef}
          onClick={scrollToProducts}
          style={{
            padding: '18px 50px',
            fontSize: '16px',
            fontWeight: '500',
            color: 'var(--vert-accent)',
            backgroundColor: 'transparent',
            border: '2px solid var(--vert-accent)',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--vert-accent)'
            e.target.style.color = 'var(--bg-dark)'
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 0 30px rgba(74, 222, 128, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'
            e.target.style.color = 'var(--vert-accent)'
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
          }}
        >
          Découvrir le menu
        </button>
      </div>

      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(74, 222, 128, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
    </section>
  )
}

export default HeroNew
