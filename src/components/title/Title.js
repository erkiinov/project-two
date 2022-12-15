import React from 'react'
import './title.scss'



const Title = ({title, description, align}) => {
    const titleStyle = {
        textAlign: align
    }
  return (
    <>
    {title ? <h1 className='title-alone' style={titleStyle}>{title}</h1> : ''}
    {description ? <p className='description-alone' style={titleStyle}>{description}</p> : ''}

    </>
  )
}

export default Title