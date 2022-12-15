import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__top'>
            <ul className="navbar__ul">
                <li className='navbar__li'>ALL PRODUCTS</li>
                <div className='navbar__ul-stick'></div>
                <li className='navbar__li'>ABOUT SEEDRA</li>
                <div className='navbar__ul-stick'></div>
                <li className='navbar__li'>OUR BLOG</li>
            </ul>
            <a href='/'><img src='./assets/Frame.png' alt=''/></a>
            <ul className="navbar__ul">
                <li className='navbar__li'>Terms&Conditions</li>
                <div className='navbar__ul-stick'></div>
                <li className='navbar__li'>Privacy Policy</li>
                
            </ul>
        </div>
        <div className='footer__bottom'>
            <div className='icon'>
                <a href='/'><i className="fa-brands fa-facebook"></i></a>
                <a href='/'><i className="fa-brands fa-instagram"></i></a>
            </div>
            <h2>All rights reserved</h2>
        </div>
    </div>
  )
}

export default Footer