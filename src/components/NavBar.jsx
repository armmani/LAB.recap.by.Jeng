import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <nav className='h-13 flex items-center gap-6'>
      <NavLink className={'cursor-pointer hover:underline'}to={'/'}>HOME</NavLink>
      <NavLink className={'cursor-pointer hover:underline'} to={'/create'}>Create Post</NavLink>
      <NavLink className={'cursor-pointer hover:underline'} to={'/login'}>LogIn</NavLink>
      <NavLink className={'cursor-pointer hover:underline'} to={'/register'}>Register</NavLink>
    </nav>
  )
}

export default NavBar