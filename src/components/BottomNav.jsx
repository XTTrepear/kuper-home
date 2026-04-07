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
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="w-full max-w-[430px] rounded-t-[28px] shadow-[0_-4px_30px_rgba(0,0,0,0.08)] border-t px-2 py-3 mx-auto mb-1 glass"
      >
        <div className="flex items-center justify-center gap-2">
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
                      : 'hover:bg-gray-100/80 dark:hover:bg-gray-700/50'
                  }`}
                  style={!isActive ? { background: 'var(--bg-tertiary)' } : {}}
                >
                  <IconComponent
                    size={24}
                    className={isActive ? 'text-white' : ''}
                    style={!isActive ? { color: 'var(--text-muted)' } : {}}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span
                    className="text-[10px] font-medium"
                    style={isActive ? { color: 'white' } : { color: 'var(--text-muted)' }}
                  >
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </motion.div>
    </nav>
  )
}
