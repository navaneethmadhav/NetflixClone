import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
        <img className='nav-logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'/>
        <a className='other-links'>Movies</a>
        <a className='other-links'>Series</a>
    </div>
  )
}

export default Nav