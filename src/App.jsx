import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Category from './components/Category'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex justify-center">
        <div className="w-full max-w-[430px] bg-white min-h-screen relative shadow-2xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<Category />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
