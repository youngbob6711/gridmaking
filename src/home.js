import React from 'react'
import './home.css'
import Card from './card'
import './1 (35).jpg'
import IMG from './1 (35).jpg'
import IMG2 from './1 (37).jpg'
import IMG3 from './1 (10).jpg'




function Home() {
  return (
    <div className='home'>
        
    <div className='sectionhome'>
        <Card 
        src={IMG}
        title="Unique Ways"
        description="Spaces that are more than just a place to sleep"
        price="$400"
        />
        <Card 
        src={IMG2}
        title="Unique Ways"
        description="Spaces that are more than just a place to sleep"
        price="$400"
        />
        <Card 
        src={IMG3}
        title="Unique Ways"
        description="Spaces that are more than just a place to sleep"
        price="$400"
        />
        
        </div>

        <div className='sectionhome'>
        <Card />
        <Card />
        <Card />
        </div>
    </div>
  )
}

export default Home