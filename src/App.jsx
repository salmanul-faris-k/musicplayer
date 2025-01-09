
import { Route, Routes } from 'react-router-dom'
import './App.css'
import History from './Pages/History'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import './bootstrap.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { ToastContainer, toast } from 'react-toastify';
function App() {


  return (
    <>
    <ToastContainer
position="top-center"
theme="light"
/>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
    <Route path='/home' element={<Home/>}/>
    
     <Route path='/hiatory' element={ <History/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
