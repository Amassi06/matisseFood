import { useState, useEffect } from 'react'

const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
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
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'var(--blanc)',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
          transition: 'all 0.3s ease',
          padding: '20px 0'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            style={{
              fontSize: '28px',
              fontWeight: '700',
              color: 'var(--vert-bouteille)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '-0.5px'
            }}
          >
            MATISSE
          </button>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            gap: '40px',
            alignItems: 'center'
          }}
          className="desktop-nav">
            {[
              { label: 'Accueil', id: 'hero' },
              { label: 'Nos Produits', id: 'produits' },
              { label: 'Commander', id: 'commander' },
              { label: 'Contact', id: 'restaurants' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  color: 'var(--vert-bouteille)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.6'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                {item.label}
              </button>
            ))}
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
              backgroundColor: 'var(--vert-bouteille)',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(45deg) translateY(7px)' : 'none'
            }} />
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--vert-bouteille)',
              transition: 'all 0.3s ease',
              opacity: isOpen ? 0 : 1
            }} />
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--vert-bouteille)',
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
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px'
        }}>
          {[
            { label: 'Accueil', id: 'hero' },
            { label: 'Nos Produits', id: 'produits' },
            { label: 'Commander', id: 'commander' },
            { label: 'Contact', id: 'restaurants' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                fontSize: '32px',
                fontWeight: '700',
                color: 'var(--vert-bouteille)',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {item.label}
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
