import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { categories, smartSets } from '../data/products'
import BottomNav from './BottomNav'

// Цвета для карточек комнат
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
  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pt-14 pb-2 text-center"
      >
        <h1 className="text-2xl font-bold text-gray-900">Что вам нужно сегодня?</h1>
        <p className="text-gray-500 text-sm mt-1">Выберите категорию</p>
      </motion.header>

      {/* Room Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="px-6 mb-8 space-y-3"
      >
        {categories.map((cat, index) => {
          const style = roomStyles[cat.color]
          return (
            <Link key={cat.slug} to={`/category/${cat.slug}`}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.3, type: 'spring' }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`bg-gradient-to-r ${style.gradient} rounded-[20px] p-5 flex items-center justify-between cursor-pointer shadow-lg`}
              >
                <div>
                  <h3 className="text-lg font-bold text-white drop-shadow">{cat.name}</h3>
                </div>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="text-5xl drop-shadow-lg"
                >
                  {style.icon}
                </motion.div>
              </motion.div>
            </Link>
          )
        })}
      </motion.div>

      {/* Smart Sets */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="px-6"
      >
        <h2 className="text-base font-semibold text-gray-800 mb-3">Умные сеты для семьи</h2>
        <div className="grid grid-cols-2 gap-3">
          {smartSets.map((set, index) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`${set.color} rounded-[16px] p-3.5 flex items-center gap-2.5 cursor-pointer shadow-sm`}
            >
              <span className="text-2xl">{set.icon}</span>
              <span className="text-xs font-medium text-gray-800 leading-tight">{set.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <BottomNav activeIndex={0} />
    </div>
  )
}
