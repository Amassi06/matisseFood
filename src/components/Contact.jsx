import { useEffect, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)

  const locations = [
    {
      name: 'Paris 14ème',
      address: '60 avenue du General Leclerc',
      city: '75014 Paris',
      phone: '01 45 42 54 99',
      email: 'matisse.contact@gmail.com',
      emoji: '🗼',
      mapLink: 'https://maps.google.com/?q=60+avenue+du+General+Leclerc+75014+Paris'
    },
    {
      name: 'Ivry-sur-Seine',
      address: '10 bis rue Barbès',
      city: '94200 Ivry-sur-Seine',
      phone: '01 45 21 01 37',
      email: 'matisse.contact@gmail.com',
      emoji: '🏙️',
      mapLink: 'https://maps.google.com/?q=10+bis+rue+Barbès+94200+Ivry-sur-Seine'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-card',
        { x: -100, opacity: 0, rotateY: -30 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.contact-card',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 md:py-32 bg-[var(--matisse-cream)] overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--matisse-green-light)] rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-[var(--matisse-terra-cotta)] opacity-10 blur-3xl"
           style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'backOut' }}
            className="text-4xl md:text-6xl font-bold text-[var(--matisse-green-bottle)] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contact
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--matisse-terra-cotta)] mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question, une réservation ou une suggestion ? Contactez-nous !
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="contact-card bg-white rounded-3xl shadow-2xl overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-[var(--matisse-green-bottle)] to-[var(--matisse-green-light)] p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 text-9xl opacity-10">
                  {location.emoji}
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    {location.name}
                  </h3>
                  <div className="flex items-start gap-2">
                    <span className="text-2xl mt-1">📍</span>
                    <div>
                      <p className="text-lg">{location.address}</p>
                      <p className="text-lg">{location.city}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Phone */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--matisse-green-bottle)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--matisse-green-bottle)] mb-1">Téléphone</h4>
                    <a
                      href={`tel:${location.phone.replace(/\s/g, '')}`}
                      className="text-[var(--matisse-terra-cotta)] hover:underline font-semibold"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--matisse-terra-cotta)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--matisse-green-bottle)] mb-1">Email</h4>
                    <a
                      href={`mailto:${location.email}`}
                      className="text-[var(--matisse-terra-cotta)] hover:underline break-all"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--matisse-green-light)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--matisse-green-bottle)] mb-2">Horaires</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Lun - Jeu : 11h30 - 23h00</p>
                      <p>Ven - Sam : 11h30 - 00h00</p>
                      <p>Dimanche : 12h00 - 23h00</p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <motion.a
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-[var(--matisse-green-bottle)] text-white rounded-full font-semibold text-center hover:bg-[var(--matisse-terra-cotta)] transition-colors"
                  >
                    Appeler
                  </motion.a>
                  <motion.a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 border-2 border-[var(--matisse-green-bottle)] text-[var(--matisse-green-bottle)] rounded-full font-semibold text-center hover:bg-[var(--matisse-green-bottle)] hover:text-white transition-all"
                  >
                    Itinéraire
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media & Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[var(--matisse-green-bottle)] to-[var(--matisse-green-light)] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Suivez-nous sur les réseaux sociaux
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <motion.a
                href="#"
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all"
              >
                <span className="text-5xl mb-3 block">📘</span>
                <h4 className="font-bold text-xl mb-2">Facebook</h4>
                <p className="text-white/80 text-sm">@MatisseFood</p>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all"
              >
                <span className="text-5xl mb-3 block">📸</span>
                <h4 className="font-bold text-xl mb-2">Instagram</h4>
                <p className="text-white/80 text-sm">@MatisseFood</p>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all"
              >
                <span className="text-5xl mb-3 block">🎵</span>
                <h4 className="font-bold text-xl mb-2">TikTok</h4>
                <p className="text-white/80 text-sm">@MatisseFood</p>
              </motion.a>
            </div>

            <div className="text-center">
              <p className="text-lg text-white/90 leading-relaxed">
                Découvrez nos dernières créations culinaires, nos offres spéciales 
                et l'ambiance de nos restaurants sur nos réseaux sociaux !
              </p>
            </div>
          </div>
        </motion.div>

        {/* General Email */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-6 inline-block shadow-lg">
            <p className="text-gray-600 mb-2">Pour toute question générale :</p>
            <a
              href="mailto:matisse.contact@gmail.com"
              className="text-2xl font-bold text-[var(--matisse-terra-cotta)] hover:underline"
            >
              matisse.contact@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
