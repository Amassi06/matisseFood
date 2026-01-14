import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ProduitsNew = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
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

      // Animate cards with stagger
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const products = [
    {
      id: 1,
      name: 'Tenders, Frites, Desserts & Boissons',
      image: '/images/menu1.jpg'
    },
    {
      id: 2,
      name: 'Les Tacos',
      image: '/images/menu2.jpg'
    },
    {
      id: 3,
      name: 'Les Smashs',
      image: '/images/menu3.jpg'
    },
    {
      id: 4,
      name: 'Menu Complet',
      image: '/images/menu4.jpg'
    }
  ]

  return (
    <section
      id="produits"
      ref={sectionRef}
      style={{
        padding: '120px 20px',
        backgroundColor: 'var(--bg-dark)'
      }}
    >
      <div style={{
        maxWidth: '1400px',
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
          <span style={{ color: 'var(--text-muted)', marginRight: '15px' }}>01.</span>
          Nos Produits
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '60px'
        }}>
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={el => cardsRef.current[index] = el}
              className="glass glow-hover"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.style.height = '400px'
                  e.target.style.backgroundColor = 'var(--bg-card)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProduitsNew
