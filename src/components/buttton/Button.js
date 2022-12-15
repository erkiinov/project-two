import React from 'react'
import './Button.scss'

const Button = ({value, bgc, color, border, borderColor, iconImg}) => {
    const bgcChecker = {
        backgroundColor: bgc,
        color: color,
        border: `${border ? border : 0}px solid ${borderColor ? borderColor : '#EFEFEF'}`,
        
    }
    if(value && bgc && color && iconImg){
        return (
          <a href='/'><h1 className='button-uni button-uni-display' style={bgcChecker}><img src={iconImg} alt=''/> {value}</h1></a>
        )
    }else if(value && bgc && color){
      return (
        <a href='/'><h1 className='button-uni' style={bgcChecker}>{value}</h1></a>
      )
    }

  return (
    <div>

    </div>
  )
}

export default Button