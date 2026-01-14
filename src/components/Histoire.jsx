import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Histoire = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      gsap.utils.toArray('.histoire-section').forEach((section, index) => {
        gsap.fromTo(section,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Parallax effect on decorative elements
      gsap.utils.toArray('.parallax-shape').forEach(shape => {
        gsap.to(shape, {
          yPercent: 50,
          ease: 'none',
          scrollTrigger: {
            trigger: shape,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="histoire"
      className="relative py-20 md:py-32 bg-[var(--matisse-cream)] overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="parallax-shape absolute top-20 right-10 w-40 h-40 bg-[var(--matisse-green-light)] rounded-full opacity-20 blur-2xl" />
      <div className="parallax-shape absolute bottom-40 left-10 w-64 h-64 bg-[var(--matisse-terra-cotta)] opacity-10 blur-3xl" 
           style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="histoire-section text-center mb-20">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'backOut' }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--matisse-green-bottle)] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Notre Histoire
            </h2>
          </motion.div>
          <div className="w-24 h-1 bg-[var(--matisse-terra-cotta)] mx-auto" />
        </div>

        {/* Origin Story */}
        <div className="histoire-section max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--matisse-green-light)] opacity-10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--matisse-terra-cotta)] opacity-10 rounded-full -ml-20 -mb-20" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[var(--matisse-green-bottle)] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <p className="text-lg md:text-xl text-[var(--matisse-green-bottle)] leading-relaxed text-center">
                Le Restaurant Matisse tire son nom du célèbre artiste français <strong>Henri Matisse</strong>. 
                En effet, l'histoire raconte qu'un jour, le fondateur du restaurant, un grand amateur d'art, 
                a visité une exposition de Matisse et a été tellement inspiré par son usage de la couleur et 
                de la lumière qu'il a décidé de nommer son restaurant en son honneur.
              </p>
              <p className="text-lg md:text-xl text-[var(--matisse-green-bottle)] leading-relaxed text-center mt-6">
                Depuis lors, le Restaurant Matisse s'est établi comme un lieu vivant de la Street Food. 
                La cuisine est à l'image de l'art de Matisse : <strong className="text-[var(--matisse-terra-cotta)]">
                créative, vibrante et colorée</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Chef Section */}
        <div className="histoire-section grid md:grid-cols-2 gap-12 items-center mb-20 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square bg-gradient-to-br from-[var(--matisse-green-bottle)] to-[var(--matisse-green-light)]"
          >
            {/* Placeholder for chef image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl">👨‍🍳</span>
            </div>
          </motion.div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--matisse-green-bottle)] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Chef Stéphane Oulevy
            </h3>
            <p className="text-lg text-[var(--matisse-green-bottle)] leading-relaxed mb-4">
              Le restaurant Matisse est fier de collaborer avec le <strong>chef Stéphane Oulevy</strong>, 
              un expert culinaire renommé qui a apporté de nouvelles idées et saveurs à notre menu.
            </p>
            <p className="text-lg text-[var(--matisse-green-bottle)] leading-relaxed">
              Grâce à sa créativité et à son expertise en cuisine, le chef Oulevy a réussi à moderniser 
              notre menu tout en respectant la touche française.
            </p>
            <div className="mt-8 inline-block px-6 py-3 bg-[var(--matisse-terra-cotta)] text-white rounded-full font-semibold">
              Expert Culinaire
            </div>
          </div>
        </div>

        {/* Quality Section */}
        <div className="histoire-section max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[var(--matisse-green-bottle)] to-[var(--matisse-green-light)] rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Qualité des Ingrédients
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl">🥔</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3">Frites Maison</h4>
                  <p className="text-white/90 leading-relaxed">
                    Pommes de terre fraîches coupées à la main sur place
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl">🥩</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3">Viandes Fraîches</h4>
                  <p className="text-white/90 leading-relaxed">
                    Partenariat avec la Bonne Ménagère pour des produits de qualité
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl">🌱</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3">Locaux & Frais</h4>
                  <p className="text-white/90 leading-relaxed">
                    Collaboration avec des fournisseurs locaux de confiance
                  </p>
                </motion.div>
              </div>

              <p className="text-center text-lg mt-10 text-white/95 leading-relaxed">
                Au restaurant Matisse, nous croyons que la qualité de nos ingrédients est essentielle. 
                Nous travaillons avec des fournisseurs locaux pour vous offrir le meilleur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Histoire
