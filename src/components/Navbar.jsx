import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/produits', label: 'Nos Produits' },
    { path: '/reservation', label: 'Réserver' },
    { path: '/livraison', label: 'Livraison' },
    { path: '/franchise', label: 'Franchise' },
    { path: '/contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.mobile-nav-item',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power3.out' }
      )
    }
  }, [isOpen])

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[var(--matisse-cream)]/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-[var(--matisse-blue)] rounded-full" />
                <div className="absolute top-1 left-1 w-8 h-8 bg-[var(--matisse-red)] rounded-full" />
                <div className="absolute top-2 left-2 w-6 h-6 bg-[var(--matisse-yellow)] rounded-full" />
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="text-[var(--matisse-blue)]">Matisse</span>
                <span className="text-[var(--matisse-red)]"> Food</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <span className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === item.path 
                    ? 'text-[var(--matisse-red)]' 
                    : 'text-[var(--matisse-dark)] hover:text-[var(--matisse-blue)]'
                }`}>
                  {item.label}
                </span>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--matisse-red)] transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[var(--matisse-dark)] rounded-full transition-colors group-hover:bg-[var(--matisse-red)]"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              className="w-6 h-0.5 bg-[var(--matisse-dark)] rounded-full transition-colors group-hover:bg-[var(--matisse-red)]"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[var(--matisse-dark)] rounded-full transition-colors group-hover:bg-[var(--matisse-red)]"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[var(--matisse-cream)]">
              {/* Decorative shapes */}
              <div className="absolute top-20 right-10 w-32 h-32 bg-[var(--matisse-blue)] rounded-full opacity-20" />
              <div className="absolute bottom-40 left-10 w-24 h-40 bg-[var(--matisse-red)] opacity-20" 
                   style={{ borderRadius: '50% 0 50% 0' }} />
              <div className="absolute bottom-20 right-20 w-20 h-20 bg-[var(--matisse-yellow)] rounded-full opacity-30" />

              <div className="flex flex-col justify-center items-center h-full gap-8 pt-20">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="mobile-nav-item"
                  >
                    <motion.span
                      whileHover={{ scale: 1.1, x: 10 }}
                      className={`text-3xl font-bold transition-colors ${
                        location.pathname === item.path 
                          ? 'text-[var(--matisse-red)]' 
                          : 'text-[var(--matisse-dark)]'
                      }`}
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
