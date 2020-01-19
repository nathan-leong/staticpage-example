import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = props => {
  return(
  <div className='app'>
    <Header/>
    {props.children}
    <Footer/>
  </div>
  )
}

export default Layout