import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { categories } from '../data/products'
import BottomNav from './BottomNav'

// Тема для каждой комнаты
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

// 3D-иллюстрации для каждой комнаты
function RoomIllustration({ color }) {
  if (color === 'kitchen') {
    return (
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative w-44 h-52">
          {/* Мягкий 3D холодильник с улыбающимся лицом */}
          <div className="w-full h-full bg-gradient-to-b from-lime-400 to-lime-500 rounded-[32px] shadow-2xl relative overflow-hidden">
            {/* Тень слева */}
            <div className="absolute left-0 top-0 w-4 h-full bg-lime-600/30 rounded-l-[32px]"></div>
            {/* Верхняя дверца */}
            <div className="absolute top-4 left-5 right-5 h-[45%] bg-white/20 rounded-2xl flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-2 border-b-2 border-gray-800 rounded-full"></div>
            </div>
            {/* Нижняя дверца */}
            <div className="absolute bottom-4 left-5 right-5 h-[42%] bg-white/15 rounded-2xl flex items-center justify-center gap-6">
              <div className="w-8 h-10 bg-white/20 rounded-lg"></div>
              <div className="w-8 h-10 bg-white/20 rounded-lg"></div>
            </div>
            {/* Ручки */}
            <div className="absolute top-[20%] left-2 w-2 h-10 bg-gray-300 rounded-full shadow"></div>
            <div className="absolute bottom-[18%] left-2 w-2 h-10 bg-gray-300 rounded-full shadow"></div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (color === 'bathroom') {
    return (
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative w-44 h-48">
          {/* Шкафчик с открытыми дверцами */}
          <div className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-500 rounded-[28px] shadow-2xl relative overflow-hidden">
            {/* Полки */}
            <div className="absolute top-6 left-6 right-6 h-[35%] bg-white/15 rounded-xl flex items-center justify-center gap-2">
              <div className="w-5 h-8 bg-white/30 rounded"></div>
              <div className="w-5 h-8 bg-white/30 rounded"></div>
              <div className="w-5 h-8 bg-white/30 rounded"></div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 h-[35%] bg-white/15 rounded-xl flex items-center justify-center gap-2">
              <div className="w-8 h-5 bg-white/20 rounded"></div>
              <div className="w-8 h-5 bg-white/20 rounded"></div>
            </div>
            {/* Ручки */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 w-2 h-8 bg-gray-300 rounded-full"></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 w-2 h-8 bg-gray-300 rounded-full"></div>
            {/* Зеркало */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-16 bg-white/30 rounded-lg"></div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (color === 'pets') {
    return (
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-8xl flex items-center gap-2">
          <span className="text-7xl">🐕</span>
          <span className="text-7xl">🐈</span>
          <div className="text-5xl">🍖</div>
        </div>
      </motion.div>
    )
  }

  // medicine
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="relative w-40 h-48">
        {/* Аптечка */}
        <div className="w-full h-full bg-gradient-to-b from-green-500 to-green-600 rounded-[28px] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
          {/* Красный крест */}
          <div className="text-7xl text-white font-bold">✚</div>
          {/* Полочки */}
          <div className="absolute bottom-8 left-4 right-4 flex justify-center gap-3">
            <div className="w-6 h-8 bg-white/20 rounded"></div>
            <div className="w-6 h-8 bg-white/20 rounded"></div>
            <div className="w-6 h-8 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Category() {
  const { slug } = useParams()
  const category = categories.find(c => c.slug === slug)

  if (!category) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-gray-500">Категория не найдена</p>
      </div>
    )
  }

  const theme = roomThemes[category.color]

  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.pageBg} pb-28`}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-6 pt-12 pb-2"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Привет, Amanda!</h1>
            <p className={`text-sm mt-1 ${theme.accentText}`}>{category.name}</p>
          </div>
          <div className="flex items-center gap-2.5">
            {/* Search */}
            <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            {/* Upgrade */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${theme.upgradeBg} ${theme.upgradeText} px-3 py-1.5 rounded-xl text-xs font-semibold shadow-md`}
            >
              Upgrade
            </motion.div>
          </div>
        </div>

        {/* 3D Illustration */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="flex justify-center py-4"
        >
          <RoomIllustration color={category.color} />
        </motion.div>
      </motion.header>

      {/* Today Items Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-6 mb-4"
      >
        <div className="bg-white rounded-[20px] p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-700 text-sm">Сегодня в {category.name.toLowerCase()}</h3>
            <div className={`w-2 h-2 rounded-full ${theme.accentBg}`}></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.todayItems.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`${theme.accentLight} ${theme.accentText} px-3 py-1.5 rounded-full text-xs font-medium`}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Products List Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="px-6 mb-4"
      >
        <div className="bg-white rounded-[20px] p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700 text-sm">Список продуктов</h3>
            <div className={`w-2 h-2 rounded-full ${theme.accentBg}`}></div>
          </div>
          <div className="space-y-3">
            {category.products.map((product, index) => {
              const statusBg = product.status === 'good' ? 'bg-green-400 text-white' :
                               product.status === 'warning' ? 'bg-yellow-300 text-yellow-800' :
                               'bg-red-400 text-white'
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.08 }}
                  whileHover={{ scale: 1.01, y: -1 }}
                  className="flex items-center gap-3 p-2 rounded-[16px] hover:bg-gray-50/50 cursor-pointer transition-colors"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                    {product.icon}
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm">{product.name}</h4>
                    <p className="text-gray-400 text-xs truncate">{product.desc}</p>
                  </div>
                  {/* Status badge */}
                  <span className={`${statusBg} px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0`}>
                    {product.date}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Soon Expiring */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="px-6"
      >
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-gray-700 text-sm">Скоро закончится</h3>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
        </div>
      </motion.div>

      <BottomNav theme={theme} />
    </div>
  )
}
