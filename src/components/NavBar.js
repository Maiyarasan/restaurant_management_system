import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-end space-x-4 mr-20 m-4 text-2xl font-bold  '>
    
      <li className='list-none cursor-pointer hover:bg-blue-300 hover:text-white hover:scale-105 transform transition duration-150 ease-in-out rounded w-auto h-auto px-3 py-2'>
      <Link to="/"> Home </Link> </li>
      <li className='list-none cursor-pointer hover:bg-blue-300 hover:text-white hover:scale-105 transform transition duration-150 ease-in-out rounded w-auto h-auto px-3 py-2'>
      <Link to="/menu"> Menu </Link> </li>
      <li className='list-none cursor-pointer hover:bg-blue-300 hover:text-white hover:scale-105 transform transition duration-150 ease-in-out rounded w-auto h-auto px-3 py-2'>
      <Link to="/"> Contact </Link> </li>
      <li className='list-none cursor-pointer hover:bg-blue-300 hover:text-white hover:scale-105 transform transition duration-150 ease-in-out rounded w-auto h-auto px-3 py-2'>
      <Link to="/reviews"> Reviews </Link>  </li>
      <li className='list-none cursor-pointer hover:bg-blue-300 hover:text-white hover:scale-105 transform transition duration-150 ease-in-out rounded w-auto h-auto px-3 py-2'>
      <Link to="/about"> About </Link> </li>
   
    </div>
  )
}

export default NavBar