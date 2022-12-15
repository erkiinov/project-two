import React from 'react'
import Button from '../buttton/Button'
import './Showcase.scss'

const Showcase = () => {
  return (
    <div className='showcase-page-1'>
        <div className="left">
            <div className="text">
                <h1 className="showcase-page-1__h1">SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting</h1>
                <p className="showcase-page-1__p">Be sure of our quality - the freshest batches of this season. Non-GMO,<br /> Heirloom - our seeds were tested and have the best germination ratings. <br /> Your easy growing experience is our guarantee</p>
            </div>
            <div className="discount">
                <img src="./assets/Vector.png" alt="" />
                <h3>$12.56</h3>
                <h4>$15.56</h4>
            </div>
            <div className="buttons">
                <Button color='#ffffff' value='Add to card' bgc='#359740'/>
                <Button color='#359740' value='Discover' bgc='#ffffff'/>
            </div>
        </div>
        <img src="./assets/fresh.png" alt="" className='position' />
        <img src="./assets/image 2.png" alt="" />
    </div>
  )
}

export default Showcase