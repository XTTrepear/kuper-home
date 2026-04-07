import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft, ShoppingCart, CreditCard, Calendar as CalendarIcon,
  CheckCircle, AlertCircle, XCircle, Sparkles
} from 'lucide-react'
import { categories, profiles, deliverySchedule } from '../data/products'
import BottomNav from './BottomNav'
import AccountButton from './AccountButton'

const roomThemes = {
  kitchen: {
    pageBg: 'from-lime-50 to-lime-100 dark:from-gray-900 dark:to-gray-800',
    accentBg: 'bg-lime-400',
    accentText: 'text-lime-700 dark:text-lime-400',
    accentLight: 'bg-lime-100 dark:bg-lime-900/30',
    upgradeBg: 'bg-lime-400',
    upgradeText: 'text-lime-900',
    icon: '🧊',
    navActive: 'bg-lime-400',
  },
  bathroom: {
    pageBg: 'from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800',
    accentBg: 'bg-blue-400',
    accentText: 'text-blue-700 dark:text-blue-400',
    accentLight: 'bg-blue-100 dark:bg-blue-900/30',
    upgradeBg: 'bg-blue-900',
    upgradeText: 'text-white',
    icon: '🛁',
    navActive: 'bg-blue-400',
  },
  pets: {
    pageBg: 'from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800',
    accentBg: 'bg-yellow-400',
    accentText: 'text-yellow-700 dark:text-yellow-400',
    accentLight: 'bg-yellow-100 dark:bg-yellow-900/30',
    upgradeBg: 'bg-yellow-400',
    upgradeText: 'text-yellow-900',
    icon: '🐾',
    navActive: 'bg-yellow-400',
  },
  medicine: {
    pageBg: 'from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800',
    accentBg: 'bg-green-500',
    accentText: 'text-green-700 dark:text-green-400',
    accentLight: 'bg-green-100 dark:bg-green-900/30',
    upgradeBg: 'bg-green-700',
    upgradeText: 'text-white',
    icon: '🩹',
    navActive: 'bg-green-500',
  },
}

const statusConfig = {
  good: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-400', label: 'В норме', icon: CheckCircle },
  warning: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-400', label: 'Заканчивается', icon: AlertCircle },
  urgent: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-400', label: 'Критично', icon: XCircle },
}

