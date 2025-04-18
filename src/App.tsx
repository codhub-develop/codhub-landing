import { MainLayout } from './components/layouts/MainLayout'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage'
import { ContactPage } from './components/pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<ContactPage />} />
      </Routes>
    </MainLayout>
    </BrowserRouter>
  )
}

export default App
