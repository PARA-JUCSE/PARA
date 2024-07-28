import React from 'react'
import "./OptionsCard.css"
import { Navigate, useNavigate } from "react-router-dom";

const OptionsCard = ({svg, color, title, desc}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${title.toLowerCase()}`)
    }

    return (
        <div className='options-card' style={{backgroundColor: color}} onClick={handleClick}>        
            <div className='options-card-text'>
                {desc}    
            </div>
            
            <div className='options-card-title'>
                {title}
            </div>
        </div>
    )
}

export default OptionsCard