import React from 'react'
import Nav from './Nav'
import '../styles/header.css'
import '../styles/snapscoll.css'
import Home from './Home'

function Header() {
  return (
    <section className='homepage'>
      <Nav/>
      <Home/>
      <div className="wave">

      </div>
    </section>
  )
}

export default Header
