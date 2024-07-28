import React from 'react'
import "./Heading.css"

const Heading = ({children, color, style}) => {
  return (
    <div className='heading' style={{...style, color: color}}>
        {children}
    </div>
  )
}

export default Heading