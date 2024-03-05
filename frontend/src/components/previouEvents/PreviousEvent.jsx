import React from 'react'
import './previousEvent.css'
import BackgroundImage from 'react-background-image'
import event_01 from '../../images/event_01.jpg'

const PreviousEvent = () => {
  return (
    <div className='main__container'>
      <div className='custom__container previousEvent__container'>
        <div className='col_01'>

          <div className='row_01'>
            
          </div>

          <div className='row_02'>
            
          </div>

        </div>

        <div className='col_02'>
        <BackgroundImage src={event_01} className='image_02'></BackgroundImage>
        </div>

        <div className='col_03'></div>

      </div>
    </div>
  )
}

export default PreviousEvent
