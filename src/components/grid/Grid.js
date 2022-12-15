import React from 'react'
import './Grid.scss'
import Button from '../buttton/Button'

const Grid = ({time, title, description, img, bgc}) => {
  const style = {
    backgroundColor: bgc,
  }
  return (
    <div className='grid-card-uni' style={style}>
        <div className='time'>
            <i className="fa-solid fa-clock clock"></i>
            <h2>{time}</h2>
        </div>
        <h1 className='grid-card-uni-title'>{title}</h1>
        {description ? <p className='description'>{description}</p> : ''}
        <Button value='Read' color='#359740' bgc='white'/>

        <img src={img} alt='' className='position'/>
    </div>
  )
}

export default Grid