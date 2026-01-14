import { useEffect, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Livraison = () => {
  const sectionRef = useRef(null)

  const deliveryOptions = [
    {
      name: 'Uber Eats',
      description: 'Commandez via Uber Eats et recevez vos plats préférés rapidement',
      emoji: '🚗',
      color: 'from-green-600 to-green-400',
      link: 'https://www.ubereats.com',
      available: 'Paris 14ème & Ivry-sur-Seine'
    },
    {
      name: 'Deliveroo',
      description: 'Profitez de la livraison Deliveroo pour savourer Matisse Food chez vous',
      emoji: '🛵',
      color: 'from-cyan-600 to-cyan-400',
      link: 'https://www.deliveroo.fr',
      available: 'Paris 14ème & Ivry-sur-Seine'
    },
    {
      name: 'Click & Collect',
      description: 'Commandez en ligne et venez récupérer votre commande au restaurant',
      emoji: '🎯',
      color: 'from-[var(--matisse-terra-cotta)] to-[var(--matisse-green-light)]',
      link: 'https://matisse-food.marketplace.dood.com/fr',
      available: 'Paris 14ème uniquement'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.delivery-card',
        { y: 100, opacity: 0, rotateY: -20 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.delivery-card',
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
      id="livraison"
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-[var(--matisse-green-light)] rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-[var(--matisse-terra-cotta)] opacity-10 blur-3xl"
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
            Livraison
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--matisse-terra-cotta)] mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Commandez Matisse Food depuis chez vous et profitez de nos plats où que vous soyez
          </p>
        </div>

        {/* Delivery Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {deliveryOptions.map((option, index) => (
            <motion.div
              key={index}
              className="delivery-card group"
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full border-2 border-transparent group-hover:border-[var(--matisse-green-light)] transition-all">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${option.color} p-8 text-white relative overflow-hidden`}>
                  <motion.div
                    className="absolute -top-10 -right-10 text-[10rem] opacity-20"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {option.emoji}
                  </motion.div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{option.emoji}</div>
                    <h3 className="text-3xl font-bold"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      {option.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {option.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-6 text-sm text-[var(--matisse-green-bottle)]">
                    <span className="text-lg">📍</span>
                    <span className="font-semibold">{option.available}</span>
                  </div>

                  <motion.a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full py-3 bg-[var(--matisse-green-bottle)] text-white rounded-full font-semibold text-center hover:bg-[var(--matisse-terra-cotta)] transition-colors"
                  >
                    Commander maintenant
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[var(--matisse-cream)] to-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-center text-[var(--matisse-green-bottle)] mb-12"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Pourquoi commander chez nous ?
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[var(--matisse-green-bottle)] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">⚡</span>
                </div>
                <h4 className="font-bold text-lg text-[var(--matisse-green-bottle)] mb-2">
                  Livraison Rapide
                </h4>
                <p className="text-gray-600 text-sm">
                  Vos plats arrivent chauds et frais
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[var(--matisse-terra-cotta)] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
                <h4 className="font-bold text-lg text-[var(--matisse-green-bottle)] mb-2">
                  Qualité Garantie
                </h4>
                <p className="text-gray-600 text-sm">
                  Ingrédients frais et de qualité
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[var(--matisse-green-light)] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">📦</span>
                </div>
                <h4 className="font-bold text-lg text-[var(--matisse-green-bottle)] mb-2">
                  Emballage Soigné
                </h4>
                <p className="text-gray-600 text-sm">
                  Packaging écologique et pratique
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--matisse-terra-cotta)] to-[var(--matisse-green-light)] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">💚</span>
                </div>
                <h4 className="font-bold text-lg text-[var(--matisse-green-bottle)] mb-2">
                  Service Client
                </h4>
                <p className="text-gray-600 text-sm">
                  Une équipe à votre écoute
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Note for Click & Collect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-[var(--matisse-green-bottle)]/5 border-2 border-[var(--matisse-green-bottle)]/20 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-3xl">💡</span>
              <h4 className="text-xl font-bold text-[var(--matisse-green-bottle)]">
                Bon à savoir
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Le Click & Collect est disponible uniquement pour notre restaurant de Paris 14ème. 
              Commandez en ligne et venez récupérer votre commande au moment qui vous convient !
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Livraison
