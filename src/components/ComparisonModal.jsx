import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, MessageCircle, Tag, Zap } from 'lucide-react'
import { scoreProducts, getRecommendationReason } from '../utils/comparisonEngine'
import { getFinalPrice } from '../data/kuperCatalog'

const badgeConfig = {
  'best-price': {
    icon: Tag,
    label: 'Лучшая цена',
    color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
  },
  'top-rating': {
    icon: Star,
    label: 'Топ рейтинг',
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400',
  },
  'most-reviews': {
    icon: MessageCircle,
    label: 'Больше отзывов',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
  },
  'sale': {
    icon: Zap,
    label: '🔥 Выгодно',
    color: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
  },
}

export default function ComparisonModal({ products, onClose }) {
  if (!products || products.length === 0) return null

  const scoredProducts = scoreProducts(products)
  const bestChoice = scoredProducts[0]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-end justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="relative w-full max-w-[430px] bg-white dark:bg-gray-800 rounded-t-[28px] shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 rounded-t-[28px] z-10 px-5 pt-4 pb-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                Сравнение аналогов
              </h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {scoredProducts.length} товаров · Скоринг: цена 40%, рейтинг 35%, отзывы 25%
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'var(--bg-tertiary)' }}
            >
              <X size={16} style={{ color: 'var(--text-secondary)' }} />
            </button>
          </div>
        </div>

        {/* Recommendation Banner */}
        <div className="mx-5 mt-4 bg-gradient-to-r from-lime-50 to-blue-50 dark:from-lime-900/20 dark:to-blue-900/20 rounded-[16px] p-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center text-2xl flex-shrink-0 icon-3d">
              {bestChoice.image}
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-lime-700 dark:text-lime-400 uppercase tracking-wider mb-0.5">
                ✨ Выбор Ассистента
              </p>
              <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                {bestChoice.name}
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {getRecommendationReason(bestChoice)}
              </p>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="px-5 py-4 space-y-3">
          {scoredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`rounded-[18px] p-4 shadow-sm relative overflow-hidden ${
                index === 0 ? 'ring-2 ring-lime-400' : ''
              }`}
              style={{ background: 'var(--bg-secondary)' }}
            >
              {/* Rank Badge */}
              <div className={`absolute top-3 left-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                index === 0 ? 'bg-lime-400 text-white' : index === 1 ? 'bg-gray-300 text-gray-700' : index === 2 ? 'bg-amber-600 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
              }`}>
                {index + 1}
              </div>

              <div className="flex items-start gap-3 pl-8">
                {/* Product Image */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 icon-3d" style={{ background: 'var(--bg-tertiary)' }}>
                  {product.image}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm truncate" style={{ color: 'var(--text-primary)' }}>
                        {product.name}
                      </h4>
                      <p className="text-[10px] truncate" style={{ color: 'var(--text-muted)' }}>
                        {product.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-right flex-shrink-0">
                      {product.salePrice ? (
                        <div>
                          <p className="text-xs line-through" style={{ color: 'var(--text-muted)' }}>
                            {product.price} ₽
                          </p>
                          <p className="text-base font-bold text-lime-600">
                            {product.finalPrice} ₽
                          </p>
                        </div>
                      ) : (
                        <p className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                          {product.finalPrice} ₽
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Ratings & Reviews */}
                  <div className="flex items-center gap-3 mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {product.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={12} />
                      <span>{product.reviewsCount.toLocaleString('ru')}</span>
                    </div>
                    {product.inStock ? (
                      <span className="text-green-600 dark:text-green-400">✓ В наличии</span>
                    ) : (
                      <span className="text-red-500">✗ Нет</span>
                    )}
                  </div>

                  {/* Score Bar */}
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-[10px] mb-1">
                      <span style={{ color: 'var(--text-muted)' }}>Скоринг</span>
                      <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{product.score}/100</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${product.score}%` }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                        className={`h-full rounded-full ${
                          index === 0 ? 'bg-gradient-to-r from-lime-400 to-lime-500' : 'bg-gray-400 dark:bg-gray-500'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Badges */}
                  {product.badges.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {product.badges.map(badge => {
                        const config = badgeConfig[badge]
                        if (!config) return null
                        const Icon = config.icon
                        return (
                          <span
                            key={badge}
                            className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-medium ${config.color}`}
                          >
                            <Icon size={10} />
                            {config.label}
                          </span>
                        )
                      })}
                    </div>
                  )}

                  {/* Reason */}
                  {index === 0 && (
                    <p className="text-[10px] mt-2 text-lime-700 dark:text-lime-400">
                      💡 {getRecommendationReason(product)}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t px-5 py-4" style={{ borderColor: 'var(--border-color)' }}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gradient-to-r from-lime-400 to-lime-500 text-white font-semibold py-3 rounded-[16px] shadow-lg"
            onClick={onClose}
          >
            Понятно, спасибо!
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
