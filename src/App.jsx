import { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Category from './components/Category'
import CalendarPage from './components/Calendar'
import Settings from './components/Settings'
import Assistant from './components/Assistant'

function App() {
  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem('settings_darkmode') ?? 'false')
    document.documentElement.classList.toggle('dark', darkMode)
  }, [])

  // Слушаем изменения localStorage (для Settings toggle)
  useEffect(() => {
    const handler = () => {
      const darkMode = JSON.parse(localStorage.getItem('settings_darkmode') ?? 'false')
      document.documentElement.classList.toggle('dark', darkMode)
    }
    window.addEventListener('storage', handler)
    // Polling для реактивности внутри одной страницы
    const interval = setInterval(handler, 500)
    return () => {
      window.removeEventListener('storage', handler)
      clearInterval(interval)
    }
  }, [])

  return (
    <HashRouter>
      <div className="min-h-screen flex justify-center transition-colors duration-300" style={{ background: 'var(--bg-primary)' }}>
        <div className="w-full max-w-[430px] min-h-screen relative shadow-2xl transition-colors duration-300" style={{ background: 'var(--bg-primary)' }}>
          {/* Декоративные блобы */}
          <div className="blob w-64 h-64 bg-lime-400 -top-20 -left-20" />
          <div className="blob w-48 h-48 bg-blue-400 top-40 -right-16" />
          <div className="blob w-56 h-56 bg-yellow-300 bottom-60 -left-10" />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
