import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface ChildProps{
    children:any
}

const Layout = ({children}:ChildProps) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
      
    </div>
  )
}

export default Layout
