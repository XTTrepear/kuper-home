import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Category from './components/Category'
import CalendarPage from './components/Calendar'
import Settings from './components/Settings'

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 flex justify-center">
        <div className="w-full max-w-[430px] bg-white min-h-screen relative shadow-2xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
