import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Truck, Package } from 'lucide-react'
import { deliverySchedule } from '../data/products'
import BottomNav from './BottomNav'
import AccountButton from './AccountButton'

const categoryColors = {
  'Кухня': { bg: 'bg-lime-100', text: 'text-lime-700', dot: 'bg-lime-400' },
  'Ванная': { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-400' },
  'Питомцы': { bg: 'bg-yellow-100', text: 'text-yellow-700', dot: 'bg-yellow-400' },
  'Аптечка': { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-400' },
}

const monthNames = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(3) // Апрель (0-based = 3)
  const [currentYear] = useState(2026)
  const [selectedDay, setSelectedDay] = useState(null)

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay()
  // Пн=0, Вс=6
  const startOffset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1

  const prevMonth = () => setCurrentMonth(m => (m > 0 ? m - 1 : 11))
  const nextMonth = () => setCurrentMonth(m => (m < 11 ? m + 1 : 0))

  const deliveriesForMonth = deliverySchedule.filter(d => {
    const date = new Date(d.date)
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear
  })

  const deliveryDays = deliveriesForMonth.map(d => d.day)

  const getDeliveriesForDay = (day) => {
    return deliveriesForMonth.find(d => d.day === day)
  }

  const selectedDeliveries = selectedDay ? getDeliveriesForDay(selectedDay) : null

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 pt-10 pb-3"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Календарь доставок</h1>
            <p className="text-gray-500 text-xs mt-0.5">Расписание привозов</p>
          </div>
          <AccountButton />
        </div>
      </motion.header>

      {/* Месяц навигация */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="px-5 mb-3"
      >
        <div className="bg-white rounded-[20px] p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <motion.button whileTap={{ scale: 0.9 }} onClick={prevMonth} className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center">
              <ChevronLeft size={18} className="text-gray-600" />
            </motion.button>
            <h2 className="font-bold text-gray-900 text-base">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <motion.button whileTap={{ scale: 0.9 }} onClick={nextMonth} className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center">
              <ChevronRight size={18} className="text-gray-600" />
            </motion.button>
          </div>

          {/* Дни недели */}
          <div className="grid grid-cols-7 mb-2">
            {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(d => (
              <div key={d} className="text-center text-[10px] font-medium text-gray-400 py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Сетка дней */}
          <div className="grid grid-cols-7 gap-y-1">
            {Array.from({ length: startOffset }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const hasDelivery = deliveryDays.includes(day)
              const isSelected = selectedDay === day
              const delivery = getDeliveriesForDay(day)
              const itemCategories = delivery?.items.map(item => item.category) || []

              return (
                <motion.button
                  key={day}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => hasDelivery && setSelectedDay(isSelected ? null : day)}
                  className={`relative h-10 rounded-xl flex flex-col items-center justify-center text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-lime-400 text-white shadow-md'
                      : hasDelivery
                      ? 'bg-lime-50 text-gray-800'
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <span>{day}</span>
                  {hasDelivery && (
                    <div className="flex gap-0.5 mt-0.5">
                      {itemCategories.slice(0, 3).map((cat, idx) => (
                        <span
                          key={idx}
                          className={`w-1.5 h-1.5 rounded-full ${
                            categoryColors[cat]?.dot || 'bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Легенда */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-5 mb-3"
      >
        <div className="bg-white rounded-[16px] p-3 shadow-sm flex flex-wrap gap-3">
          {Object.entries(categoryColors).map(([name, colors]) => (
            <div key={name} className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
              <span className="text-[10px] text-gray-500">{name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Детали выбранного дня */}
      <AnimatePresence>
        {selectedDeliveries && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 20, height: 0 }}
            className="px-5 mb-3 overflow-hidden"
          >
            <div className="bg-white rounded-[20px] p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Truck size={18} className="text-lime-500" />
                <h3 className="font-bold text-gray-900">
                  {selectedDeliveries.day} {monthNames[currentMonth]}
                </h3>
                <span className="text-xs text-gray-400">
                  · {selectedDeliveries.items.length} поз.
                </span>
              </div>

              <div className="space-y-2">
                {selectedDeliveries.items.map((item, index) => {
                  const catStyle = categoryColors[item.category]
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className={`flex items-center gap-3 ${catStyle?.bg || 'bg-gray-50'} rounded-[14px] p-3`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-sm ${catStyle?.text || 'text-gray-700'}`}>
                          {item.name}
                        </p>
                        <p className="text-[10px] text-gray-500">{item.category} · {item.profile}</p>
                      </div>
                      <Package size={14} className="text-gray-400 flex-shrink-0" />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Список всех доставок */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="px-5"
      >
        <h3 className="font-semibold text-gray-700 text-sm mb-2 flex items-center gap-1.5">
          <Truck size={14} className="text-lime-500" />
          Все доставки месяца
        </h3>
        <div className="space-y-2">
          {deliveriesForMonth.map((delivery, index) => (
            <motion.div
              key={delivery.date}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + index * 0.06 }}
              onClick={() => setSelectedDay(selectedDay === delivery.day ? null : delivery.day)}
              className={`bg-white rounded-[16px] p-3.5 shadow-sm cursor-pointer ${
                selectedDay === delivery.day ? 'ring-2 ring-lime-400' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Truck size={16} className="text-lime-500" />
                  <span className="font-semibold text-gray-900 text-sm">
                    {delivery.day} {monthNames[currentMonth]}
                  </span>
                </div>
                <span className="text-xs text-gray-400">{delivery.items.length} товаров</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {delivery.items.map((item, i) => {
                  const catStyle = categoryColors[item.category]
                  return (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium ${
                        catStyle?.bg || 'bg-gray-50'
                      } ${catStyle?.text || 'text-gray-600'}`}
                    >
                      {item.icon} {item.name}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <BottomNav />
    </div>
  )
}
