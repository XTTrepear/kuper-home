import { motion } from 'framer-motion'
import { List, Calendar, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

// SVG иконка лапки
function PawIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 18c-2.5 0-4.5-1.5-5-3.5C6.5 12.5 7 10 9 9c1-.5 2-.5 3 0s2-.5 3 0c2 1 2.5 3.5 2 5.5-.5 2-2.5 3.5-5 3.5z"/>
      <circle cx="6" cy="7" r="2"/>
      <circle cx="18" cy="7" r="2"/>
      <circle cx="4" cy="11" r="1.5"/>
      <circle cx="20" cy="11" r="1.5"/>
    </svg>
  )
}

export default function BottomNav({ theme, activeIndex = 0 }) {
  const location = useLocation()

  const navItems = [
    { icon: PawIcon, path: '/', label: 'rooms' },
    { icon: List, path: '/', label: 'list' },
    { icon: Calendar, path: '/', label: 'calendar' },
    { icon: Settings, path: '/', label: 'settings' },
  ]

  const activeColor = theme?.navActive || 'bg-lime-400'

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="absolute bottom-0 left-0 right-0 z-50"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-t-[20px] shadow-lg border-t border-gray-100 px-8 py-3 mx-2 mb-2">
        <div className="flex items-center justify-around">
          {navItems.map((item, index) => {
            const IconComponent = item.icon
            const isActive = index === activeIndex

            return (
              <Link key={item.label} to={item.path}>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-2.5 rounded-[16px] ${
                    isActive ? `${activeColor}` : ''
                  }`}
                >
                  {item.label === 'rooms' ? (
                    <IconComponent
                      size={22}
                      className={isActive ? 'text-white' : 'text-gray-300'}
                    />
                  ) : (
                    <IconComponent
                      size={22}
                      className={isActive ? 'text-white' : 'text-gray-300'}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  )}
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}
