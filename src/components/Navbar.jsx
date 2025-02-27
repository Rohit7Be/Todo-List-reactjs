import React from 'react'
import { FaHome, FaTasks } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-indigo-900 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>Todo-List</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all flex items-center'>
          <FaHome className='mr-2' />
        </li>
        <li className='cursor-pointer hover:font-bold transition-all flex items-center'>
          <FaTasks className='mr-2' />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar