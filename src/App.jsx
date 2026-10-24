
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import Info from './Pages/Info'
import Saved from './Pages/Saved'
import View from './Pages/View'
import Download from './Pages/Download'
import Pnf from './Pages/Pnf'
import Header from './Components/Header'
import Footer from './Components/Footer'
  import { ToastContainer,  } from 'react-toastify';



function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/resume details' element={<Info />} />
        <Route path='/all resumes' element={<Saved />} />
        <Route path='/resume/:id' element={<View />} />
        <Route path='/downloads' element={<Download />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
       <Footer />
       <ToastContainer position="top-center" theme="colored" autoClose={3000} />

    </>
  )
}

export default App
