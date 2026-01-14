import { useEffect, useRef } from 'react'

const HeroNew = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    // Simple fade in animation
    setTimeout(() => {
      hero.style.opacity = '1'
    }, 100)
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
        backgroundColor: 'var(--vert-bouteille)',
        position: 'relative',
        overflow: 'hidden',
        opacity: 0,
        transition: 'opacity 1s ease'
      }}
    >
      <div style={{
        textAlign: 'center',
        padding: '20px',
        zIndex: 1
      }}>
        <h1 style={{
          fontSize: 'clamp(48px, 10vw, 120px)',
          fontWeight: '700',
          color: 'var(--blanc)',
          marginBottom: '20px',
          letterSpacing: '-2px',
          lineHeight: '1'
        }}>
          MATISSE FOOD
        </h1>
        <p style={{
          fontSize: 'clamp(20px, 3vw, 32px)',
          fontWeight: '300',
          color: 'var(--blanc)',
          marginBottom: '50px',
          opacity: 0.9
        }}>
          Street Food d'Exception
        </p>
        <button
          onClick={scrollToProducts}
          style={{
            padding: '18px 60px',
            fontSize: '18px',
            fontWeight: '500',
            color: 'var(--vert-bouteille)',
            backgroundColor: 'var(--blanc)',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 10px 40px rgba(0,0,0,0.2)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
          }}
        >
          Découvrir
        </button>
      </div>
    </section>
  )
}

export default HeroNew
