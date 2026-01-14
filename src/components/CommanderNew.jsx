import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CommanderNew = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        ease: 'power2.out'
      })

      // Animate cards
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const deliveryOptions = [
    {
      name: 'Uber Eats',
      icon: '🚗',
      url: '#'
    },
    {
      name: 'Deliveroo',
      icon: '🛵',
      url: '#'
    },
    {
      name: 'Click & Collect',
      icon: '🏪',
      url: 'https://matisse-food.marketplace.dood.com/fr'
    }
  ]

  return (
    <section
      id="commander"
      ref={sectionRef}
      style={{
        padding: '120px 20px',
        backgroundColor: 'var(--bg-dark)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 
          ref={titleRef}
          style={{
            fontSize: 'var(--text-section)',
            fontWeight: '700',
            color: 'var(--text-white)',
            marginBottom: '20px',
            letterSpacing: '1px'
          }}
        >
          <span style={{ color: 'var(--text-muted)', marginRight: '15px' }}>02.</span>
          Commander
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginTop: '60px',
          maxWidth: '1000px',
          margin: '60px auto 0'
        }}>
          {deliveryOptions.map((option, index) => (
            <a
              key={option.name}
              ref={el => cardsRef.current[index] = el}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glow-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px 40px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                borderRadius: '16px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                const text = e.currentTarget.querySelector('span')
                if (text) text.style.color = 'var(--vert-accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                const text = e.currentTarget.querySelector('span')
                if (text) text.style.color = 'var(--text-white)'
              }}
            >
              <div style={{
                fontSize: '64px',
                marginBottom: '24px',
                filter: 'grayscale(0.3)'
              }}>
                {option.icon}
              </div>
              <span style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--text-white)',
                transition: 'color 0.3s ease',
                letterSpacing: '0.5px'
              }}>
                {option.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommanderNew
