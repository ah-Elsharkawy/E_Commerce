import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = (props) => {
  return (
    <div className='layout'>
      <header>
      <Navbar/>
      </header>
      <main className='main-container'>
        {props.children}
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  )
}

export default Layout