import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Bell, Sparkles, Clock, TrendingUp, X, Star, Zap } from 'lucide-react'
import { categories, smartSets, recommendedProducts, demoNotifications, profiles } from '../data/products'
import { getTopRecommendations, scoreProducts } from '../utils/comparisonEngine'
import BottomNav from './BottomNav'
import AccountButton from './AccountButton'

const roomStyles = {
  kitchen: {
    gradient: 'from-lime-300 to-lime-400',
    bg: 'bg-lime-50 dark:bg-lime-900/20',
    icon: '🧊',
  },
  bathroom: {
    gradient: 'from-blue-300 to-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    icon: '🛁',
  },
  pets: {
    gradient: 'from-yellow-300 to-yellow-400',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    icon: '🐾',
  },
  medicine: {
    gradient: 'from-green-500 to-green-600',
    bg: 'bg-green-50 dark:bg-green-900/20',
    icon: '🩹',
  },
}

// Sparkle particles
function SparkleParticle({ delay, x, y, size }) {
  return (
    <motion.div
      className="absolute sparkle text-yellow-300"
      style={{ left: `${x}%`, top: `${y}%`, fontSize: size }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      ✦
    </motion.div>
  )
}

// Модалка сета
function SetModal({ set, onClose }) {
  if (!set) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-[430px] bg-white dark:bg-gray-800 rounded-t-[28px] p-6 pb-8 shadow-2xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{set.icon}</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{set.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{set.desc}</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <X size={16} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Персонажи */}
        {set.characters && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Кто пользуется</h4>
            <div className="flex gap-2 flex-wrap">
              {set.characters.map((char, i) => (
                <span key={i} className="flex items-center gap-1 bg-gray-50 dark:bg-gray-700 rounded-full px-3 py-1.5 text-xs">
                  <span>{char.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300">{char.name}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Продукты */}
        {set.products && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Продукты в сете</h4>
            <div className="space-y-2">
              {set.products.map((prod, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-[12px] p-2.5"
                >
                  <span className="text-xl">{prod.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{prod.name}</p>
                    <p className="text-[10px] text-gray-400">{prod.note}</p>
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{prod.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Рекомендация */}
        {set.recommendation && (
          <div className="bg-gradient-to-r from-lime-50 to-blue-50 dark:from-lime-900/20 dark:to-blue-900/20 rounded-[14px] p-3 flex items-start gap-2">
            <Sparkles size={14} className="text-lime-500 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-700 dark:text-gray-300">{set.recommendation}</p>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full mt-4 bg-gradient-to-r from-lime-400 to-lime-500 text-white font-semibold py-3 rounded-[16px] shadow-lg"
        >
          Добавить весь сет · {set.products?.reduce((s, p) => s + parseInt(p.price.replace(/\D/g, '')), 0).toLocaleString('ru')} ₽
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default function Home() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [selectedSet, setSelectedSet] = useState(null)

  // Получаем рекомендации ассистента
  const assistantRecs = getTopRecommendations(3)

  return (
    <div className="min-h-screen pb-28 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Sparkle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <SparkleParticle delay={0} x={15} y={20} size={10} />
        <SparkleParticle delay={0.5} x={80} y={15} size={8} />
        <SparkleParticle delay={1} x={45} y={35} size={12} />
        <SparkleParticle delay={1.5} x={70} y={50} size={6} />
        <SparkleParticle delay={0.8} x={25} y={60} size={9} />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pt-12 pb-4 relative z-10"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Добро пожаловать
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm mt-0.5"
              style={{ color: 'var(--text-secondary)' }}
            >
              в ваш Купер Ассистент 🤖
            </motion.p>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
              style={{ background: 'var(--bg-tertiary)' }}
            >
              <Bell size={18} style={{ color: 'var(--text-secondary)' }} />
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-400 rounded-full border-2" style={{ borderColor: 'var(--bg-primary)' }} />
            </motion.button>
            <AccountButton />
          </div>
        </div>

        {/* Уведомления */}
        <AnimatePresence>
          {showNotifications && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className="mb-4 rounded-[16px] p-3 shadow-sm overflow-hidden"
              style={{ background: 'var(--bg-secondary)' }}
            >
              {demoNotifications.map((notif, i) => (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2 py-2 px-2 border-b last:border-0"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  <span className="text-base">
                    {profiles.find(p => p.id === notif.profile)?.icon || '👤'}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{notif.text}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Категории-комнаты */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="px-6 mb-6 relative z-10"
      >
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
          <Sparkles size={14} className="text-lime-500" />
          Комнаты
        </h2>
        <div className="space-y-3">
          {categories.map((cat, index) => {
            const style = roomStyles[cat.color]
            return (
              <Link key={cat.slug} to={`/category/${cat.slug}`}>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.3, type: 'spring' }}
                  whileHover={{ scale: 1.015, y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  className={`bg-gradient-to-r ${style.gradient} rounded-[20px] p-4 flex items-center justify-between cursor-pointer shadow-lg shimmer relative`}
                >
                  <div className="relative z-10">
                    <h3 className="text-base font-bold text-white drop-shadow">{cat.name}</h3>
                    <p className="text-white/70 text-xs mt-0.5">
                      {Object.values(cat.productsByProfile).flat().length} товаров
                    </p>
                  </div>
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="text-4xl drop-shadow-lg icon-3d relative z-10"
                  >
                    {style.icon}
                  </motion.div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </motion.div>

      {/* Рекомендованные товары */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="px-6 mb-6 relative z-10"
      >
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
          <TrendingUp size={14} className="text-blue-500" />
          Вам может понравиться
        </h2>
        <div className="space-y-2.5">
          {recommendedProducts.map((product, index) => {
            const profile = profiles.find(p => p.id === product.profile)
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + index * 0.06 }}
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
                className="rounded-[16px] p-3.5 flex items-center gap-3 shadow-sm cursor-pointer gradient-border"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-lg">{profile?.icon || '👤'}</span>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm icon-3d" style={{ background: 'var(--bg-tertiary)' }}>
                    {product.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{product.name}</h4>
                  <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>{product.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{product.price}</p>
                  <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{product.category}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Ассистент нашёл выгодное */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="px-6 mb-6 relative z-10"
      >
        <Link to="/assistant">
          <h2 className="text-sm font-semibold mb-3 flex items-center gap-1.5 cursor-pointer" style={{ color: 'var(--text-secondary)' }}>
            <Sparkles size={14} className="text-lime-500" />
            Ассистент нашёл выгодное
            <span className="text-[10px] text-lime-600 dark:text-lime-400 ml-auto">Смотреть все →</span>
          </h2>
        </Link>
        <div className="space-y-2.5">
          {assistantRecs.map((product, index) => (
            <Link key={product.id} to="/assistant">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 + index * 0.08 }}
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
                className="rounded-[16px] p-3.5 flex items-center gap-3 shadow-sm cursor-pointer ring-1 ring-lime-200 dark:ring-lime-800"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm icon-3d" style={{ background: 'var(--bg-tertiary)' }}>
                    {product.image}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{product.name}</h4>
                  <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <div className="flex items-center gap-0.5">
                      <Star size={10} className="text-yellow-500 fill-yellow-500" />
                      <span>{product.rating}</span>
                    </div>
                    <span>· {product.reviewsCount.toLocaleString('ru')} отзывов</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  {product.salePrice ? (
                    <div>
                      <p className="text-[10px] line-through" style={{ color: 'var(--text-muted)' }}>{product.price} ₽</p>
                      <p className="font-bold text-sm text-lime-600">{product.finalPrice} ₽</p>
                    </div>
                  ) : (
                    <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{product.finalPrice} ₽</p>
                  )}
                  {product.badges.includes('sale') && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400 mt-0.5">
                      <Zap size={8} /> Скидка
                    </span>
                  )}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Умные сеты */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="px-6 mb-4 relative z-10"
      >
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
          <Clock size={14} className="text-purple-500" />
          Умные сеты
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {smartSets.map((set, index) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.08 }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedSet(set)}
              className={`bg-gradient-to-br ${set.color} rounded-[18px] p-4 cursor-pointer shadow-lg shimmer relative`}
            >
              <span className="text-3xl block mb-2 icon-3d">{set.icon}</span>
              <span className="text-sm font-semibold text-gray-800 block leading-tight">{set.name}</span>
              <span className="text-[10px] text-gray-600 block mt-0.5">{set.desc}</span>
              {set.products && (
                <span className="text-[9px] text-gray-500 mt-1 block">
                  {set.products.length} товаров · {set.products.reduce((s, p) => s + parseInt(p.price.replace(/\D/g, '')), 0).toLocaleString('ru')} ₽
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <BottomNav />

      {/* Set Modal */}
      <AnimatePresence>
        {selectedSet && <SetModal set={selectedSet} onClose={() => setSelectedSet(null)} />}
      </AnimatePresence>
    </div>
  )
}
