import React from 'react'
import './card.css'
import './home'


function Card({ src, title, description, price}) {
  return (
    <div className='card'>
        <img src={src} alt=""/>
        

        <div className='cardtexts'>
             <h2>{title}</h2>
             <h3>{description}</h3>
             <h4>{price}</h4>
        </div>


    </div>
  )
}

export default Card