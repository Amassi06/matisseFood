import { useState, useEffect } from 'react'
import gsap from 'gsap'

const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    
    // Animate navbar on load
    gsap.from('nav', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(10, 26, 20, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(74, 222, 128, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          padding: '20px 0'
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            style={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'var(--vert-accent)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '1px'
            }}
          >
            MATISSE
          </button>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            gap: '50px',
            alignItems: 'center'
          }}
          className="desktop-nav">
            {[
              { num: '01', label: 'Accueil', id: 'hero' },
              { num: '02', label: 'Produits', id: 'produits' },
              { num: '03', label: 'Commander', id: 'commander' },
              { num: '04', label: 'Contact', id: 'restaurants' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'var(--text-gray)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--vert-accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-gray)'}
              >
                {item.num}. {item.label}
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('restaurants')}
              style={{
                padding: '12px 28px',
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--vert-accent)',
                backgroundColor: 'transparent',
                border: '1px solid var(--vert-accent)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--vert-accent)'
                e.target.style.color = 'var(--bg-dark)'
                e.target.style.boxShadow = '0 0 20px rgba(74, 222, 128, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
                e.target.style.color = 'var(--vert-accent)'
                e.target.style.boxShadow = 'none'
              }}
            >
              Me Contacter
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '5px'
            }}
            className="mobile-menu-btn"
          >
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--vert-accent)',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(45deg) translateY(7px)' : 'none'
            }} />
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--vert-accent)',
              transition: 'all 0.3s ease',
              opacity: isOpen ? 0 : 1
            }} />
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--vert-accent)',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '68px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(10, 26, 20, 0.98)',
          backdropFilter: 'blur(10px)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px'
        }}>
          {[
            { num: '01', label: 'Accueil', id: 'hero' },
            { num: '02', label: 'Produits', id: 'produits' },
            { num: '03', label: 'Commander', id: 'commander' },
            { num: '04', label: 'Contact', id: 'restaurants' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                fontSize: '28px',
                fontWeight: '600',
                color: 'var(--text-white)',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {item.num}. {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}

export default NavbarNew
