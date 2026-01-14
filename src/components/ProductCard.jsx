import { motion } from 'framer-motion'
import { useState } from 'react'

const ProductCard = ({ name, description, price, category, emoji = '🍔' }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Category badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1 bg-[var(--matisse-green-bottle)] text-white text-xs font-semibold rounded-full">
          {category}
        </span>
      </div>

      {/* Image/Emoji Section */}
      <div className="relative h-48 bg-gradient-to-br from-[var(--matisse-cream)] to-[var(--matisse-green-light)]/20 flex items-center justify-center overflow-hidden">
        <motion.div
          animate={isHovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          className="text-8xl"
        >
          {emoji}
        </motion.div>
        
        {/* Decorative shapes */}
        <motion.div
          className="absolute top-0 left-0 w-20 h-20 bg-[var(--matisse-terra-cotta)] rounded-full opacity-20"
          animate={isHovered ? { x: -10, y: -10 } : { x: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-16 h-16 bg-[var(--matisse-green-light)] rounded-full opacity-30"
          animate={isHovered ? { x: 10, y: 10 } : { x: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--matisse-green-bottle)] mb-3 line-clamp-2"
            style={{ fontFamily: 'Playfair Display, serif' }}>
          {name}
        </h3>
        
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {price && (
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[var(--matisse-terra-cotta)]">
              {price}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-[var(--matisse-green-bottle)] text-white rounded-full text-sm font-semibold hover:bg-[var(--matisse-terra-cotta)] transition-colors"
            >
              Commander
            </motion.button>
          </div>
        )}
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[var(--matisse-green-bottle)]/5 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default ProductCard
