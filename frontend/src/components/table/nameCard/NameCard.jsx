import React from 'react'
import './nameCard.css'

const NameCard = ({fullName , email , profilePicture}) => {
  return (
    <div className='nameCard__container'>
        <div className='nameCard__ImageContainer'>


        </div>

        <div className='nameCard__TextContainer'>
            <h4 className='lato-bold'>{fullName}</h4>
            <p className='lato-regular'>{email}</p>

        </div>
      
    </div>
  )
}

export default NameCard
