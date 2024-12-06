import Preloader from '@widgets/Preloader/Preloader'
import Navbar from '@widgets/Navbar/Navbar'
import Footer from '@widgets/Footer/Footer'
import Sidebar from '@widgets/Sidebar/Sidebar'
//import Auth from '@widgets/Auth/Auth'
import ContentHeader from '@shared/Header/ContentHeader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      {/*<Auth />*/}

      <div className="wrapper">
        <Preloader />
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<ContentHeader title='Главная страница' />} />
          <Route path='/brand' element={<ContentHeader title='Бренды' />} />
          <Route path='/model' element={<ContentHeader title='Модели' />} />
          <Route path='/generation' element={<ContentHeader title='Поколения' />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>

  )
}

export default App
