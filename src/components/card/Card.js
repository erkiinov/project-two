import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'

function Card({img, title, starCount, cost, id}) {
 let sliced = title.slice(0, 20)
  return (
    <Link to={`/detail${id}`}>
      <div className='Card-unique' key={id}>
        <img src={img} alt="" />
        <div className='text-all'>
          <div className="text">
              <div className="icons">
                  <div className="icon">
                      <i className="fa-solid fa-star star"></i>
                      <i className="fa-solid fa-star star"></i>
                      <i className="fa-solid fa-star star"></i>
                      <i className="fa-solid fa-star star"></i>
                      <i className="fa-solid fa-star star"></i>
                  </div>
                  <h2 className='starCount'>({starCount})</h2>
              </div>

              <h1 className='title'>{sliced}...</h1>
          </div>
          <div className='cost'>
            <h2>${cost}</h2>
            <a href='/'><h3><i className="fa-solid fa-cart-shopping"></i></h3></a>
          </div>
        </div>
        
      </div>
    </Link>
  )
}

export default Card