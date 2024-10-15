import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute right-0'>
    <ul className='flex gap-5 h-14 bg-slate-700 px-10 justify-center items-center' style={{borderTopRightRadius: '24px'}}>
        <NavLink to='/'>About</NavLink>
        <NavLink to='/resume'>Resume</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </ul>
    </div>
  )
}

export default Navbar