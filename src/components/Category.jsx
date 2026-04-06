import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft, ShoppingCart, CreditCard, Calendar as CalendarIcon,
  CheckCircle, AlertCircle, XCircle, Sparkles
} from 'lucide-react'
import { categories, profiles, deliverySchedule } from '../data/products'
import BottomNav from './BottomNav'
import AccountButton from './AccountButton'

const roomThemes = {
  kitchen: {
    pageBg: 'from-lime-50 to-lime-100',
    accentBg: 'bg-lime-400',
    accentText: 'text-lime-700',
    accentLight: 'bg-lime-100',
    upgradeBg: 'bg-lime-400',
    upgradeText: 'text-lime-900',
    icon: '🧊',
    navActive: 'bg-lime-400',
  },
  bathroom: {
    pageBg: 'from-blue-50 to-blue-100',
    accentBg: 'bg-blue-400',
    accentText: 'text-blue-700',
    accentLight: 'bg-blue-100',
    upgradeBg: 'bg-blue-900',
    upgradeText: 'text-white',
    icon: '🛁',
    navActive: 'bg-blue-400',
  },
  pets: {
    pageBg: 'from-yellow-50 to-yellow-100',
    accentBg: 'bg-yellow-400',
    accentText: 'text-yellow-700',
    accentLight: 'bg-yellow-100',
    upgradeBg: 'bg-yellow-400',
    upgradeText: 'text-yellow-900',
    icon: '🐾',
    navActive: 'bg-yellow-400',
  },
  medicine: {
    pageBg: 'from-green-50 to-green-100',
    accentBg: 'bg-green-500',
    accentText: 'text-green-700',
    accentLight: 'bg-green-100',
    upgradeBg: 'bg-green-700',
    upgradeText: 'text-white',
    icon: '🩹',
    navActive: 'bg-green-500',
  },
}

const statusConfig = {
  good: { bg: 'bg-green-100', text: 'text-green-700', label: 'В норме', icon: CheckCircle },
  warning: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Заканчивается', icon: AlertCircle },
  urgent: { bg: 'bg-red-100', text: 'text-red-700', label: 'Критично', icon: XCircle },
}

