import React, { useState } from 'react'
import './cardDetail.scss'
import Button from '../buttton/Button'

const CardDetail = ({title, price, description, category, image, rating, id}) => {
    return (
    <div className='cardDetail-uni' key={id}>
        <h1 className="title-up">
           <a href="">Main</a> 
           <span>/</span>
           <a href="">Cataloug</a> 
           <span>/</span>
           <a href="">Vegetables</a> 
           <span>/</span>
           <a href="">Cucumber</a> 
           <span>/</span>
           <a href="">Cucumber</a> 
           <span>/</span>
           <a href="">{category}</a> 
        </h1>

        <div className="details">
            <div className="left">
                <img src={image} alt="" className='box' />
                <img src="./assets/image 2 (3).png" alt="" className='box-1'/>
                <img src="./assets/image 3.png" alt="" className='box-2'/>
                <img src="./assets/image 5.png" alt="" className='box-3'/>
                <img src="./assets/image 3.png" alt="" className='box-4'/>
                <img src="./assets/image 2 (3).png" alt="" className='box-5'/>
                <img src="./assets/image 5.png" alt="" className='box-6'/>
            </div>
            <div className="right">
                <h1 className='grid-card-uni-title title'>{title}</h1>
                <div className="buttons">
                    <a href="/"><h2 className="button" style={{
                        background: 'rgba(53, 151, 64, 0.08)',
                        color: '#4FA083'}}> <img src="./assets/Frame 16.png" alt="" /> <span>AVAILABLE</span></h2></a>
                    <a href="/"><h2 className="button" style={{
                        background: 'white',
                        border: '1px solid #EFEFEF',
                        color: '#1F2533'}}> <img src="./assets/Frame 16.png" alt="" /> <span>VEGETABLES</span></h2></a>
                </div>

                <div className="box">
                    <div className="div">
                        <div className="text"><h2>Size</h2><h3>2 PACK</h3></div>

                        <div className="button-pack">
                            <h4>-</h4>
                            <h4>2</h4>
                            <h4>+</h4>
                        </div>
                    </div>

                    <div className="div1">
                        <div className="left-1">
                            <input type="radio" name="radio" id="" />
                            <h5>1 Pack</h5>
                        </div>
                        <div className="right-1">
                            <h2>start from</h2>
                            <h3>$1.56</h3>
                        </div>
                    </div>
                    <div className="div1">
                        <div className="left-1">
                            <input type="radio" name="radio" id="" />
                            <h5>2 Pack</h5>
                        </div>
                        <div className="right-1">
                            <h2>start from</h2>
                            <h3>$1.56</h3>
                        </div>
                    </div>
                    <div className="div1">
                        <div className="left-1">
                            <input type="radio" name="radio" id="" />
                            <h5>3 Pack</h5>
                        </div>
                        <div className="right-1">
                            <h2>start from</h2>
                            <h3>$1.56</h3>
                        </div>
                    </div>
                    <div className="div1">
                        <div className="left-1">
                            <input type="radio" name="radio" id="" />
                            <h5>4 Pack</h5>
                        </div>
                        <div className="right-1">
                            <h2>start from</h2>
                            <h3>$1.56</h3>
                        </div>
                    </div>
                    <div className="div1">
                        <div className="left-1">
                            <input type="radio" name="radio" id="" />
                            <h5>5 Pack</h5>
                        </div>
                        <div className="right-1">
                            <h2>start from</h2>
                            <h3>$1.56</h3>
                        </div>
                    </div>
                </div>

                <div className="bottom_cost">
                    <h3>${price}</h3>
                    <div className="right-2">
                        <i className="fa-regular fa-heart"></i>
                        <Button value={'Add to card'} color='#FFFFFF' bgc='#359740' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardDetail