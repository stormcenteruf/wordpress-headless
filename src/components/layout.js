import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.css'
import '../styles/layout.css'

const Layout = (props) => {
  return (
    <div className="container">
      <div className="content">
        <Header></Header>
        {props.children}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout