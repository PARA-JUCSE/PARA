import React, { useState } from 'react'
import "./ResultBox.css"

const ResultBox = ({children, color, backgroundColor, isOpen}) => {
  return (
    <div className={`result-container ${isOpen ? 'open' : 'close'}`} style={{color: color, backgroundColor: backgroundColor}}>
        {children}
    </div>
  )
}

export default ResultBox