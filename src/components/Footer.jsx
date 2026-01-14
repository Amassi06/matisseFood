import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="relative bg-[var(--matisse-dark)] text-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--matisse-blue)] via-[var(--matisse-red)] to-[var(--matisse-yellow)]" />
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-[var(--matisse-blue)] rounded-full opacity-10" />
      <div className="absolute bottom-10 -left-10 w-40 h-40 bg-[var(--matisse-red)] rounded-full opacity-10" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="footer-content md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-[var(--matisse-blue)] rounded-full" />
                  <div className="absolute top-0.5 left-0.5 w-7 h-7 bg-[var(--matisse-red)] rounded-full" />
                  <div className="absolute top-1 left-1 w-6 h-6 bg-[var(--matisse-yellow)] rounded-full" />
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Matisse Food
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              L'art de la Street Food inspiré par Henri Matisse. Une expérience culinaire colorée et créative.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-content">
            <h4 className="text-lg font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Accueil', 'Nos Produits', 'Réserver', 'Livraison', 'Franchise', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item === 'Accueil' ? '' : item.toLowerCase().replace(' ', '-').replace('nos-', '')}`}
                    className="text-gray-400 hover:text-[var(--matisse-yellow)] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Restaurants */}
          <div className="footer-content">
            <h4 className="text-lg font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nos Restaurants
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-[var(--matisse-yellow)] font-medium text-sm">Paris 14ème</p>
                <p className="text-gray-400 text-sm">60 avenue du Général Leclerc</p>
                <p className="text-gray-400 text-sm">75014 Paris</p>
                <p className="text-gray-400 text-sm">01 45 42 54 99</p>
              </div>
              <div>
                <p className="text-[var(--matisse-yellow)] font-medium text-sm">Ivry-sur-Seine</p>
                <p className="text-gray-400 text-sm">10 bis rue Barbès</p>
                <p className="text-gray-400 text-sm">94200 Ivry-sur-Seine</p>
                <p className="text-gray-400 text-sm">01 45 21 01 37</p>
              </div>
            </div>
          </div>

          {/* Social & Hours */}
          <div className="footer-content">
            <h4 className="text-lg font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Suivez-nous
            </h4>
            <div className="flex gap-4 mb-8">
              {['facebook', 'instagram', 'tiktok'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--matisse-red)] transition-colors"
                >
                  <span className="text-sm capitalize">{social.charAt(0).toUpperCase()}</span>
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              <span className="text-[var(--matisse-yellow)]">Email:</span><br />
              matisse.contact@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-content border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Matisse Food. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm">
            Inspiré par l'art de <span className="text-[var(--matisse-yellow)]">Henri Matisse</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
