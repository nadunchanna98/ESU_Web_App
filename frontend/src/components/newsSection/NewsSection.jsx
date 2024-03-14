import React from 'react'
import MainNews from './mainNews/MainNews'
import ScrollSection from './scrollsection/ScrollSection'
import './newsSection.css'

const NewsSection = () => {
  return (
    <div className='news__container '>

      <div className='custom__container news__container-heading'>
        <h3 className='lato-bold '>News Section</h3>
      </div>

      
      <div className='custom__container main__newsSection'>
        <MainNews/>
        <ScrollSection/>
      </div>
  
    </div>
  )
}

export default NewsSection
