import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage'
import { ContactPage } from './components/pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