// ========================
// 3D-иллюстрации — Soft Cute, объёмные
// ========================
function RoomIllustration({ color }) {
  // Кухня — объёмный холодильник с улыбкой
  if (color === 'kitchen') {
    return (
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="icon-3d"
      >
        <div className="relative w-44 h-52">
          {/* Тень под холодильником */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-36 h-4 bg-black/10 rounded-full blur-md" />
          {/* Корпус */}
          <div className="w-full h-full bg-gradient-to-b from-lime-300 via-lime-400 to-lime-500 rounded-[36px] shadow-2xl relative overflow-hidden">
            {/* Блик сверху */}
            <div className="absolute top-2 left-3 right-8 h-6 bg-white/30 rounded-full blur-sm" />
            {/* Левая тень */}
            <div className="absolute left-0 top-0 w-5 h-full bg-lime-600/25 rounded-l-[36px]" />
            {/* Правый блик */}
            <div className="absolute right-2 top-4 w-3 h-20 bg-white/20 rounded-full" />
            {/* Верхняя дверца */}
            <div className="absolute top-5 left-6 right-6 h-[42%] bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
              {/* Глаза */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-gray-800 rounded-full relative">
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <div className="w-4 h-4 bg-gray-800 rounded-full relative">
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </div>
              {/* Улыбка */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-3 border-b-[3px] border-gray-800 rounded-full" />
              {/* Румянец */}
              <div className="absolute bottom-5 left-5 w-3 h-2 bg-pink-300/40 rounded-full" />
              <div className="absolute bottom-5 right-5 w-3 h-2 bg-pink-300/40 rounded-full" />
            </div>
            {/* Нижняя дверца */}
            <div className="absolute bottom-5 left-6 right-6 h-[40%] bg-white/10 rounded-2xl flex items-center justify-center gap-6 backdrop-blur-sm border border-white/10">
              <div className="w-9 h-12 bg-white/15 rounded-lg shadow-inner" />
              <div className="w-9 h-12 bg-white/15 rounded-lg shadow-inner" />
            </div>
            {/* Ручки */}
            <div className="absolute top-[22%] left-2.5 w-2.5 h-12 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full shadow-md" />
            <div className="absolute bottom-[18%] left-2.5 w-2.5 h-12 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full shadow-md" />
          </div>
        </div>
      </motion.div>
    )
  }

  // Ванная — объёмный шкафчик с зеркалом
  if (color === 'bathroom') {
    return (
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="icon-3d"
      >
        <div className="relative w-44 h-48">
          {/* Тень */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-36 h-4 bg-black/10 rounded-full blur-md" />
          {/* Корпус */}
          <div className="w-full h-full bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500 rounded-[32px] shadow-2xl relative overflow-hidden">
            {/* Блик сверху */}
            <div className="absolute top-2 left-3 right-8 h-5 bg-white/30 rounded-full blur-sm" />
            {/* Левая тень */}
            <div className="absolute left-0 top-0 w-5 h-full bg-blue-600/25 rounded-l-[32px]" />
            {/* Правый блик */}
            <div className="absolute right-2 top-4 w-3 h-16 bg-white/20 rounded-full" />
            {/* Зеркало (центральная часть) */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-20 bg-gradient-to-b from-blue-100/40 to-blue-200/30 rounded-xl border-2 border-white/20 shadow-inner flex items-center justify-center overflow-hidden">
              {/* Отражение */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rotate-12" />
              {/* Маленький блик */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-white/40 rounded-full blur-[1px]" />
              {/* Силуэт */}
              <div className="w-6 h-6 bg-white/20 rounded-full mt-2" />
            </div>
            {/* Полка верхняя */}
            <div className="absolute top-8 left-4 right-4 h-[25%] bg-white/10 rounded-xl flex items-end justify-center gap-1.5 px-2 pb-1 backdrop-blur-sm border border-white/10">
              {/* Пузырёк 1 */}
              <div className="w-4 h-6 bg-pink-300/50 rounded-t-sm shadow-sm">
                <div className="w-2 h-1.5 bg-pink-400/50 rounded-t-sm mx-auto" />
              </div>
              {/* Пузырёк 2 */}
              <div className="w-4 h-7 bg-cyan-300/50 rounded-t-sm shadow-sm">
                <div className="w-2 h-1.5 bg-cyan-400/50 rounded-t-sm mx-auto" />
              </div>
              {/* Пузырёк 3 */}
              <div className="w-4 h-5 bg-yellow-300/50 rounded-t-sm shadow-sm">
                <div className="w-2 h-1.5 bg-yellow-400/50 rounded-t-sm mx-auto" />
              </div>
            </div>
            {/* Полка нижняя */}
            <div className="absolute bottom-5 left-4 right-4 h-[22%] bg-white/10 rounded-xl flex items-center justify-center gap-3 backdrop-blur-sm border border-white/10">
              <div className="w-8 h-4 bg-white/15 rounded shadow-inner" />
              <div className="w-8 h-4 bg-white/15 rounded shadow-inner" />
            </div>
            {/* Ручки */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2.5 w-2.5 h-9 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full shadow-md" />
            <div className="absolute top-1/2 -translate-y-1/2 right-2.5 w-2.5 h-9 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full shadow-md" />
            {/* Румянец на корпусе */}
            <div className="absolute bottom-12 left-8 w-3 h-2 bg-pink-300/30 rounded-full" />
            <div className="absolute bottom-12 right-8 w-3 h-2 bg-pink-300/30 rounded-full" />
          </div>
        </div>
      </motion.div>
    )
  }

  // Питомцы — миска с кормом + косточка
  if (color === 'pets') {
    return (
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="icon-3d"
      >
        <div className="relative w-44 h-44">
          {/* Тень */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-3 bg-black/10 rounded-full blur-md" />
          {/* Миска */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-b-[40px] rounded-t-lg shadow-xl relative overflow-hidden">
            {/* Блик */}
            <div className="absolute top-1 left-2 w-6 h-3 bg-white/30 rounded-full blur-[1px]" />
            {/* Корм внутри */}
            <div className="absolute top-0 left-3 right-3 h-4 bg-gradient-to-b from-amber-600/60 to-amber-700/60 rounded-b-lg" />
            {/* Сердечко на миске */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-lg">❤️</div>
          </div>
          {/* Косточка */}
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-4 right-6 text-5xl icon-3d"
          >
            🦴
          </motion.div>
          {/* Лапка */}
          <motion.div
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute top-6 left-8 text-4xl icon-3d"
          >
            🐾
          </motion.div>
          {/* Румянец */}
          <div className="absolute top-1/2 left-6 w-3 h-2 bg-pink-300/30 rounded-full" />
          <div className="absolute top-1/2 right-6 w-3 h-2 bg-pink-300/30 rounded-full" />
        </div>
      </motion.div>
    )
  }

  // Аптечка — объёмный ящик с крестом
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="icon-3d"
    >
      <div className="relative w-40 h-44">
        {/* Тень */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-3 bg-black/10 rounded-full blur-md" />
        {/* Корпус */}
        <div className="w-full h-full bg-gradient-to-b from-green-400 via-green-500 to-green-600 rounded-[32px] shadow-2xl relative overflow-hidden">
          {/* Блик */}
          <div className="absolute top-2 left-3 right-8 h-5 bg-white/25 rounded-full blur-sm" />
          {/* Левая тень */}
          <div className="absolute left-0 top-0 w-5 h-full bg-green-700/25 rounded-l-[32px]" />
          {/* Крест */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2">
            <div className="relative w-14 h-14">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-14 bg-white rounded-md shadow-md" />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-14 h-4 bg-white rounded-md shadow-md" />
            </div>
          </div>
          {/* Полка снизу */}
          <div className="absolute bottom-6 left-5 right-5 h-[25%] bg-white/10 rounded-xl flex items-center justify-center gap-2 backdrop-blur-sm border border-white/10">
            <div className="w-4 h-6 bg-white/20 rounded shadow-inner" />
            <div className="w-4 h-5 bg-white/15 rounded shadow-inner" />
            <div className="w-4 h-7 bg-white/20 rounded shadow-inner" />
          </div>
          {/* Румянец */}
          <div className="absolute bottom-20 left-7 w-3 h-2 bg-pink-300/30 rounded-full" />
          <div className="absolute bottom-20 right-7 w-3 h-2 bg-pink-300/30 rounded-full" />
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
      <div className="flex items-center justify-center h-screen" style={{ background: 'var(--bg-primary)' }}>
        <p style={{ color: 'var(--text-muted)' }}>Категория не найдена</p>
      </div>
    )
  }

  const theme = roomThemes[category.color]
  const profileProducts = category.productsByProfile[activeProfile] || []
  const soonExpiring = profileProducts.filter(p => p.status === 'urgent' || p.status === 'warning')
  const recommended = profileProducts.filter(p => p.status === 'good').slice(0, 3)
  const categoryDeliveries = deliverySchedule.filter(d =>
    d.items.some(item => item.category.toLowerCase() === category.name.toLowerCase())
  )

  const relevantProfiles = profiles.filter(p => {
    if (category.slug === 'pets') return p.role === 'pet'
    return true
  })

  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.pageBg} pb-28 transition-colors duration-300`}>
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
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
              style={{ background: 'var(--bg-secondary)' }}
            >
              <ArrowLeft size={20} style={{ color: 'var(--text-secondary)' }} />
            </motion.button>
            <div>
              <h1 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{category.name}</h1>
              <p className={`text-xs ${theme.accentText}`}>
                {profileProducts.length} товаров
              </p>
            </div>
          </div>
          <AccountButton />
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
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
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
                    : 'text-gray-600 dark:text-gray-400'
                }`}
                style={!isActive ? { background: 'var(--bg-tertiary)' } : {}}
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
          <h3 className="font-semibold text-sm mb-2 flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
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
                  className="rounded-[16px] p-3.5 shadow-sm flex items-center gap-3"
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <Icon size={18} className={config.text} />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 icon-3d" style={{ background: 'var(--bg-tertiary)' }}>
                    {product.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{product.name}</h4>
                    <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>{product.desc}</p>
                    <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{product.category}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{product.price}</p>
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
        <h3 className="font-semibold text-sm mb-2 flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
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
                className="rounded-[16px] p-3.5 shadow-sm flex items-center gap-3 cursor-pointer"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 icon-3d" style={{ background: 'var(--bg-tertiary)' }}>
                  {product.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{product.name}</h4>
                  <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>{product.desc}</p>
                  <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{product.category}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{product.price}</p>
                  <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{product.date}</p>
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
          <h3 className="font-semibold text-sm mb-2 flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
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
                className="rounded-[16px] p-3 shadow-sm flex-shrink-0 w-36 cursor-pointer"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mx-auto mb-2 icon-3d" style={{ background: 'var(--bg-tertiary)' }}>
                  {product.icon}
                </div>
                <h4 className="font-semibold text-xs text-center" style={{ color: 'var(--text-primary)' }}>{product.name}</h4>
                <p className="text-[10px] text-center mt-0.5" style={{ color: 'var(--text-muted)' }}>{product.price}</p>
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
        <div className="rounded-[20px] p-4 shadow-sm" style={{ background: 'var(--bg-secondary)' }}>
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
            <CreditCard size={14} className={theme.accentText} />
            Автозаказ и автооплата
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart size={16} style={{ color: 'var(--text-muted)' }} />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Автозаказ товаров</span>
              </div>
              <button
                onClick={() => setAutoOrder(!autoOrder)}
                className={`relative w-11 h-6 rounded-full transition-colors ${autoOrder ? theme.accentBg : 'bg-gray-300 dark:bg-gray-600'}`}
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
                <CreditCard size={16} style={{ color: 'var(--text-muted)' }} />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Автооплата</span>
              </div>
              <button
                onClick={() => setAutoPay(!autoPay)}
                disabled={!autoOrder}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  autoPay ? theme.accentBg : 'bg-gray-300 dark:bg-gray-600'
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
                className="rounded-[12px] p-3 text-xs"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                <p>✅ Автозаказ активирован для профиля:</p>
                <p className="font-semibold mt-1" style={{ color: 'var(--text-primary)' }}>
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
          className="w-full rounded-[20px] p-4 shadow-sm text-left"
          style={{ background: 'var(--bg-secondary)' }}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
              <CalendarIcon size={14} className={theme.accentText} />
              Календарь доставок
            </h3>
            <motion.span
              animate={{ rotate: showCategoryCalendar ? 180 : 0 }}
              className="text-sm"
              style={{ color: 'var(--text-muted)' }}
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
                      className="rounded-[12px] p-3"
                      style={{ background: 'var(--bg-tertiary)' }}
                    >
                      <p className="text-xs font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                        📅 {delivery.day} {delivery.month}
                      </p>
                      <div className="space-y-1">
                        {delivery.items
                          .filter(item => item.category.toLowerCase() === category.name.toLowerCase())
                          .map((item, j) => (
                            <div key={j} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                              <span>{item.icon}</span>
                              <span>{item.name}</span>
                              <span style={{ color: 'var(--text-muted)' }}>· {item.profile}</span>
                            </div>
                          ))}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-xs text-center py-2" style={{ color: 'var(--text-muted)' }}>Запланированных доставок нет</p>
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
