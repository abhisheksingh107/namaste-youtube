import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = ({isMenuOpen}) => {
  return (
    <div className='flex'>
       <div className="sticky h-screen top-16">
        <SideBar />
      </div>
      <Outlet/>
    </div>
  )
}

export default Body