function RoomIllustration({ color }) {
  if (color === 'kitchen') {
    return (
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="relative w-36 h-44">
          <div className="w-full h-full bg-gradient-to-b from-lime-400 to-lime-500 rounded-[32px] shadow-xl relative overflow-hidden">
            <div className="absolute left-0 top-0 w-4 h-full bg-lime-600/30 rounded-l-[32px]" />
            <div className="absolute top-4 left-5 right-5 h-[45%] bg-white/20 rounded-2xl flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-800 rounded-full" />
                <div className="w-3 h-3 bg-gray-800 rounded-full" />
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-2 border-b-2 border-gray-800 rounded-full" />
            </div>
            <div className="absolute bottom-4 left-5 right-5 h-[42%] bg-white/15 rounded-2xl flex items-center justify-center gap-6">
              <div className="w-8 h-10 bg-white/20 rounded-lg" />
              <div className="w-8 h-10 bg-white/20 rounded-lg" />
            </div>
            <div className="absolute top-[20%] left-2 w-2 h-10 bg-gray-300 rounded-full shadow" />
            <div className="absolute bottom-[18%] left-2 w-2 h-10 bg-gray-300 rounded-full shadow" />
          </div>
        </div>
      </motion.div>
    )
  }
  if (color === 'bathroom') {
    return (
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="relative w-36 h-40">
          <div className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-500 rounded-[28px] shadow-xl relative overflow-hidden">
            <div className="absolute top-6 left-6 right-6 h-[35%] bg-white/15 rounded-xl flex items-center justify-center gap-2">
              <div className="w-5 h-8 bg-white/30 rounded" />
              <div className="w-5 h-8 bg-white/30 rounded" />
              <div className="w-5 h-8 bg-white/30 rounded" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 h-[35%] bg-white/15 rounded-xl flex items-center justify-center gap-2">
              <div className="w-8 h-5 bg-white/20 rounded" />
              <div className="w-8 h-5 bg-white/20 rounded" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-2 w-2 h-8 bg-gray-300 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 right-2 w-2 h-8 bg-gray-300 rounded-full" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/30 rounded-lg" />
          </div>
        </div>
      </motion.div>
    )
  }
  if (color === 'pets') {
    return (
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="text-7xl flex items-center gap-2">
          <span className="text-6xl">🐕</span>
          <span className="text-6xl">🐈</span>
        </div>
      </motion.div>
    )
  }
  return (
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
      <div className="relative w-36 h-40">
        <div className="w-full h-full bg-gradient-to-b from-green-500 to-green-600 rounded-[28px] shadow-xl relative overflow-hidden flex flex-col items-center justify-center">
          <div className="text-6xl text-white font-bold">✚</div>
          <div className="absolute bottom-8 left-4 right-4 flex justify-center gap-3">
            <div className="w-6 h-8 bg-white/20 rounded" />
            <div className="w-6 h-8 bg-white/20 rounded" />
            <div className="w-6 h-8 bg-white/20 rounded" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Category() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const category = categories.find(c => c.slug === slug)

  const [activeProfile, setActiveProfile] = useState('amanda')
  const [autoOrder, setAutoOrder] = useState(false)
  const [autoPay, setAutoPay] = useState(false)
  const [showCategoryCalendar, setShowCategoryCalendar] = useState(false)

  if (!category) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-gray-500">Категория не найдена</p>
      </div>
    )
  }

  const theme = roomThemes[category.color]
  const profileProducts = category.productsByProfile[activeProfile] || []
  const soonExpiring = profileProducts.filter(p => p.status === 'urgent' || p.status === 'warning')
  const recommended = profileProducts.filter(p => p.status === 'good').slice(0, 3)

  // Фильтруем доставки для этой категории
  const categoryDeliveries = deliverySchedule.filter(d =>
    d.items.some(item => item.category.toLowerCase() === category.name.toLowerCase())
  )

  // Определяем, какие профили есть в этой категории
  const availableProfiles = [...new Set(profileProducts.map(() => activeProfile))]
  // Показываем все профили, но фильтруем товары
  const relevantProfiles = profiles.filter(p => {
    if (category.slug === 'pets') return p.role === 'pet'
    return true
  })

  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.pageBg} pb-28`}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-5 pt-10 pb-2"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => navigate('/')}
              className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </motion.button>
            <div>
              <h1 className="text-lg font-bold text-gray-900">{category.name}</h1>
              <p className={`text-xs ${theme.accentText}`}>
                {profileProducts.length} товаров
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <AccountButton />
          </div>
        </div>

        {/* 3D Illustration */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 0.15 }}
          className="flex justify-center py-3"
        >
          <RoomIllustration color={category.color} />
        </motion.div>

        {/* Табы профилей */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
          {relevantProfiles.map((profile) => {
            const isActive = profile.id === activeProfile
            return (
              <motion.button
                key={profile.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveProfile(profile.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-[14px] text-xs font-medium whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? `${theme.accentBg} text-white shadow-md`
                    : 'bg-white/80 text-gray-600'
                }`}
              >
                <span>{profile.icon}</span>
                {profile.name}
              </motion.button>
            )
          })}
        </div>
      </motion.header>

      {/* Скоро закончится */}
      {soonExpiring.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="px-5 mb-3"
        >
          <h3 className="font-semibold text-gray-700 text-sm mb-2 flex items-center gap-1.5">
            <AlertCircle size={14} className="text-red-500" />
            Скоро закончится
          </h3>
          <div className="space-y-2">
            {soonExpiring.map((product, index) => {
              const config = statusConfig[product.status]
              const Icon = config.icon
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.06 }}
                  className="bg-white rounded-[16px] p-3.5 shadow-sm flex items-center gap-3"
                >
                  <Icon size={18} className={config.text} />
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {product.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm">{product.name}</h4>
                    <p className="text-gray-400 text-xs truncate">{product.desc}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{product.category}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-gray-900 text-sm">{product.price}</p>
                    <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-medium ${config.bg} ${config.text} mt-1`}>
                      {config.label}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* Все продукты профиля */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="px-5 mb-3"
      >
        <h3 className="font-semibold text-gray-700 text-sm mb-2 flex items-center gap-1.5">
          <ShoppingCart size={14} className={theme.accentText} />
          Все продукты
        </h3>
        <div className="space-y-2">
          {profileProducts.map((product, index) => {
            const config = statusConfig[product.status]
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.06 }}
                whileHover={{ scale: 1.01, y: -1 }}
                className="bg-white rounded-[16px] p-3.5 shadow-sm flex items-center gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {product.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 text-sm">{product.name}</h4>
                  <p className="text-gray-400 text-xs truncate">{product.desc}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{product.category}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-gray-900 text-sm">{product.price}</p>
                  <p className="text-[10px] text-gray-400">{product.date}</p>
                  <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-medium ${config.bg} ${config.text} mt-1`}>
                    {config.label}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Рекомендованные */}
      {recommended.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="px-5 mb-3"
        >
          <h3 className="font-semibold text-gray-700 text-sm mb-2 flex items-center gap-1.5">
            <Sparkles size={14} className="text-purple-500" />
            Рекомендуем
          </h3>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
            {recommended.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.08 }}
                className="bg-white rounded-[16px] p-3 shadow-sm flex-shrink-0 w-36 cursor-pointer"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl mx-auto mb-2">
                  {product.icon}
                </div>
                <h4 className="font-semibold text-gray-800 text-xs text-center">{product.name}</h4>
                <p className="text-gray-400 text-[10px] text-center mt-0.5">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Автозаказ и автооплата */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="px-5 mb-3"
      >
        <div className="bg-white rounded-[20px] p-4 shadow-sm">
          <h3 className="font-semibold text-gray-700 text-sm mb-3 flex items-center gap-1.5">
            <CreditCard size={14} className={theme.accentText} />
            Автозаказ и автооплата
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart size={16} className="text-gray-500" />
                <span className="text-sm text-gray-700">Автозаказ товаров</span>
              </div>
              <button
                onClick={() => setAutoOrder(!autoOrder)}
                className={`relative w-11 h-6 rounded-full transition-colors ${autoOrder ? theme.accentBg : 'bg-gray-300'}`}
              >
                <motion.div
                  animate={{ x: autoOrder ? 22 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute top-0.5 left-0 w-5 h-5 bg-white rounded-full shadow"
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard size={16} className="text-gray-500" />
                <span className="text-sm text-gray-700">Автооплата</span>
              </div>
              <button
                onClick={() => setAutoPay(!autoPay)}
                disabled={!autoOrder}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  autoPay ? theme.accentBg : 'bg-gray-300'
                } ${!autoOrder ? 'opacity-50' : ''}`}
              >
                <motion.div
                  animate={{ x: autoPay ? 22 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute top-0.5 left-0 w-5 h-5 bg-white rounded-full shadow"
                />
              </button>
            </div>

            {autoOrder && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-gray-50 rounded-[12px] p-3 text-xs text-gray-600"
              >
                <p>✅ Автозаказ активирован для профиля:</p>
                <p className="font-semibold mt-1">
                  {profiles.find(p => p.id === activeProfile)?.icon}{' '}
                  {profiles.find(p => p.id === activeProfile)?.name}
                </p>
                {autoPay && <p className="mt-1">💳 Автооплата через привязанную карту</p>}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Мини-календарь категории */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="px-5 mb-4"
      >
        <button
          onClick={() => setShowCategoryCalendar(!showCategoryCalendar)}
          className="w-full bg-white rounded-[20px] p-4 shadow-sm text-left"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-700 text-sm flex items-center gap-1.5">
              <CalendarIcon size={14} className={theme.accentText} />
              Календарь доставок
            </h3>
            <motion.span
              animate={{ rotate: showCategoryCalendar ? 180 : 0 }}
              className="text-gray-400 text-sm"
            >
              ▼
            </motion.span>
          </div>

          <AnimatePresence>
            {showCategoryCalendar && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 space-y-2"
              >
                {categoryDeliveries.length > 0 ? (
                  categoryDeliveries.map((delivery, i) => (
                    <motion.div
                      key={delivery.date}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-gray-50 rounded-[12px] p-3"
                    >
                      <p className="text-xs font-semibold text-gray-700 mb-1">
                        📅 {delivery.day} {delivery.month}
                      </p>
                      <div className="space-y-1">
                        {delivery.items
                          .filter(item => item.category.toLowerCase() === category.name.toLowerCase())
                          .map((item, j) => (
                            <div key={j} className="flex items-center gap-2 text-xs text-gray-600">
                              <span>{item.icon}</span>
                              <span>{item.name}</span>
                              <span className="text-gray-400">· {item.profile}</span>
                            </div>
                          ))}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-xs text-gray-400 text-center py-2">Запланированных доставок нет</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      <BottomNav theme={theme} />
    </div>
  )
}
