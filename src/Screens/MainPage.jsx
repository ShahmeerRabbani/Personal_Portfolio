import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className='h-screen flex  font-[Poppins]'>
      <Sidebar/>
      <div className='display_wrapper'>
      <Outlet/>
      </div>
    </div>
  )
}

export default MainPage
