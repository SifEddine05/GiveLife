import React from 'react'
import Nav from './Nav'
import Pagefooter from './Pagefooter'

function Layout({children}) {
  return (
    <div className='relative '>
        <div className='text-white z-50 absolute  top-0 w-full'>
        <Nav />
        </div>
        {children}
        <Pagefooter />
    </div>
  )
}

export default Layout