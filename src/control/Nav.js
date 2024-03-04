import './nav.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import photo from'../imag/1.webp'

const Nav = () => {
  return (
    <>
    <div className='nav'>
       <div className='profile'> 
       <img className='photo' src={photo} alt='profil'/>
       <span className='name'>lena</span>
       </div>
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/data'>Data</NavLink>
      
    </div>
    </>
  )
}

export default Nav