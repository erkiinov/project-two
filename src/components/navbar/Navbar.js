import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'

const fakeNav = [
    {
        li: 'All products',
        link: '/products'
    },
    {
        li: 'About seedra',
    },
    {
        li: 'our blog'
    },
    {
        li: 'Contacts',
    }
]

function Navbar(link) {
    const [bgc, setBgc] = useState({color: 'transparent'})
  return (
    <div className='navbar'>
        <Link to={'/'}><img src="./assets/Frame.png" alt="" /></Link>
        

        <ul className="navbar__ul">
            {
                fakeNav.map(({li, link}, index) => <>
                    <Link to={link} key={index}><li className='navbar__li' key={index*19}>{li.toUpperCase()}</li></Link>
                    <div className='navbar__ul-stick' key={index*17}></div>
                </>)
            }
        </ul>
        <div className="navbar__right">
            <a href="/"><i className="fa-brands fa-instagram instagram"></i></a>
            <a href="/"><i className="fa-brands fa-facebook facebook"></i></a>
            <form>
                <button><i className="fa-solid fa-magnifying-glass search"></i></button>
                <input type="text" placeholder='Search'/>
            </form>
            <div className="icons">
                <i className="fa-solid fa-heart like" onClick={()=>{setBgc({color: '#359740'})}} style={bgc}></i>
                <i className="fa-solid fa-cart-shopping cart"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar