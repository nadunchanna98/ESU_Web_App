import React from 'react'
import BackgroundImage from 'react-background-image'
import './newsCard.css'

const NewsCard = ({image , title, description}) => {
  return (
    <div className='newsCard__MainContainer'>
        
        <div className='newsCard__ImageContainer'>
        <BackgroundImage src={image}/>
        </div>

      <div className='newsCard__TextContainer'>
        <h5 className='lato-bold'>{title}</h5>
        <p className='lato-regular'>{description.substring(0,70)}</p>
      </div>
      
    </div>
  )
}

export default NewsCard
