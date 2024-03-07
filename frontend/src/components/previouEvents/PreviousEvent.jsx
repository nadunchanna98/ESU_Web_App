import React from 'react'
import './previousEvent.css'
import BackgroundImage from 'react-background-image'
import event_01 from '../../images/event_01.webp'
import event_02 from '../../images/event_02.webp'
import event_03 from '../../images/event_03.webp'
import event_04 from '../../images/event_04.webp'
import event_05 from '../../images/event_05.webp'
import event_06 from '../../images/event_06.webp'

const PreviousEvent = () => {
  return (
    <div className='main__container previouEvent_main__container'>
      <div className='custom__container previousEvent__container'>
        <div className='col_01'>

          <div className='row_01'>
            <BackgroundImage src={event_03} className='image_03'></BackgroundImage>   
          </div>

          <div className='row_02'>
            <div className='subcolom_01'>
              <BackgroundImage src={event_02} className='image_02'></BackgroundImage>

            </div>

            <div className='subcolom_02'>
              <BackgroundImage src={event_05} className='image_05'></BackgroundImage>

            </div>
            
          </div>

        </div>

        <div className='col_02'>
        <BackgroundImage src={event_04} className='image_04'></BackgroundImage>
        </div>

        <div className='col_03'>
          <div className='row_03'>
          <BackgroundImage src={event_01} className='image_01'></BackgroundImage>
            

          </div>

          <div className='row_04'>
            <BackgroundImage src={event_06}  className='image_06'></BackgroundImage>

          </div>

        </div>

      </div>
    </div>
  )
}

export default PreviousEvent
