import React from 'react'
import Title from '../title/Title'
import './style.scss'

const CustomerReview = ({img}) => {
    console.log(img);
    if (img =='yes'){
    return (
        <div className='customer-reviews-uni'>
            <div className="customer-title">
                <div className="left">
                    <img src="./assets/Ellipse 5.png" alt="" />  
                    <div className="text">
                        <h2>Carla Samantoes-Diego</h2>
                        <h3>Reviewed in the United States on June 18, 2021</h3>
                    </div>  
                </div>    
                <div className="right">
                    <i className="fa-solid fa-star star"></i>
                    <i className="fa-solid fa-star star"></i>
                    <i className="fa-solid fa-star star"></i>
                    <i className="fa-solid fa-star star"></i>
                    <i className="fa-solid fa-star star"></i>
                </div>
            </div> 
            <div className="customer-description">
                <Title description='Eine sehr aromatische Sorte, wollte die Himbeere gerade noch einmal bestellen, derzeit nicht verfügbar. So süße Früchte und das jetzt im Oktober, unglaublich'/>       
                <div className="img">
                    <img src="./assets/Rectangle 1.png" alt="" />
                    <img src="./assets/Rectangle 1.png" alt="" />
                </div>
            </div>
            <div className="customer-bottom">
                <div className="left-text">
                    <h3>Size</h3>
                    <h2>2 PACK</h2>
                </div>
                <a href="/"><h4 className="right-button"><img src="./assets/Frame 16.png" alt="" /><span>VERIFIED</span></h4></a>
            </div>
        </div>
    )
  } else if (img=='no') {
    
    return (
        <div className='customer-reviews-uni'>
            <div className="customer-title">
                <div className="left">
                    <img src="./assets/Ellipse 5.png" alt="" />  
                    <div className="text">
                        <h2>Carla Samantoes-Diego</h2>
                        <h3>Reviewed in the United States on June 18, 2021</h3>
                    </div>  
                </div>    
                <div className="right">
                    <i className="fa-solid fa-star star"></i>
                    <i className="fa-solid fa-star star"></i>
                    <i className="fa-solid fa-star star"></i>
                    <i className="fa-solid fa-star star"></i>
                    <i className="fa-solid fa-star star"></i>
                </div>
            </div> 
            <div className="customer-description">
                <Title description='Eine sehr aromatische Sorte, wollte die Himbeere gerade noch einmal bestellen, derzeit nicht verfügbar. So süße Früchte und das jetzt im Oktober, unglaublich'/>       
                <Title description='Eine sehr aromatische Sorte, wollte die Himbeere gerade noch einmal bestellen, derzeit nicht verfügbar. So süße Früchte und das jetzt im Oktober, unglaublich'/>       
                
            </div>
            <div className="customer-bottom">
                <div className="left-text">
                    <h3>Size</h3>
                    <h2>2 PACK</h2>
                </div>
                <a href="/"><h4 className="right-button"><img src="./assets/Frame 16.png" alt="" /><span>VERIFIED</span></h4></a>
            </div>
        </div>
    )
  }
}

export default CustomerReview