import { useEffect, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Reservation = () => {
  const sectionRef = useRef(null)

  const locations = [
    {
      name: 'Paris 14ème',
      address: '60 avenue du General Leclerc',
      city: '75014 Paris',
      phone: '01 45 42 54 99',
      emoji: '🗼',
      hours: [
        { day: 'Lundi - Jeudi', time: '11h30 - 23h00' },
        { day: 'Vendredi - Samedi', time: '11h30 - 00h00' },
        { day: 'Dimanche', time: '12h00 - 23h00' }
      ]
    },
    {
      name: 'Ivry-sur-Seine',
      address: '10 bis rue Barbès',
      city: '94200 Ivry-sur-Seine',
      phone: '01 45 21 01 37',
      emoji: '🏙️',
      hours: [
        { day: 'Lundi - Jeudi', time: '11h30 - 23h00' },
        { day: 'Vendredi - Samedi', time: '11h30 - 00h00' },
        { day: 'Dimanche', time: '12h00 - 23h00' }
      ]
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.reservation-card',
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.reservation-card',
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
      id="reservation"
      className="relative py-20 md:py-32 bg-gradient-to-b from-[var(--matisse-cream)] to-white overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[var(--matisse-green-light)] rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-[var(--matisse-terra-cotta)] opacity-10 blur-3xl"
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
            Réservation
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--matisse-terra-cotta)] mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Venez découvrir nos restaurants et profitez d'une expérience culinaire unique
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="reservation-card bg-white rounded-3xl shadow-2xl overflow-hidden"
              whileHover={{ y: -10 }}
            >
              {/* Header with gradient */}
              <div className="bg-gradient-to-br from-[var(--matisse-green-bottle)] to-[var(--matisse-green-light)] p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 text-9xl opacity-10">
                  {location.emoji}
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    {location.name}
                  </h3>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-xl mt-1">📍</span>
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
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📞</span>
                    <h4 className="text-xl font-bold text-[var(--matisse-green-bottle)]">
                      Téléphone
                    </h4>
                  </div>
                  <a
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    className="text-lg text-[var(--matisse-terra-cotta)] hover:underline font-semibold ml-11"
                  >
                    {location.phone}
                  </a>
                </div>

                {/* Hours */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🕐</span>
                    <h4 className="text-xl font-bold text-[var(--matisse-green-bottle)]">
                      Horaires
                    </h4>
                  </div>
                  <div className="ml-11 space-y-2">
                    {location.hours.map((hour, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-600">{hour.day}</span>
                        <span className="font-semibold text-[var(--matisse-green-bottle)]">
                          {hour.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <motion.a
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-[var(--matisse-green-bottle)] text-white rounded-full font-semibold text-center hover:bg-[var(--matisse-terra-cotta)] transition-colors"
                  >
                    Appeler maintenant
                  </motion.a>
                  <motion.a
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address + ', ' + location.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 border-2 border-[var(--matisse-green-bottle)] text-[var(--matisse-green-bottle)] rounded-full font-semibold text-center hover:bg-[var(--matisse-green-bottle)] hover:text-white transition-all"
                  >
                    Voir sur la carte
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[var(--matisse-green-bottle)] to-[var(--matisse-green-light)] rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Réservation par téléphone
          </h3>
          <p className="text-lg mb-8 leading-relaxed">
            Pour garantir votre place et profiter de notre cuisine d'exception, 
            n'hésitez pas à nous appeler directement. Notre équipe se fera un plaisir 
            de vous accueillir dans nos restaurants.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <span className="text-3xl mb-2 block">👥</span>
              <p className="font-semibold">Groupes acceptés</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <span className="text-3xl mb-2 block">🎉</span>
              <p className="font-semibold">Événements privés</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <span className="text-3xl mb-2 block">🍽️</span>
              <p className="font-semibold">Sur place & à emporter</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reservation
