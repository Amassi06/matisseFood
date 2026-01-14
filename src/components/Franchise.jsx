import { useEffect, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Franchise = () => {
  const sectionRef = useRef(null)

  const advantages = [
    {
      icon: '🎯',
      title: 'Un vrai savoir-faire',
      description: 'Bénéficiez de notre expertise culinaire et de nos recettes validées par le Chef Stéphane Oulevy'
    },
    {
      icon: '📈',
      title: 'Une croissance en hausse',
      description: 'Rejoignez une chaîne en pleine expansion avec un modèle économique éprouvé'
    },
    {
      icon: '📱',
      title: 'Présence sur les réseaux sociaux',
      description: 'Profitez de notre stratégie digitale et de notre communauté engagée'
    },
    {
      icon: '🚀',
      title: 'Canaux de vente multiples',
      description: 'Uber Eats, Deliveroo, Click & Collect : diversifiez vos sources de revenus'
    },
    {
      icon: '✨',
      title: 'Produits de qualité',
      description: 'Des ingrédients frais et des recettes créatives qui séduisent la clientèle'
    },
    {
      icon: '🎨',
      title: 'Identité forte',
      description: 'Un concept unique inspiré par l\'art de Matisse, reconnaissable et différenciant'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.advantage-card',
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.advantage-card',
            start: 'top 85%',
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
      id="franchise"
      className="relative py-20 md:py-32 bg-gradient-to-b from-white to-[var(--matisse-cream)] overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--matisse-green-light)] rounded-full opacity-15 blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-[var(--matisse-terra-cotta)] opacity-10 blur-3xl"
           style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[var(--matisse-green-bottle)] opacity-5 blur-3xl" />

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
            Devenir Franchisé
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--matisse-terra-cotta)] mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rejoignez une chaîne de restaurant en expansion et participez à notre succès
          </p>
        </div>

        {/* Hero Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-[var(--matisse-green-bottle)] to-[var(--matisse-green-light)] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 text-[15rem] opacity-10">🎨</div>
            <div className="absolute -bottom-20 -left-20 text-[15rem] opacity-10">🍔</div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Devenez franchisé Matisse Food
              </h3>
              <p className="text-xl leading-relaxed mb-6">
                Matisse Food offre un <strong>excellent rapport qualité-prix</strong> et des produits variés.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                Notre concept unique allie l'art de la Street Food à l'inspiration artistique d'Henri Matisse, 
                créant une expérience culinaire mémorable qui séduit une clientèle diversifiée.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Advantages Grid */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-[var(--matisse-green-bottle)] mb-12"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Les Avantages de la Franchise
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="advantage-card"
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full border-2 border-transparent hover:border-[var(--matisse-green-light)] transition-all">
                  <div className="text-6xl mb-4">{advantage.icon}</div>
                  <h4 className="text-xl font-bold text-[var(--matisse-green-bottle)] mb-3"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-center text-[var(--matisse-green-bottle)] mb-12"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Matisse Food en chiffres
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl font-bold text-[var(--matisse-terra-cotta)] mb-2"
                >
                  2
                </motion.div>
                <p className="text-gray-600 font-semibold">Restaurants</p>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl font-bold text-[var(--matisse-terra-cotta)] mb-2"
                >
                  50+
                </motion.div>
                <p className="text-gray-600 font-semibold">Produits au menu</p>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-5xl font-bold text-[var(--matisse-terra-cotta)] mb-2"
                >
                  100%
                </motion.div>
                <p className="text-gray-600 font-semibold">Frais & Maison</p>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-5xl font-bold text-[var(--matisse-terra-cotta)] mb-2"
                >
                  3
                </motion.div>
                <p className="text-gray-600 font-semibold">Canaux de vente</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[var(--matisse-cream)] to-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-[var(--matisse-green-bottle)] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Intéressé par notre franchise ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Contactez-nous pour en savoir plus sur les opportunités de franchise Matisse Food. 
              Notre équipe vous accompagnera dans votre projet entrepreneurial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[var(--matisse-green-bottle)] text-white rounded-full font-semibold shadow-lg hover:bg-[var(--matisse-terra-cotta)] transition-colors"
              >
                Nous contacter
              </motion.a>
              <motion.a
                href="mailto:matisse.contact@gmail.com?subject=Demande d'information franchise"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[var(--matisse-green-bottle)] text-[var(--matisse-green-bottle)] rounded-full font-semibold hover:bg-[var(--matisse-green-bottle)] hover:text-white transition-all"
              >
                Envoyer un email
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Franchise
