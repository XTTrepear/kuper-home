import { motion } from 'framer-motion'
import { Calendar, Home, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function BottomNav({ theme }) {
  const location = useLocation()

  const navItems = [
    { icon: Calendar, path: '/calendar', label: 'Календарь' },
    { icon: Home, path: '/', label: 'Главная' },
    { icon: Settings, path: '/settings', label: 'Настройки' },
  ]

  const activeColor = theme?.navActive || 'bg-lime-400'

  const getActiveIndex = () => {
    const hashPath = location.pathname || '/'
    const idx = navItems.findIndex(item => item.path === hashPath)
    return idx >= 0 ? idx : 1
  }

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="absolute bottom-0 left-0 right-0 z-50"
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-t-[28px] shadow-[0_-4px_30px_rgba(0,0,0,0.08)] border-t border-white/50 px-4 py-4 mx-1 mb-1">
        <div className="flex items-center justify-around">
          {navItems.map((item, index) => {
            const IconComponent = item.icon
            const isActive = index === getActiveIndex()

            return (
              <Link key={item.label} to={item.path} className="flex-1 flex justify-center">
                <motion.div
                  whileTap={{ scale: 0.92 }}
                  className={`flex flex-col items-center gap-1 py-2 px-4 rounded-[18px] transition-all ${
                    isActive
                      ? `${activeColor} shadow-lg scale-105`
                      : 'bg-gray-50/80 hover:bg-gray-100/80'
                  }`}
                >
                  <IconComponent
                    size={24}
                    className={isActive ? 'text-white' : 'text-gray-400'}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className={`text-[10px] font-medium ${
                    isActive ? 'text-white/90' : 'text-gray-400'
                  }`}>
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}
