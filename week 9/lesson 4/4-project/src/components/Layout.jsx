import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <footer>@Makers 2022</footer>
   </>
  )
}

export default Layout