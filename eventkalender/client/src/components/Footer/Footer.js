import React from 'react'
import './Footer.css'
import Logo from '../../img/logo.svg'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-info'>
            <p>Kontakt: </p>
            <p>Telefon: +00000000000</p>
            <p>Email: event@event.se</p>
        </div>
        <img src={Logo} alt="" />
        <div>
        </div>
    </div>
  )
}

export default Footer