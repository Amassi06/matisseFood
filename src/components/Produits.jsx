import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductCard from './ProductCard'

gsap.registerPlugin(ScrollTrigger)

const Produits = () => {
  const sectionRef = useRef(null)
  const scrollContainerRef = useRef(null)

  const categories = {
    sandwiches: {
      title: 'LES SANDWICHS',
      subtitle: 'Servis avec frites maison',
      emoji: '🥙',
      items: [
        { name: 'Kebab Classique', description: 'Salade, tomates, oignons, sauce blanche maison', price: '€9.50' },
        { name: '3 Steaks', description: 'Salade, oignons, ketchup, mayonnaise, fromage cheddar', price: '€10.50' },
        { name: 'Chicken Curry', description: 'Salade, tomates, oignons, fromage cheddar, mayonnaise', price: '€10.00' },
        { name: 'Kebab Alésia', description: 'Salade, tomates, concombre, oignons, sauce blanche maison, chou rouge, persil', price: '€10.50' },
        { name: 'Berliner Kebab', description: 'Viande de kebab, salade, concombre, chou rouge, légumes grillés, grenades, fromage fêta, persil, sumac', price: '€11.50' },
        { name: 'Spicy Berliner', description: 'Viande de kebab, salade, oignons, chou rouge, légumes grillés, sauce cheddar, jalapeños, sauce piquante maison', price: '€11.50' },
        { name: 'Halloumi (Veggie)', description: 'Fromage halloumi frit, salade, légumes grillés, tomates, oignons, chou rouge, carottes, coriandre, sumac, sauce blanche', price: '€11.00' },
        { name: 'Paris-Berlin Kebab', description: 'Viande de kebab, salade, oignons, chou rouge, légumes grillés, fromage chèvre, miel, persil', price: '€12.00' },
      ]
    },
    bowls: {
      title: 'LES BOWLS',
      subtitle: 'Fraîcheur et saveurs',
      emoji: '🥗',
      items: [
        { name: 'Halloumi Bowl (Veggie)', description: 'Fromage halloumi frit, salade, tomates, carottes rappées, sumac, fromage fêta, avocat, chou rouge, coriandre, oignons, légumes grillés, sauce blanche', price: '€12.00' },
        { name: 'Berliner Bowl', description: 'Viande de kebab, salade, oignons, tomates, chou rouge, légumes grillés, grenades, fromage fêta, carottes, sumac, persil, sauce blanche', price: '€12.50' },
        { name: 'Spicy Berliner Bowl', description: 'Viande de kebab, salade, oignons, chou rouge, légumes grillés, sauce cheddar, jalapeños, sauce piquante maison', price: '€12.50' },
        { name: 'Paris-Berlin Bowl', description: 'Viande de kebab, salade, oignons, chou rouge, tomates, carottes, légumes grillés, grenades, fromage chèvre chaud, miel, persil', price: '€13.00' },
        { name: 'Assiette Kebab', description: 'Salades variées, viande de kebab, frites maison, blé, sauce blanche maison', price: '€13.50' },
        { name: 'Salade Crispy Chicken', description: 'Tenders maison, salade iceberg, oignons, tomates, fromage fêta, chou rouge, carottes, sauce maison', price: '€11.50' },
      ]
    },
    smashs: {
      title: 'LES SMASHS',
      subtitle: 'Iron Smash Burger - Recettes du Chef Stéphane Oulevy',
      emoji: '🍔',
      items: [
        { name: 'Iron Smash Burger', description: 'Bun, steak de bœuf smashé origine France, fromage cheddar, oignons, cornichons, salade, sauce Iron', price: '€11.00' },
        { name: 'Double Iron Smash Burger', description: 'Bun, double steak de bœuf smashé origine France, fromage cheddar, oignons, cornichons, salade, sauce Iron', price: '€13.50' },
        { name: 'Fried Chicken Burger', description: 'Bun, filet de poulet frit maison mariné aux épices, fromage cheddar, oignons, cornichons, salade, tomates, sauce BBQ', price: '€11.50' },
        { name: 'Spicy Fried Chicken', description: 'Bun, filet de poulet frit maison mariné aux épices, fromage cheddar, jalapeños, oignons, cornichons, salade, tomates, coriandre, sauce Sriracha', price: '€12.00' },
        { name: 'Avocado Chicken Burger', description: 'Bun, filet de poulet frit maison mariné aux épices, fromage cheddar, oignons, cornichons, salade, avocat, tomates, sauce Iron', price: '€12.50' },
        { name: 'Hot Spicy Smash', description: 'Bun, steak de bœuf smashé origine France, fromage cheddar, oignons, cornichons, jalapeños, salade, sauce Sriracha', price: '€11.50' },
        { name: 'Double Hot Spicy Smash', description: 'Bun, double steak de bœuf smashé origine France, fromage cheddar, oignons, cornichons, jalapeños, salade, sauce Sriracha', price: '€14.00' },
        { name: 'Napa Grill Cheese (Veggie)', description: 'Bun, fromage grec à base de vache et chèvre frit, salade, tomates, cornichons, oignons et sauce iron', price: '€10.50' },
      ]
    },
    tacos: {
      title: 'LES TACOS',
      subtitle: 'French Tacos - Recettes du Chef Stéphane Oulevy',
      emoji: '🌮',
      items: [
        { name: 'Le Mexicain', description: 'Poulet mariné, viande hachée, jalapeños, frites, salade, avocat, oignons, fromage cheddar, sauce fromagère, sauce algérienne', price: '€12.00' },
        { name: 'Le Bánh-Mì', description: 'Tenders, poulet mariné, coriandre, salade, carottes rappées, oignons, sauce secrète piquante maison, concombre, chou rouge, frites, sauce fromagère', price: '€12.00' },
        { name: "L'Original", description: 'Cordon bleu, viande hachée, salade, oignon, sauce fromagère, fromage cheddar, pesto, frites, sauce algérienne', price: '€11.50' },
        { name: "L'Oriental", description: 'Viande de kebab, merguez, frites, salade, tomates, oignons, jalapeños, sauce fromagère, sauce algérienne', price: '€11.50' },
        { name: 'Le Veggie', description: 'Fromage halloumi, salade, avocat, tomates, chou rouge, coriandre, oignons, frites, légumes grillés, sauce fromagère, sauce blanche', price: '€11.00' },
      ]
    },
    sides: {
      title: 'ACCOMPAGNEMENTS',
      subtitle: 'Frites & Tenders',
      emoji: '🍟',
      items: [
        { name: 'Tenders Maison (3 pcs)', description: 'Servis avec sauce barbecue', price: '€6.50' },
        { name: 'Tenders Maison (5 pcs)', description: 'Servis avec sauce barbecue', price: '€9.50' },
        { name: 'Tenders Maison (8 pcs)', description: 'Servis avec sauce barbecue', price: '€14.00' },
        { name: 'Frites Nature', description: 'Pommes de terre Agria, 2 bains de cuisson', price: '€4.00' },
        { name: 'Frites Sauce Fromagère', description: 'Frites maison avec sauce fromagère', price: '€5.50' },
        { name: 'Frites Sauce Cheddar', description: 'Frites maison avec sauce cheddar', price: '€5.50' },
        { name: 'Frites & Viande Kebab', description: 'Frites avec viande kebab et sauce blanche', price: '€8.00' },
        { name: 'Frites & Légumes Grillés', description: 'Frites avec légumes grillés et sauce blanche', price: '€7.00' },
        { name: 'Spicy Fries', description: 'Frites, sauce cheddar, oignons, jalapeños, sauce sriracha maison', price: '€6.50' },
      ]
    },
    extras: {
      title: 'EXTRAS & BOISSONS',
      subtitle: 'Sauces, desserts et boissons',
      emoji: '🍰',
      items: [
        { name: 'Sauce Maison', description: 'Blanche / Iron / Cocktail / Sriracha', price: '€0.50' },
        { name: 'Maxi Cookie', description: 'Cookie géant fait maison', price: '€3.50' },
        { name: 'Tiramisu', description: 'Fait maison', price: '€4.50' },
        { name: 'Baklava', description: 'Pâtisserie orientale', price: '€3.00' },
        { name: 'Bourma', description: 'Cheveux d\'ange', price: '€3.00' },
        { name: 'Donut\'s', description: 'Assortiment de donuts', price: '€2.50' },
        { name: 'Citronnade Maison', description: '33 cl', price: '€3.50' },
        { name: 'Bissap Maison', description: '33 cl', price: '€3.50' },
        { name: 'Boissons', description: '33 cl', price: '€2.50' },
        { name: 'Café / Thé', description: 'Au choix', price: '€2.00' },
      ]
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.category-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.category-title',
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
      id="produits"
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--matisse-green-bottle)] via-[var(--matisse-terra-cotta)] to-[var(--matisse-green-light)]" />
      
      <div className="container mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'backOut' }}
            className="text-4xl md:text-6xl font-bold text-[var(--matisse-green-bottle)] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Nos Produits
          </motion.h2>
          <div className="w-24 h-1 bg-[var(--matisse-terra-cotta)] mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une cuisine créative et colorée, inspirée par l'art de Matisse
          </p>
        </div>

        {/* Categories */}
        {Object.entries(categories).map(([key, category]) => (
          <div key={key} className="mb-20">
            {/* Category Header */}
            <div className="category-title mb-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-5xl">{category.emoji}</span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[var(--matisse-green-bottle)]"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    {category.title}
                  </h3>
                  <p className="text-sm text-[var(--matisse-terra-cotta)] font-medium">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative">
              <div 
                className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
                style={{ 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                {category.items.map((item, index) => (
                  <div key={index} className="snap-start">
                    <ProductCard
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      category={category.title}
                      emoji={category.emoji}
                    />
                  </div>
                ))}
              </div>

              {/* Scroll indicator */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-sm text-gray-400 flex items-center gap-2">
                <span>Faites défiler</span>
                <motion.span
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-[var(--matisse-green-bottle)] mb-8">
            Commandez dès maintenant via nos partenaires de livraison
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#livraison"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--matisse-green-bottle)] text-white rounded-full font-semibold shadow-lg hover:bg-[var(--matisse-terra-cotta)] transition-colors"
            >
              Commander en ligne
            </motion.a>
            <motion.a
              href="#reservation"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[var(--matisse-green-bottle)] text-[var(--matisse-green-bottle)] rounded-full font-semibold hover:bg-[var(--matisse-green-bottle)] hover:text-white transition-all"
            >
              Réserver une table
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Hide scrollbar globally for this section */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Produits
