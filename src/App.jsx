import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './Screens/Portfolio'
import About from './Screens/About'
import Contact from './Screens/Contact'
// import Sidebar from './Components/Sidebar/Sidebar'
import MainPage from './Screens/MainPage'
import Resume from './Screens/Resume'

const App = () => {
  return (
    <div className='App'>

    <Routes>
      <Route path='/' element={<MainPage/>}>
      <Route path='/' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App
