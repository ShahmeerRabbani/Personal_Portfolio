import React, { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './Screens/Portfolio'
import About from './Screens/About'
import Contact from './Screens/Contact'
// import Sidebar from './Components/Sidebar/Sidebar'
import MainPage from './Screens/MainPage'
import Resume from './Screens/Resume'

const App = () => {

  const [text, setText] = useState('Loading...');

   useEffect(() => {
    let letters = " ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&?Æ∳⨊Δῼϻϕ§₰©ϕϟ⩏ʤ€";
    let iteration = 0;
   const interval = setInterval(() => {
      
      setText((prev) => 
        prev.split('').map((el, ind) => {
          if(ind < iteration){
            return text[ind]
          }

          return letters[Math.floor(Math.random() * letters.length)]
        }).join('')
    )
    iteration += 1/5

    if(iteration > text.length){
      clearInterval(interval)
    }
    }, 100)}, [])

    

  return (
    <React.Fragment>

    <div className='Loader'>
      <p data-value={text}>{text}</p>
    </div>

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
    </React.Fragment>
  )
}

export default App
