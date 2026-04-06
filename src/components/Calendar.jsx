import { motion } from 'framer-motion'
import BottomNav from './BottomNav'

export default function Calendar() {
  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pt-14 pb-4"
      >
        <h1 className="text-2xl font-bold text-gray-900">Календарь</h1>
        <p className="text-gray-500 text-sm mt-1">Расписание</p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="px-6"
      >
        <div className="bg-white rounded-[20px] p-8 shadow-sm text-center">
          <p className="text-5xl mb-4">📅</p>
          <p className="text-gray-500">Календарь скоро появится</p>
        </div>
      </motion.div>

      <BottomNav />
    </div>
  )
}
