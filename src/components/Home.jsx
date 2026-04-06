import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Bell, Sparkles, Clock, TrendingUp } from 'lucide-react'
import { categories, smartSets, recommendedProducts, demoNotifications, profiles } from '../data/products'
import BottomNav from './BottomNav'
import AccountButton from './AccountButton'

const roomStyles = {
  kitchen: {
    gradient: 'from-lime-300 to-lime-400',
    bg: 'bg-lime-50',
    icon: '🧊',
  },
  bathroom: {
    gradient: 'from-blue-300 to-blue-400',
    bg: 'bg-blue-50',
    icon: '🛁',
  },
  pets: {
    gradient: 'from-yellow-300 to-yellow-400',
    bg: 'bg-yellow-50',
    icon: '🐾',
  },
  medicine: {
    gradient: 'from-green-500 to-green-600',
    bg: 'bg-green-50',
    icon: '🩹',
  },
}

export default function Home() {
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pt-12 pb-4"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold text-gray-900"
            >
              Добро пожаловать
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-sm mt-0.5"
            >
              в ваш виртуальный дом 🏠
            </motion.p>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <Bell size={18} className="text-gray-600" />
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-400 rounded-full border-2 border-white" />
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
              className="mb-4 bg-white rounded-[16px] p-3 shadow-sm overflow-hidden"
            >
              {demoNotifications.map((notif, i) => (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2 py-2 px-2 border-b border-gray-50 last:border-0"
                >
                  <span className="text-base">
                    {profiles.find(p => p.id === notif.profile)?.icon || '👤'}
                  </span>
                  <span className="text-xs text-gray-700">{notif.text}</span>
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
        className="px-6 mb-6"
      >
        <h2 className="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-1.5">
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
                  className={`bg-gradient-to-r ${style.gradient} rounded-[20px] p-4 flex items-center justify-between cursor-pointer shadow-md`}
                >
                  <div>
                    <h3 className="text-base font-bold text-white drop-shadow">{cat.name}</h3>
                    <p className="text-white/70 text-xs mt-0.5">
                      {Object.values(cat.productsByProfile).flat().length} товаров
                    </p>
                  </div>
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="text-4xl drop-shadow-lg"
                  >
                    {style.icon}
                  </motion.div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </motion.div>

      {/* Рекомендованные товары (бывший раздел Списки) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="px-6 mb-6"
      >
        <h2 className="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-1.5">
          <TrendingUp size={14} className="text-blue-500" />
          Рекомендовано для вас
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
                className="bg-white rounded-[16px] p-3.5 flex items-center gap-3 shadow-sm cursor-pointer"
              >
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-lg">{profile?.icon || '👤'}</span>
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl shadow-sm">
                    {product.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 text-sm">{product.name}</h4>
                  <p className="text-gray-400 text-xs truncate">{product.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-gray-900 text-sm">{product.price}</p>
                  <p className="text-[10px] text-gray-400">{product.category}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Умные сеты */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="px-6 mb-4"
      >
        <h2 className="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-1.5">
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
              className={`bg-gradient-to-br ${set.color} rounded-[18px] p-4 cursor-pointer shadow-md`}
            >
              <span className="text-3xl block mb-2">{set.icon}</span>
              <span className="text-sm font-semibold text-gray-800 block leading-tight">{set.name}</span>
              <span className="text-[10px] text-gray-600 block mt-0.5">{set.desc}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <BottomNav />
    </div>
  )
}
