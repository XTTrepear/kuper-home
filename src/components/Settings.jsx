import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, Globe, Moon, ChevronRight, Check, Crown, ChevronDown } from 'lucide-react'
import BottomNav from './BottomNav'
import AccountButton from './AccountButton'
import SubscriptionCard from './SubscriptionCard'

const LANGUAGES = [
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
]

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-12 h-7 rounded-full transition-colors ${checked ? 'bg-lime-400' : 'bg-gray-300'}`}
    >
      <motion.div
        animate={{ x: checked ? 22 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute top-0.5 left-0 w-6 h-6 bg-white rounded-full shadow"
      />
    </button>
  )
}

export default function Settings() {
  const [notifications, setNotifications] = useState(() => {
    return JSON.parse(localStorage.getItem('settings_notifications') ?? 'true')
  })
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('settings_darkmode') ?? 'false')
  })
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('settings_language') ?? 'ru'
  })
  const [showLangPicker, setShowLangPicker] = useState(false)
  const [showSubscription, setShowSubscription] = useState(false)

  useEffect(() => {
    localStorage.setItem('settings_notifications', JSON.stringify(notifications))
  }, [notifications])

  useEffect(() => {
    localStorage.setItem('settings_darkmode', JSON.stringify(darkMode))
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('settings_language', language)
  }, [language])

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pt-10 pb-4"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Настройки</h1>
            <p className="text-gray-500 text-xs mt-0.5">Управляйте приложением</p>
          </div>
          <AccountButton />
        </div>
      </motion.header>

      {/* Settings List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="px-6 space-y-4"
      >
        {/* Подписка */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setShowSubscription(!showSubscription)}
            className="w-full bg-gradient-to-r from-lime-300 to-lime-400 rounded-[20px] p-4 shadow-md text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/60 p-2 rounded-[12px]">
                  <Crown size={20} className="text-lime-700" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">Подписка</p>
                  <p className="text-xs text-gray-700">Про · 299 ₽/мес</p>
                </div>
              </div>
              <motion.div animate={{ rotate: showSubscription ? 180 : 0 }}>
                <ChevronDown size={18} className="text-gray-700" />
              </motion.div>
            </div>
          </button>

          <AnimatePresence>
            {showSubscription && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className="mt-3 overflow-hidden"
              >
                <SubscriptionCard />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Notifications */}
        <div className="bg-white rounded-[20px] p-5 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-lime-100 p-2.5 rounded-[14px]">
              <Bell size={20} className="text-lime-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Уведомления</p>
              <p className="text-xs text-gray-400">Push-уведомления</p>
            </div>
          </div>
          <Toggle checked={notifications} onChange={setNotifications} />
        </div>

        {/* Dark Mode */}
        <div className="bg-white rounded-[20px] p-5 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2.5 rounded-[14px]">
              <Moon size={20} className="text-gray-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Тёмная тема</p>
              <p className="text-xs text-gray-400">Тёмный фон</p>
            </div>
          </div>
          <Toggle checked={darkMode} onChange={setDarkMode} />
        </div>

        {/* Language */}
        <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
          <button
            onClick={() => setShowLangPicker(!showLangPicker)}
            className="w-full p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2.5 rounded-[14px]">
                <Globe size={20} className="text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Язык</p>
                <p className="text-xs text-gray-400">
                  {LANGUAGES.find(l => l.code === language)?.label}
                </p>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </button>

          {showLangPicker && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="border-t border-gray-100"
            >
              {LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => { setLanguage(lang.code); setShowLangPicker(false) }}
                  className="w-full px-5 py-3.5 flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="text-sm text-gray-700">{lang.label}</span>
                  {language === lang.code && <Check size={16} className="text-lime-500" />}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* App Info */}
        <div className="bg-white rounded-[20px] p-5 shadow-sm">
          <p className="text-sm text-gray-400 text-center">Kuper Home v0.2.0</p>
        </div>
      </motion.div>

      <BottomNav />
    </div>
  )
}
