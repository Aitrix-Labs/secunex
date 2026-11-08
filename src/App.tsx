import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import GetStartedPage from './pages/GetStartedPage'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter basename="/secunexhp">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
