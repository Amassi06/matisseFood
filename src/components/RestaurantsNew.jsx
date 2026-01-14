import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const RestaurantsNew = () => {
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

      // Animate cards - slide in from sides
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          x: index === 0 ? -60 : 60,
          duration: 0.8,
          ease: 'power2.out'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const restaurants = [
    {
      name: 'Paris 14ème',
      address: '60 avenue du General Leclerc',
      city: '75014 Paris',
      phone: '01 45 42 54 99'
    },
    {
      name: 'Ivry-sur-Seine',
      address: '10 bis rue Barbès',
      city: '94200 Ivry-sur-Seine',
      phone: '01 45 21 01 37'
    }
  ]

  return (
    <section
      id="restaurants"
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
          <span style={{ color: 'var(--text-muted)', marginRight: '15px' }}>03.</span>
          Nos Restaurants
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginTop: '60px',
          maxWidth: '900px',
          margin: '60px auto 0'
        }}>
          {restaurants.map((restaurant, index) => (
            <div
              key={restaurant.name}
              ref={el => cardsRef.current[index] = el}
              className="glass"
              style={{
                padding: '50px 40px',
                borderRadius: '16px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(74, 222, 128, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '30px',
                color: 'var(--vert-accent)',
                letterSpacing: '0.5px'
              }}>
                {restaurant.name}
              </h3>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                marginBottom: '12px'
              }}>
                <span style={{ fontSize: '20px' }}>📍</span>
                <div>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    color: 'var(--text-gray)',
                    marginBottom: '4px'
                  }}>
                    {restaurant.address}
                  </p>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    color: 'var(--text-gray)'
                  }}>
                    {restaurant.city}
                  </p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '24px'
              }}>
                <span style={{ fontSize: '20px' }}>📞</span>
                <p style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--text-white)',
                  letterSpacing: '0.5px'
                }}>
                  {restaurant.phone}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div 
          style={{
            marginTop: '80px',
            textAlign: 'center',
            padding: '60px 40px',
            borderTop: '1px solid var(--border-glass)'
          }}
        >
          <h3 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '700',
            color: 'var(--text-white)',
            marginBottom: '30px',
            letterSpacing: '0.5px'
          }}>
            <span style={{ color: 'var(--text-muted)', marginRight: '15px' }}>04.</span>
            Contact
          </h3>
          <a 
            href="mailto:matisse.contact@gmail.com"
            style={{
              fontSize: '20px',
              color: 'var(--vert-accent)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'var(--vert-glow)'
              e.target.style.textDecoration = 'underline'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'var(--vert-accent)'
              e.target.style.textDecoration = 'none'
            }}
          >
            matisse.contact@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default RestaurantsNew
