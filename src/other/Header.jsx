import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl font-medium font-serif'>Hello  <br /> <span className='text-4xl font-serif'>Ayush 🔥</span>  </h1>
        <button className='bg-red-600 cursor-pointer text-lg font-medium px-3 py-2 text-white rounded-sm'>Log out</button>
    </div>
  )
}

export default Header