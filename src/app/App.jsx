import Preloader from '@widgets/Preloader/Preloader'
import Navbar from '@widgets/Navbar/Navbar'
import Footer from '@widgets/Footer/Footer'
import Sidebar from '@widgets/Sidebar/Sidebar'
import Auth from '@widgets/Auth/Auth'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Brands from '../page/brands/Brands'
import Model from '../page/model/Model'
import Generation from '../page/generation/Generation'
import Home from '../page/home/Home'
import { useAuth } from '../provider/AuthProvider'

function App() {
  const { user } = useAuth()


  return (
    <BrowserRouter>
      {
        !user ? (
          <div className="wrapper">
            <Preloader />
            <Navbar />
            <Sidebar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/brand' element={<Brands />} />
              <Route path='/model' element={<Model />} />
              <Route path='/generation' element={<Generation />} />
            </Routes>
            <Footer />
          </div>
        ) : (
          <Routes>
            <Route path='/' element={<Navigate to="/login" replace />} />
            <Route path='/login' element={<Auth />} />
          </Routes>

        )
      }



    </BrowserRouter>

  )
}

export default App
