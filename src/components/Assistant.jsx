import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Sparkles, SlidersHorizontal, X, Star, MessageCircle, Tag, Zap, ChevronDown } from 'lucide-react'
import { kuperCatalog, catalogCategories, getFinalPrice, analogGroups } from '../data/kuperCatalog'
import { scoreProducts, getTopRecommendations, getRecommendationReason } from '../utils/comparisonEngine'
import ComparisonModal from './ComparisonModal'
import BottomNav from './BottomNav'
import AccountButton from './AccountButton'

export default function Assistant() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('score') // score, price-asc, price-desc, rating, reviews
  const [selectedAnalogGroup, setSelectedAnalogGroup] = useState(null)
  const [showComparison, setShowComparison] = useState(false)

  // Фильтрация и сортировка товаров
  const filteredProducts = useMemo(() => {
    let products = [...kuperCatalog]

    // Поиск
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      products = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      )
    }

    // Фильтр по категории
    if (selectedCategory !== 'Все') {
      products = products.filter(p => p.category === selectedCategory)
    }

    // Сортировка
    switch (sortBy) {
      case 'price-asc':
        products.sort((a, b) => getFinalPrice(a) - getFinalPrice(b))
        break
      case 'price-desc':
        products.sort((a, b) => getFinalPrice(b) - getFinalPrice(a))
        break
      case 'rating':
        products.sort((a, b) => b.rating - a.rating)
        break
      case 'reviews':
        products.sort((a, b) => b.reviewsCount - a.reviewsCount)
        break
      case 'score':
      default:
        // По скорингу — нужно скорить все товары
        products = scoreProducts(products)
        break
    }

    return products
  }, [searchQuery, selectedCategory, sortBy])

  // Группировка по analogGroup для показа сравнений
  const comparisonGroups = useMemo(() => {
    if (searchQuery.trim() || selectedCategory !== 'Все') {
      // Если есть фильтр, показываем группы только из отфильтрованных
      const filteredIds = new Set(filteredProducts.map(p => p.id))
      const groups = {}
      Object.entries(analogGroups).forEach(([key, products]) => {
        const filteredGroup = products.filter(p => filteredIds.has(p.id))
        if (filteredGroup.length >= 2) {
          groups[key] = filteredGroup
        }
      })
      return groups
    }

    // Показываем топ-группы с наибольшим количеством товаров
    const sortedGroups = Object.entries(analogGroups)
      .filter(([_, products]) => products.length >= 2)
      .sort((a, b) => b[1].length - a[1].length)
      .slice(0, 6)

    return Object.fromEntries(sortedGroups)
  }, [filteredProducts, searchQuery, selectedCategory])

  // Топ рекомендации
  const topRecommendations = useMemo(() => {
    return getTopRecommendations(5)
  }, [])

  // Открыть сравнение для группы аналогов
  const openComparison = (groupKey) => {
    setSelectedAnalogGroup(groupKey)
    setShowComparison(true)
  }

  // Закрыть сравнение
  const closeComparison = () => {
    setShowComparison(false)
    setSelectedAnalogGroup(null)
  }

  // Получить продукты для сравнения
  const comparisonProducts = selectedAnalogGroup ? analogGroups[selectedAnalogGroup] : []

  return (
    <div className="min-h-screen pb-28 transition-colors duration-300" style={{ background: 'var(--bg-primary)' }}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 pt-10 pb-3"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Sparkles size={22} className="text-lime-500" />
              Купер Ассистент
            </h1>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
              Сравниваем товары и находим лучший вариант
            </p>
          </div>
          <AccountButton />
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Поиск товара, бренда..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-[16px] text-sm outline-none transition-all focus:ring-2 focus:ring-lime-400"
            style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X size={16} style={{ color: 'var(--text-muted)' }} />
            </button>
          )}
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center gap-2 mt-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-[12px] text-xs font-medium"
            style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
          >
            <SlidersHorizontal size={14} />
            Фильтры
            <motion.div animate={{ rotate: showFilters ? 180 : 0 }}>
              <ChevronDown size={12} />
            </motion.div>
          </motion.button>

          {selectedCategory !== 'Все' && (
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={() => setSelectedCategory('Все')}
              className="flex items-center gap-1 px-3 py-2 rounded-[12px] text-xs font-medium bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400"
            >
              {selectedCategory}
              <X size={10} />
            </motion.button>
          )}
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 overflow-hidden rounded-[16px] p-4"
              style={{ background: 'var(--bg-secondary)' }}
            >
              {/* Категории */}
              <div className="mb-3">
                <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Категория</p>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedCategory('Все')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      selectedCategory === 'Все'
                        ? 'bg-lime-400 text-white'
                        : ''
                    }`}
                    style={selectedCategory !== 'Все' ? { background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' } : {}}
                  >
                    Все
                  </button>
                  {catalogCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                        selectedCategory === cat
                          ? 'bg-lime-400 text-white'
                          : ''
                      }`}
                      style={selectedCategory !== cat ? { background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' } : {}}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Сортировка */}
              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Сортировка</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { key: 'score', label: 'По скорингу' },
                    { key: 'price-asc', label: 'Цена ↑' },
                    { key: 'price-desc', label: 'Цена ↓' },
                    { key: 'rating', label: 'Рейтинг' },
                    { key: 'reviews', label: 'Отзывы' },
                  ].map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setSortBy(opt.key)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                        sortBy === opt.key
                          ? 'bg-lime-400 text-white'
                          : ''
                      }`}
                      style={sortBy !== opt.key ? { background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' } : {}}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Top Recommendations */}
      {!searchQuery && selectedCategory === 'Все' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="px-5 mb-4"
        >
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
            <Sparkles size={14} className="text-lime-500" />
            Топ рекомендаций
          </h3>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
            {topRecommendations.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.06 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="rounded-[16px] p-3 flex-shrink-0 w-40 cursor-pointer"
                style={{ background: 'var(--bg-secondary)' }}
                onClick={() => openComparison(product.analogGroup)}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mx-auto mb-2 icon-3d" style={{ background: 'var(--bg-tertiary)' }}>
                  {product.image}
                </div>
                <h4 className="font-semibold text-xs text-center line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                  {product.name}
                </h4>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <Star size={10} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-[10px] font-medium" style={{ color: 'var(--text-secondary)' }}>{product.rating}</span>
                </div>
                <p className="text-sm font-bold text-center mt-1" style={{ color: 'var(--text-primary)' }}>
                  {product.finalPrice} ₽
                </p>
                {product.badges.includes('sale') && (
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400 mt-1 w-full justify-center">
                    <Zap size={8} /> Выгодно
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Comparison Groups */}
      {Object.entries(comparisonGroups).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="px-5 mb-4"
        >
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
            <SlidersHorizontal size={14} className="text-blue-500" />
            Сравните аналоги
          </h3>
          <div className="space-y-3">
            {Object.entries(comparisonGroups).map(([key, products], groupIndex) => {
              const scored = scoreProducts(products)
              const best = scored[0]
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + groupIndex * 0.08 }}
                  className="rounded-[18px] p-4 shadow-sm cursor-pointer"
                  style={{ background: 'var(--bg-secondary)' }}
                  onClick={() => openComparison(key)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl icon-3d" style={{ background: 'var(--bg-tertiary)' }}>
                        {best.image}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                          {products[0].category}
                        </h4>
                        <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                          {products.length} аналога · Сравнить
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-lime-600 dark:text-lime-400 font-medium">
                        от {Math.min(...scored.map(p => p.finalPrice))} ₽
                      </span>
                    </div>
                  </div>

                  {/* Mini comparison bar */}
                  <div className="flex gap-1 mt-2">
                    {scored.slice(0, 4).map((product, i) => (
                      <div
                        key={product.id}
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{ background: 'var(--bg-tertiary)' }}
                      >
                        <div
                          className={`h-full rounded-full ${
                            i === 0 ? 'bg-lime-400' : 'bg-gray-400 dark:bg-gray-500'
                          }`}
                          style={{ width: `${product.score}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* Search Results / All Products */}
      {(searchQuery || selectedCategory !== 'Все') && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="px-5"
        >
          <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
            {filteredProducts.length} товар{filteredProducts.length === 1 ? '' : filteredProducts.length < 5 ? 'а' : 'ов'}
          </h3>
          <div className="space-y-2">
            {filteredProducts.map((product, index) => {
              const isScored = 'score' in product
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.04 }}
                  whileHover={{ scale: 1.01, y: -1 }}
                  className="rounded-[16px] p-3.5 shadow-sm flex items-center gap-3 cursor-pointer"
                  style={{ background: 'var(--bg-secondary)' }}
                  onClick={() => analogGroups[product.analogGroup]?.length >= 2 && openComparison(product.analogGroup)}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 icon-3d" style={{ background: 'var(--bg-tertiary)' }}>
                    {product.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{product.name}</h4>
                    <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>{product.description}</p>
                    <div className="flex items-center gap-2 mt-0.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <div className="flex items-center gap-0.5">
                        <Star size={10} className="text-yellow-500 fill-yellow-500" />
                        <span>{product.rating}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <MessageCircle size={10} />
                        <span>{product.reviewsCount.toLocaleString('ru')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    {product.salePrice ? (
                      <div>
                        <p className="text-xs line-through" style={{ color: 'var(--text-muted)' }}>{product.price} ₽</p>
                        <p className="text-base font-bold text-lime-600">{product.finalPrice} ₽</p>
                      </div>
                    ) : (
                      <p className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>{product.finalPrice} ₽</p>
                    )}
                    {isScored && product.badges?.length > 0 && (
                      <div className="flex flex-wrap gap-0.5 mt-1 justify-end">
                        {product.badges.slice(0, 2).map(badge => (
                          <span key={badge} className={`px-1.5 py-0.5 rounded-full text-[8px] font-medium ${
                            badge === 'sale' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' :
                            badge === 'best-price' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' :
                            'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400'
                          }`}>
                            {badge === 'sale' ? '🔥' : badge === 'best-price' ? '💰' : '⭐'}
                          </span>
                        ))}
                      </div>
                    )}
                    {analogGroups[product.analogGroup]?.length >= 2 && (
                      <p className="text-[9px] text-lime-600 dark:text-lime-400 mt-1">
                        Сравнить →
                      </p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}

      <BottomNav />

      {/* Comparison Modal */}
      <AnimatePresence>
        {showComparison && comparisonProducts.length > 0 && (
          <ComparisonModal
            products={comparisonProducts}
            onClose={closeComparison}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
